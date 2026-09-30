import {
  LayoutDashboard,
  Clock3,
  PlusCircle,
  LogOut,
  X,
  Code2,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/storage";

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const menu = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      label: "Shift Requests",
      icon: Clock3,
      path: "/shift-requests",
    },
    {
      label: "Add Shift Request",
      icon: PlusCircle,
      path: "/shift-requests/add",
    },
  ];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-72
          bg-white
          border-r border-slate-200
          shadow-xl
          transition-transform duration-300
          lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg">
              <Code2 size={24} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-950">
                zero2code
              </h1>
              <p className="text-xs text-slate-400">
                Employee Portal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-6">
          <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
            Main Menu
          </p>

          <nav className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-xl px-4 py-3
                    text-sm font-semibold transition-all
                    ${
                      isActive
                        ? "bg-slate-950 text-white shadow-lg shadow-slate-950/20"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }
                    `
                  }
                >
                  <Icon size={19} />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            <LogOut size={19} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}