import React, { useState } from 'react'
import { Button } from 'src/components/ui/button'

const LoginPage: React.FC = () => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add authentication logic here
    alert(`User Id: ${userId}\nPassword: ${password}`)
  }

  return (
    <div className="flex min-h-screen items-stretch bg-gray-100">
      {/* Left Side - Image or Placeholder */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-200 border-r border-gray-300">
        {/* Replace below div with an <img> tag if you have an image */}
        <span className="text-2xl text-gray-300">Login Page</span>
      </div>
      {/* Right Side - Login Form */}
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md border border-gray-400 bg-white px-8 py-10 shadow-none"
        >
          <h2 className="mb-8 text-left text-2xl font-normal text-gray-900">Admin Login</h2>
          <div className="mb-4">
            <label className="mb-1 block text-sm text-gray-700" htmlFor="userId">
              User Id
            </label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="w-full rounded-none border-0 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="mb-1 block text-sm text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-none border-0 bg-gray-200 px-3 py-2 text-gray-900 focus:outline-none"
            />
          </div>
          <div className="mb-6 text-xs text-gray-700">
            <a href="#" className="hover:underline">Forgot Password ?</a>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-cyan-400 px-6 py-1 text-white rounded-md w-24">Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
