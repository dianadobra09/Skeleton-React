import { Meta, StoryFn } from '@storybook/react';
import React, { useRef } from 'react';
import { Table } from './Table';
import { Box } from '../Box/Box';
import { AgGridReact } from 'ag-grid-react';

const ROWS = [
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 }
];

const COL_DEFS = [{ field: 'make', sortable: true }, { field: 'model', sortable: true }, { field: 'price' }];

export default {
  title: 'Core/Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    controls: { include: [] }
  }
} as Meta<typeof Table>;

export const WithHeader: StoryFn<typeof Table> = () => {
  const gridRef = useRef<AgGridReact>(null);

  return (
    <Box height={'400px'}>
      <Table rowData={ROWS} colDefs={COL_DEFS} ref={gridRef} />
    </Box>
  );
};

export const WithoutHeader: StoryFn<typeof Table> = () => {
  const gridRef = useRef<AgGridReact>(null);

  return (
    <Box height={'400px'}>
      <Table rowData={ROWS} colDefs={COL_DEFS} ref={gridRef} hideHeader />
    </Box>
  );
};
