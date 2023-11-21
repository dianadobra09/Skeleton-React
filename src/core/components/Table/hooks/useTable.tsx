import { AgGridReact } from 'ag-grid-react';

// add here all the functions that you need from the table
export const useTable = (ref: React.RefObject<AgGridReact>) => {
  const getSelectedRows = () => ref?.current?.api.getSelectedRows();

  return { getSelectedRows };
};
