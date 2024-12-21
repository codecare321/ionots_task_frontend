import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createProject } from "../services/projectService";
import { getAllUsers } from "../services/userApi";

function CreateProject() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    status: "Pending",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        const filteredUsers = response.filter((user) => user.role !== "admin");
        setUsers(filteredUsers);
      } catch (err) {
        console.error("Error fetching users:", err);
        toast.error("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await createProject(formData);
      console.log(response);

      toast.success("Project created successfully!");
      setShowModal(false);
      setFormData({
        title: "",
        description: "",
        assignedTo: "",
        status: "Pending",
      });
    } catch (err) {
      console.error("Error creating project:", err);
      setError("Failed to create project. Please try again.");
      toast.error("Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      title: "",
      description: "",
      assignedTo: "",
      status: "Pending",
    });
    setError("");
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        Create Project
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-lg shadow-xl w-96 max-w-full p-6 transform transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Create New Project
            </h2>

            {/* Project Creation Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="title"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="description"
                >
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="assignedTo"
                >
                  Assigned To
                </label>
                <select
                  id="assignedTo"
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleInputChange}
                  required
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a user</option>
                  {users.map((user) => (
                    <option key={user._id} value={user._id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="status"
                >
                  Project Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              {loading ? (
                <div className="text-center py-4">Submitting...</div>
              ) : (
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none transition duration-200 ease-in-out mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200 ease-in-out"
                  >
                    Create
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateProject;
