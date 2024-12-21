function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full">
            <span className="text-xl font-bold">I</span>
          </div>
          <h1 className="text-2xl font-semibold">Ionots - Admin Panel</h1>
        </div>

        <div className="flex-grow mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            aria-label="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3c0 .217-.047.42-.132.605L4 17h5m0 0v1a3 3 0 006 0v-1m-6 0h6"
              />
            </svg>
          </button>

          <div className="relative">
            <button
              className="flex items-center gap-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600"
              aria-label="Profile"
            >
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-300 hidden md:inline">Admin</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-gray-300 rounded-md shadow-lg hidden group-hover:block">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-600">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-600">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-600">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
