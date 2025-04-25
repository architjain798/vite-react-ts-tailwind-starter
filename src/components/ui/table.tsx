import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
} from '@tanstack/react-table'

export interface TableColumn<T> {
  key: keyof T
  label: string
  render?: (value: any, row: T) => React.ReactNode
}

interface TableProps<T extends object> {
  columns: TableColumn<T>[]
  data: T[]
}

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pageIndex, setPageIndex] = React.useState(0)
  const [pageSize, setPageSize] = React.useState(5)

  // Convert TableColumn to TanStack ColumnDef
  const columnDefs = React.useMemo<ColumnDef<T, any>[]>(() =>
    columns.map((col) => ({
      accessorKey: col.key as string,
      header: () => col.label,
      cell: info => col.render ? col.render(info.getValue(), info.row.original) : info.getValue(),
      enableSorting: true,
    })),
    [columns]
  )

  const table = useReactTable({
    data,
    columns: columnDefs,
    state: {
      sorting,
      pagination: { pageIndex, pageSize },
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
    pageCount: Math.ceil(data.length / pageSize),
  })

  return (
    <div className="overflow-x-auto w-full rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full rounded-lg overflow-hidden">
        <thead className="bg-[#f5f2ef]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-base font-semibold text-gray-800 tracking-wide border-b border-gray-200 select-none cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() === 'asc' && <span className="text-xs">▲</span>}
                    {header.column.getIsSorted() === 'desc' && <span className="text-xs">▼</span>}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-[#f5f2ef] transition-colors">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-3 whitespace-nowrap text-base text-gray-900 border-b border-gray-100">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4 px-4 pb-4">
        <div className="flex gap-2">
          <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} className="px-2 py-1 border rounded disabled:opacity-50">{'<<'}</button>
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="px-2 py-1 border rounded disabled:opacity-50">{'<'}</button>
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="px-2 py-1 border rounded disabled:opacity-50">{'>'}</button>
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} className="px-2 py-1 border rounded disabled:opacity-50">{'>>'}</button>
        </div>
        <span className="text-xs">
          Page{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <select
          className="border rounded px-2 py-1 text-xs"
          value={table.getState().pagination.pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
            setPageIndex(0)
          }}
        >
          {[5, 10, 20, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Table
