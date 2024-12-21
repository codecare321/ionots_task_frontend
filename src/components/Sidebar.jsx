import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineProject,
} from "react-icons/ai";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <AiOutlineDashboard /> },
    {
      name: "Create User",
      path: "/admin/create-user",
      icon: <AiOutlineUser />,
    },
    {
      name: "Create Project",
      path: "/admin/create-project",
      icon: <AiOutlineProject />,
    },
    {
      name: "User Dashboard",
      path: "/user-dashboard/1",
      icon: <AiOutlineDashboard />,
    },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>

      <ul className="mt-4 flex-grow">
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <Link
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-md text-base ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 hover:text-gray-200"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="p-4 border-t border-gray-700">
        <button className="w-full text-sm bg-red-600 hover:bg-red-700 py-2 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
