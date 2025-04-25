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
      <main className="flex-1 p-12 flex flex-col bg-white">
        <h1 className="text-3xl font-normal text-gray-900 mb-8">Warehouse list</h1>
        <div className="flex gap-4 mb-8">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-none" style={{boxShadow: 'none'}}>+ Create Warehouse</Button>
          <Button variant="outline" className="border-gray-400 text-gray-800 px-6 py-2 rounded shadow-none bg-white">Upload Via CSV</Button>
        </div>
        <div className="bg-[#f5f2ef] p-4 rounded shadow-sm">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  )
}

export default DashboardPage