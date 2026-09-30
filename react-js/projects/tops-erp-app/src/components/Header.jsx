import {
  Bell,
  Menu,
  Search,
  UserCircle,
} from "lucide-react";
import { getAuthUser } from "../services/storage";

export default function Header({ onMenuClick }) {
  const user = getAuthUser();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur md:px-6 lg:ml-72">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-xl p-2.5 text-slate-600 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={23} />
        </button>

        <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 md:flex">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-400 lg:w-64"
          />
        </div>

        <div className="md:hidden">
          <h2 className="text-lg font-extrabold text-slate-950">
            zero2code
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-bold text-slate-900">
              {user?.name || "Employee"}
            </p>

            <p className="text-xs text-slate-400">
              {user?.role || "Employee"}
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
            <UserCircle size={25} />
          </div>
        </div>
      </div>
    </header>
  );
}