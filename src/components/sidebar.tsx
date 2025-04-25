import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-gray-300 bg-[#92948A] p-0">
      <div className="mb-12 mt-12 px-8 text-2xl font-normal tracking-wide text-white">ADMIN</div>
      <nav className="flex flex-col gap-8 px-8">
        <a href="#" className="text-base font-normal text-white hover:underline">
          Dashboard
        </a>
        <a href="#" className="text-base font-normal text-white hover:underline">
          Warehouse List
        </a>
        <a href="#" className="text-base font-normal text-white hover:underline">
          Setting
        </a>
        <a href="#" className="text-base font-normal text-white hover:underline">
          Logout
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar
