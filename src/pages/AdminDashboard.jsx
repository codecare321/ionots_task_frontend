import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          A centralized panel to manage users, projects, and system operations.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Manage Users
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Add, update, or remove users from the system.
          </p>
          <button
            onClick={() => navigate("/admin/create-user")}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 transition-colors"
          >
            Go to Users
          </button>
        </div>

        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Manage Projects
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Assign, track, and oversee ongoing projects.
          </p>
          <button
            onClick={() => navigate("/admin/create-project")}
            className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-500 transition-colors"
          >
            Go to Projects
          </button>
        </div>

        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            User Dashboard
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Access detailed user-specific dashboards.
          </p>
          <button
            onClick={() => navigate("/user-dashboard/1")}
            className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-500 transition-colors"
          >
            View User Dashboard
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
