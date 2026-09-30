import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ShiftRequests from "./pages/ShiftRequests";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

import {
  getAuthUser,
  initializeStorage,
} from "./services/storage";

function ProtectedLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ProtectedRoute>
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <Header
        onMenuClick={() => setSidebarOpen(true)}
      />

      {children}
    </ProtectedRoute>
  );
}

export default function App() {
  useEffect(() => {
    initializeStorage();
  }, []);

  const isAuthenticated = !!getAuthUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={
                isAuthenticated
                  ? "/dashboard"
                  : "/login"
              }
              replace
            />
          }
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

        <Route
          path="/shift-requests"
          element={
            <ProtectedLayout>
              <ShiftRequests />
            </ProtectedLayout>
          }
        />

        <Route
          path="/shift-requests/add"
          element={
            <ProtectedLayout>
              <ShiftRequests />
            </ProtectedLayout>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}