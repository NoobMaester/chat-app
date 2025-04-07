
'use client'

export default function RegisterPage() {
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-[#7b3cd3] mb-6 text-center">Register</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your First Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#7b3cd3] text-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your Last Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#7b3cd3] text-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#7b3cd3] text-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#7b3cd3] text-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#7b3cd3] text-white py-2 rounded-lg hover:bg-[#7b3cd3] cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
