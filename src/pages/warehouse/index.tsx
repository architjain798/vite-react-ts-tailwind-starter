import * as React from 'react'
import { useState, useMemo } from 'react'
import Sidebar from 'src/components/sidebar'
import Table, { TableColumn } from 'src/components/ui/table'
import { Button } from 'src/components/ui/button'

interface WarehouseItem {
  id: number
  name: string
  category: string
  quantity: number
  status: string
}

const staticData: WarehouseItem[] = [
  { id: 1, name: 'Item A', category: 'Electronics', quantity: 120, status: 'In Stock' },
  { id: 2, name: 'Item B', category: 'Apparel', quantity: 80, status: 'Low Stock' },
  { id: 3, name: 'Item C', category: 'Furniture', quantity: 0, status: 'Out of Stock' },
  { id: 4, name: 'Item D', category: 'Electronics', quantity: 45, status: 'In Stock' },
  { id: 5, name: 'Item E', category: 'Apparel', quantity: 200, status: 'In Stock' },
]

const categories = ['All', ...Array.from(new Set(staticData.map((item) => item.category)))]

const WarehousePage: React.FC = () => {
  const [filter, setFilter] = useState('All')
  const filteredData = useMemo(
    () => (filter === 'All' ? staticData : staticData.filter((item) => item.category === filter)),
    [filter],
  )

  const columns: TableColumn<WarehouseItem>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'quantity', label: 'Quantity' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span
          className={
            value === 'In Stock' ? 'text-green-600' : value === 'Low Stock' ? 'text-yellow-600' : 'text-red-600'
          }
        >
          {value}
        </span>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex flex-1 flex-col p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Warehouse Inventory</h1>
          <Button className="rounded-md bg-cyan-500 px-6 py-2 text-white">Add Item</Button>
        </div>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="category-filter" className="mr-2 text-sm text-gray-700">
            Filter by Category:
          </label>
          <select
            id="category-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded border border-gray-300 px-2 py-1 text-sm"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <Table columns={columns} data={filteredData} />
        </div>
      </main>
    </div>
  )
}

export default WarehousePage
