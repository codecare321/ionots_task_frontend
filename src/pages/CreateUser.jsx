import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/userApi";
import { toast, ToastContainer } from "react-toastify";

function CreateUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createUser(formData);
      toast.success("User created successfully!");

      setTimeout(() => {
        navigate(`/user-dashboard/${data.user._id}`);
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error creating user");
      setError(error.response?.data?.message || "Error creating user");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        pauseOnFocusLoss={false}
        pauseOnHover={true}
        theme="colored"
      />
      <header className="mb-6 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Create New User
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          Fill out the form to create a new user.
        </p>
      </header>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
        >
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
