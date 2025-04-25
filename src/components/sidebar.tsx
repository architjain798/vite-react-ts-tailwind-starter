import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <aside className="min-h-screen w-64 bg-[#94968b] flex flex-col p-0 border-r border-gray-300">
      <div className="mt-12 mb-12 px-8 text-2xl font-normal text-white tracking-wide">ADMIN</div>
      <nav className="flex flex-col gap-8 px-8">
        <a href="#" className="text-white text-base font-normal hover:underline">Dashboard</a>
        <a href="#" className="text-white text-base font-normal hover:underline">Warehouse List</a>
        <a href="#" className="text-white text-base font-normal hover:underline">Setting</a>
        <a href="#" className="text-white text-base font-normal hover:underline">Logout</a>
      </nav>
    </aside>
  )
}

export default Sidebar
