import { useState, useEffect } from "react";
import { getAllUsers } from "../services/userApi"; 
import { toast } from "react-toastify"; 
import { getProjectsByUser } from "../services/projectService"; 

function UserDashboard() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers(); 
        const filteredUsers = data.filter((user) => user.role !== "admin"); 
        setUsers(filteredUsers); 
        setLoading(false); 
      } catch (err) {
        console.log(err);
        setError("Error fetching users"); 
        toast.error("Failed to load users"); 
        setLoading(false); 
      }
    };

    fetchUsers(); 
  }, []); 

  const handleViewClick = async (user) => {
    try {
      setSelectedUser(user); 
      setShowModal(true); 
      const projects = await getProjectsByUser(user._id); 
      setSelectedUser((prevState) => ({
        ...prevState,
        projects: projects, 
      }));
    } catch (err) {
      console.log(err);
      toast.error("Failed to load projects");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setSelectedUser(null); 
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-gray-900">
          User Dashboard
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          Below is the list of all users in the system.
        </p>
      </header>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleViewClick(user)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-lg shadow-xl w-96 max-w-full p-6 transform transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              User Details
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Role:</strong> {selectedUser.role}
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">Projects</h3>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                {selectedUser.projects && selectedUser.projects.length > 0 ? (
                  selectedUser.projects.map((project) => (
                    <li key={project._id} className="text-sm text-gray-600">
                      <strong>{project.title}</strong>
                      <p className="text-xs text-gray-500 mt-1">
                        {project.description}
                      </p>
                      <span className="text-xs text-gray-400 mt-1 inline-block">
                        {project.status}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-500">
                    No projects assigned
                  </li>
                )}
              </ul>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
