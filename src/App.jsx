import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import CreateUser from "./pages/CreateUser";
import UserDashboard from "./pages/UserDashboard";
import CreateProject from "./pages/ CreateProject";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <div className="p-6">
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/admin/create-user" element={<CreateUser />} />
                <Route
                  path="/admin/create-project"
                  element={<CreateProject />}
                />
                <Route
                  path="/user-dashboard/:userId"
                  element={<UserDashboard />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
