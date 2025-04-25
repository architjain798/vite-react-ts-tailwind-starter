import React from 'react'
import Sidebar from 'src/components/sidebar'
import Table, { TableColumn } from 'src/components/ui/table'
import { Button } from 'src/components/ui/button'

interface Warehouse {
  id: string
  name: string
  status: string
  city: string
  email: string
}

const columns: TableColumn<Warehouse>[] = [
  {
    key: 'id',
    label: 'Warehouse Id',
    render: (value) => (
      <div className="flex items-center gap-2">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
        <span>{value}</span>
      </div>
    ),
  },
  { key: 'name', label: 'Warehouse Name' },
  { key: 'status', label: 'Status' },
  { key: 'city', label: 'City' },
  { key: 'email', label: 'Email Id' },
]

const data: Warehouse[] = [
  { id: 'WC-123456', name: 'Warehouse A', status: 'Accepted', city: 'Dubai', email: 'r@g.com' },
  { id: 'WC-123456', name: 'Warehouse B', status: 'Need Attention', city: 'Abu Dhabi', email: 'r@g.com' },
  { id: 'WC-123456', name: 'Warehouse C', status: 'Accepted', city: 'Fujairah', email: 'r@g.com' },
  { id: 'WC-123456', name: 'Warehouse D', status: 'Accepted', city: 'Sharjah', email: 'r@g.com' },
  { id: 'WC-123456', name: 'Warehouse E', status: 'Need Attention', city: 'Dubai', email: 'r@g.com' },
  { id: 'WC-123456', name: 'Warehouse F', status: 'Accepted', city: 'Sharjah', email: 'r@g.com' },
]

const DashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex h-screen min-h-screen flex-1 flex-col overflow-y-auto bg-white p-12">
        <h1 className="mb-8 text-3xl font-normal text-gray-900">Warehouse list</h1>
        <div className="mb-8 flex gap-4">
          <Button
            className="rounded bg-blue-500 px-6 py-2 text-white shadow-none hover:bg-blue-600"
            style={{ boxShadow: 'none' }}
          >
            + Create Warehouse
          </Button>
          <Button variant="outline" className="rounded border-gray-400 bg-white px-6 py-2 text-gray-800 shadow-none">
            Upload Via CSV
          </Button>
        </div>
        <div className="rounded bg-[#f5f2ef] p-4 shadow-sm">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
