import { ColDef, GridOptions } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useCallback, useMemo } from 'react';
import { useSidebarCollapseState } from '../../hooks/useSidebarCollapseState';
import { useWindowResizeSubscriber } from '../../hooks/useWindowResize';
import { StyledContainer } from './Table.styles';

import { LicenseManager } from 'ag-grid-enterprise';
LicenseManager.setLicenseKey(
  'Using_this_AG_Grid_Enterprise_key_( AG-047805 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( WebCBG )_is_granted_a_( Multiple Applications )_Developer_License_for_( 1 ))_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_need_to_be_licensed_in_addition_to_the_ones_working_with_AG_Grid_Enterprise___This_key_has_been_granted_a_Deployment_License_Add-on_for_( 2 )_Production_Environments___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 23 January 2025 )____[v2]_MTczNzU5MDQwMDAwMA==bb2c9cc07c62aa4001a00d29761d6f81'
);

interface TableProps {
  colDefs: ColDef[];
  rowData: unknown[];
  hideHeader?: boolean;
  gridOptions?: GridOptions;
}

const Table = React.forwardRef<AgGridReact, TableProps>((props, ref) => {
  const { colDefs, rowData, hideHeader, gridOptions } = props;

  const { sidebarCollapseStateSubscriber } = useSidebarCollapseState();

  const resizeGrid = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref?.current?.api?.sizeColumnsToFit({});
  }, []);

  sidebarCollapseStateSubscriber(() => {
    setTimeout(() => {
      resizeGrid();
    }, 300);
  });

  useWindowResizeSubscriber(() => {
    resizeGrid();
  });

  const mergedGridOptions: GridOptions = useMemo(() => {
    return {
      rowSelection: 'multiple',
      suppressRowClickSelection: true,
      suppressMovableColumns: true,
      suppressContextMenu: true,
      animateRows: true,
      headerHeight: hideHeader ? 0 : 50,
      onGridReady: resizeGrid,
      style: {
        with: '100%'
      },
      tooltipShowDelay: 0,
      defaultColDef: {
        suppressMenu: true,
        minWidth: 100,
        valueFormatter: ({ value }) => (value && !isNaN(value) ? value.toLocaleString() : value)
      },
      ...gridOptions
    };
  }, [gridOptions]);

  return (
    <StyledContainer className="ag-theme-alpine">
      <AgGridReact ref={ref} rowData={rowData} columnDefs={colDefs} gridOptions={mergedGridOptions}></AgGridReact>
    </StyledContainer>
  );
});
Table.displayName = 'Table';

export { Table };
