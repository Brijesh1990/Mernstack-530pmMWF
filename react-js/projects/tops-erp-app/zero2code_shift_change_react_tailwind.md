# Zero2Code — Shift Change Request React + Tailwind CSS Application

A complete, responsive React.js + Tailwind CSS implementation for a **Zero2Code** employee portal with:

- Eye-catching login page
- Fixed mobile-number credentials stored/checked through `localStorage`
- Login/logout authentication
- Dashboard matching the supplied enterprise/admin-style UI
- Shift Change Request CRUD
- Add request
- View requests
- Edit request
- Update request
- Delete request
- Search/filter
- Responsive sidebar
- Responsive mobile header
- Toast notifications
- LocalStorage persistence
- Modern cards, tables, modal forms and status badges
- Tailwind CSS UI
- React Router navigation

> **Important:** Since the reference screenshots are image-based, exact pixel coordinates can vary slightly depending on the screenshot dimensions. The implementation below follows the same visual direction: left navigation, top header, dashboard cards, content table, modal form, rounded cards, shadows and responsive behavior.

---

# 1. Application Preview

## Login

The login page contains:

- Zero2Code branding
- Username/mobile number
- Password
- Show/hide password
- Remember-me checkbox
- Login button
- Responsive two-column visual layout
- Demo credential information

### Fixed login credentials

```text
Username: 9998003879
Password: 9998003879
```

The credentials are initialized in `localStorage`.

---

# 2. Dashboard Features

After successful login, the user is redirected to:

```text
/dashboard
```

Dashboard includes:

### Sidebar

- Dashboard
- Shift Change Requests
- Add Shift Request
- Logout

### Dashboard cards

- Total Requests
- Pending Requests
- Approved Requests
- Rejected Requests

### Shift Change Request table

Columns:

- Employee
- Employee ID
- Current Shift
- Requested Shift
- Request Date
- Reason
- Status
- Actions

### Actions

- View
- Edit
- Delete

---

# 3. Technology Stack

```text
React.js
React Router DOM
Tailwind CSS
Vite
Lucide React
LocalStorage
JavaScript ES6+
```

---

# 4. Project Installation

## Create React project

```bash
npm create vite@latest zero2code-shift-app -- --template react
```

```bash
cd zero2code-shift-app
```

Install dependencies:

```bash
npm install
```

Install React Router:

```bash
npm install react-router-dom
```

Install icons:

```bash
npm install lucide-react
```

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

Run:

```bash
npm run dev
```

---

# 5. Project Structure

```text
zero2code-shift-app/
│
├── public/
│   └── logo.svg
│
├── src/
│   │
│   ├── assets/
│   │   └── login-illustration.svg
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── Modal.jsx
│   │   ├── Toast.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ShiftRequests.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   └── storage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

# 6. `src/index.css`

```css
@import "tailwindcss";

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background: #f8fafc;
  color: #0f172a;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
```

---

# 7. `src/services/storage.js`

This file manages all localStorage operations.

```javascript
const USERS_KEY = "zero2code_users";
const AUTH_KEY = "zero2code_auth";
const REQUEST_KEY = "zero2code_shift_requests";

const defaultUsers = [
  {
    id: 1,
    username: "9998003879",
    password: "9998003879",
    name: "Zero2Code Employee",
    role: "Employee",
  },
];

const defaultRequests = [
  {
    id: 1,
    employee: "Brijesh Pandey",
    employeeId: "Z2C001",
    currentShift: "Morning",
    requestedShift: "Evening",
    requestDate: "2026-08-18",
    reason: "Personal requirement",
    status: "Pending",
  },
  {
    id: 2,
    employee: "Rahul Sharma",
    employeeId: "Z2C002",
    currentShift: "Evening",
    requestedShift: "Night",
    requestDate: "2026-08-17",
    reason: "Transport availability",
    status: "Approved",
  },
  {
    id: 3,
    employee: "Priya Patel",
    employeeId: "Z2C003",
    currentShift: "Night",
    requestedShift: "Morning",
    requestDate: "2026-08-16",
    reason: "Family requirement",
    status: "Rejected",
  },
];

export const initializeStorage = () => {
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }

  if (!localStorage.getItem(REQUEST_KEY)) {
    localStorage.setItem(REQUEST_KEY, JSON.stringify(defaultRequests));
  }
};

export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
};

export const loginUser = (username, password) => {
  const users = getUsers();

  const user = users.find(
    (item) =>
      item.username === username &&
      item.password === password
  );

  if (!user) {
    return null;
  }

  const session = {
    id: user.id,
    username: user.username,
    name: user.name,
    role: user.role,
    loggedInAt: new Date().toISOString(),
  };

  localStorage.setItem(AUTH_KEY, JSON.stringify(session));

  return session;
};

export const getAuthUser = () => {
  return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
};

export const logoutUser = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getRequests = () => {
  return JSON.parse(localStorage.getItem(REQUEST_KEY) || "[]");
};

export const saveRequests = (requests) => {
  localStorage.setItem(
    REQUEST_KEY,
    JSON.stringify(requests)
  );
};

export const addRequest = (request) => {
  const requests = getRequests();

  const newRequest = {
    ...request,
    id: Date.now(),
  };

  const updated = [newRequest, ...requests];

  saveRequests(updated);

  return newRequest;
};

export const updateRequest = (id, data) => {
  const requests = getRequests();

  const updated = requests.map((request) =>
    request.id === id
      ? {
          ...request,
          ...data,
        }
      : request
  );

  saveRequests(updated);

  return updated;
};

export const deleteRequest = (id) => {
  const requests = getRequests();

  const updated = requests.filter(
    (request) => request.id !== id
  );

  saveRequests(updated);

  return updated;
};
```

---

# 8. `src/components/ProtectedRoute.jsx`

```jsx
import { Navigate } from "react-router-dom";
import { getAuthUser } from "../services/storage";

export default function ProtectedRoute({ children }) {
  const user = getAuthUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
```

---

# 9. `src/components/Sidebar.jsx`

```jsx
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
```

---

# 10. `src/components/Header.jsx`

```jsx
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
```

---

# 11. `src/components/StatCard.jsx`

```jsx
export default function StatCard({
  title,
  value,
  icon,
  description,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-2xl border border-slate-200
        bg-white p-5 shadow-sm
        transition duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-extrabold text-slate-950">
            {value}
          </h3>

          <p className="mt-2 text-xs text-slate-400">
            {description}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
          {icon}
        </div>
      </div>
    </div>
  );
}
```

---

# 12. `src/components/Modal.jsx`

```jsx
import { X } from "lucide-react";

export default function Modal({
  open,
  title,
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-5">
          <h2 className="text-xl font-extrabold text-slate-950">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={21} />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
```

---

# 13. `src/pages/Login.jsx`

```jsx
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Phone, ArrowRight, Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { initializeStorage, loginUser } from "../services/storage";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    initializeStorage();

    setError("");

    if (!username || !password) {
      setError("Please enter mobile number and password.");
      return;
    }

    const user = loginUser(username, password);

    if (!user) {
      setError("Invalid mobile number or password.");
      return;
    }

    if (remember) {
      localStorage.setItem(
        "zero2code_remember",
        username
      );
    }

    navigate("/dashboard");
  };

  const useDemoCredentials = () => {
    setUsername("9998003879");
    setPassword("9998003879");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT VISUAL PANEL */}
        <div className="relative hidden overflow-hidden bg-slate-950 lg:flex">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-20">
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-950">
                <Code2 size={26} />
              </div>

              <div>
                <h1 className="text-2xl font-black">
                  zero2code
                </h1>

                <p className="text-xs text-white/50">
                  Employee Management System
                </p>
              </div>
            </div>

            <div className="max-w-xl">
              <div className="mb-7 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                Workforce Management
              </div>

              <h2 className="text-5xl font-black leading-tight text-white xl:text-6xl">
                Manage your
                <span className="block text-white/60">
                  work shifts smarter.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
                Submit shift change requests, track approval
                status and manage employee schedules from one
                simple dashboard.
              </p>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black text-white">24/7</p>
                  <p className="mt-1 text-xs text-white/40">Access</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black text-white">100%</p>
                  <p className="mt-1 text-xs text-white/40">Digital</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black text-white">Fast</p>
                  <p className="mt-1 text-xs text-white/40">Workflow</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/30">
              © 2026 Zero2Code. All rights reserved.
            </p>
          </div>
        </div>

        {/* LOGIN PANEL */}
        <div className="flex min-h-screen items-center justify-center bg-white px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">

            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <Code2 size={23} />
              </div>

              <div>
                <h1 className="text-xl font-black">
                  zero2code
                </h1>

                <p className="text-xs text-slate-400">
                  Employee Portal
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                Welcome Back
              </p>

              <h2 className="text-4xl font-black tracking-tight text-slate-950">
                Sign in
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Sign in to access your Zero2Code employee
                dashboard.
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Mobile Number
                </label>

                <div className="relative">
                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    value={username}
                    onChange={(e) =>
                      setUsername(
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    placeholder="Enter mobile number"
                    className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-semibold outline-none transition focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/5"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter password"
                    className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-12 text-sm font-semibold outline-none transition focus:border-slate-950 focus:bg-white focus:ring-4 focus:ring-slate-950/5"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-950"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-500">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) =>
                      setRemember(e.target.checked)
                    }
                    className="h-4 w-4 rounded border-slate-300"
                  />

                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm font-bold text-slate-950 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 text-sm font-bold text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Sign In

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Demo Login
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button
              onClick={useDemoCredentials}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-left transition hover:border-slate-300 hover:bg-slate-100"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Fixed credentials
              </p>

              <div className="mt-2 flex justify-between gap-3 text-sm">
                <span className="font-bold text-slate-700">
                  9998003879
                </span>

                <span className="text-slate-400">
                  password: 9998003879
                </span>
              </div>
            </button>

            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              By continuing, you agree to the Zero2Code
              employee portal terms and policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

# 14. `src/pages/Dashboard.jsx`

```jsx
import { useEffect, useState } from "react";
import {
  Clock3,
  CheckCircle2,
  XCircle,
  FileClock,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import { getRequests } from "../services/storage";

export default function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(getRequests());
  }, []);

  const total = requests.length;

  const pending = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const approved = requests.filter(
    (item) => item.status === "Approved"
  ).length;

  const rejected = requests.filter(
    (item) => item.status === "Rejected"
  ).length;

  const recent = requests.slice(0, 5);

  const statusClass = {
    Pending:
      "bg-amber-50 text-amber-600 border-amber-200",
    Approved:
      "bg-emerald-50 text-emerald-600 border-emerald-200",
    Rejected:
      "bg-red-50 text-red-600 border-red-200",
  };

  return (
    <main className="min-h-screen bg-slate-50 lg:ml-72">
      <div className="p-4 md:p-6 lg:p-8">

        {/* PAGE HEADER */}
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-400">
              Overview
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Welcome back. Here's what's happening with your
              shift requests.
            </p>
          </div>

          <Link
            to="/shift-requests/add"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <Plus size={18} />
            Add Shift Request
          </Link>
        </div>

        {/* STAT CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Requests"
            value={total}
            description="All submitted requests"
            icon={<FileClock size={23} />}
          />

          <StatCard
            title="Pending"
            value={pending}
            description="Awaiting approval"
            icon={<Clock3 size={23} />}
          />

          <StatCard
            title="Approved"
            value={approved}
            description="Successfully approved"
            icon={<CheckCircle2 size={23} />}
          />

          <StatCard
            title="Rejected"
            value={rejected}
            description="Rejected requests"
            icon={<XCircle size={23} />}
          />
        </div>

        {/* TABLE CARD */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-slate-950">
                Recent Shift Change Requests
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Latest employee shift requests.
              </p>
            </div>

            <Link
              to="/shift-requests"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:underline"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px]">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Employee
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Current Shift
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Requested Shift
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Date
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {recent.length ? (
                  recent.map((request) => (
                    <tr
                      key={request.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <p className="text-sm font-bold text-slate-900">
                          {request.employee}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {request.employeeId}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-slate-600">
                        {request.currentShift}
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-slate-600">
                        {request.requestedShift}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {request.requestDate}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`
                            inline-flex rounded-full border
                            px-3 py-1 text-xs font-bold
                            ${statusClass[request.status]}
                          `}
                        >
                          {request.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-5 py-12 text-center text-sm text-slate-400"
                    >
                      No shift change requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
```

---

# 15. `src/pages/ShiftRequests.jsx`

This page handles:

- Add
- Show
- Edit
- Update
- Delete
- Search
- Status filtering

```jsx
import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  Filter,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import {
  addRequest,
  deleteRequest,
  getRequests,
  updateRequest,
} from "../services/storage";

const initialForm = {
  employee: "",
  employeeId: "",
  currentShift: "Morning",
  requestedShift: "Evening",
  requestDate: "",
  reason: "",
  status: "Pending",
};

export default function ShiftRequests() {
  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [viewingRequest, setViewingRequest] = useState(null);

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setRequests(getRequests());
  }, []);

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const text = `
        ${request.employee}
        ${request.employeeId}
        ${request.currentShift}
        ${request.requestedShift}
        ${request.reason}
      `.toLowerCase();

      const matchesSearch =
        text.includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        request.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [requests, search, statusFilter]);

  const openAdd = () => {
    setEditingId(null);
    setForm({
      ...initialForm,
      requestDate: new Date()
        .toISOString()
        .split("T")[0],
    });

    setModalOpen(true);
  };

  const openEdit = (request) => {
    setEditingId(request.id);

    setForm({
      employee: request.employee,
      employeeId: request.employeeId,
      currentShift: request.currentShift,
      requestedShift: request.requestedShift,
      requestDate: request.requestDate,
      reason: request.reason,
      status: request.status,
    });

    setModalOpen(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingId) {
      const updated = updateRequest(
        editingId,
        form
      );

      setRequests(updated);
    } else {
      const created = addRequest(form);

      setRequests((previous) => [
        created,
        ...previous,
      ]);
    }

    setModalOpen(false);
    setEditingId(null);
    setForm(initialForm);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this shift change request?"
    );

    if (!confirmed) return;

    const updated = deleteRequest(id);

    setRequests(updated);
  };

  const openView = (request) => {
    setViewingRequest(request);
    setViewOpen(true);
  };

  const statusClass = {
    Pending:
      "bg-amber-50 text-amber-600 border-amber-200",
    Approved:
      "bg-emerald-50 text-emerald-600 border-emerald-200",
    Rejected:
      "bg-red-50 text-red-600 border-red-200",
  };

  return (
    <main className="min-h-screen bg-slate-50 lg:ml-72">
      <div className="p-4 md:p-6 lg:p-8">

        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-400">
              Employee Management
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-950">
              Shift Change Requests
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage all shift change requests from one place.
            </p>
          </div>

          <button
            onClick={openAdd}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
          >
            <Plus size={18} />
            Add Request
          </button>
        </div>

        {/* FILTER BAR */}
        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search employee, ID, shift or reason..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white"
              />
            </div>

            <div className="relative">
              <Filter
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                className="h-12 w-full min-w-[190px] appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-8 text-sm font-semibold outline-none focus:border-slate-950"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-extrabold text-slate-950">
                  All Requests
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  {filteredRequests.length} request(s) found
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1150px]">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Employee
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Current
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Requested
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Date
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Reason
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Status
                  </th>

                  <th className="px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredRequests.length ? (
                  filteredRequests.map((request) => (
                    <tr
                      key={request.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-5 py-4">
                        <p className="text-sm font-bold text-slate-900">
                          {request.employee}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {request.employeeId}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-slate-600">
                        {request.currentShift}
                      </td>

                      <td className="px-5 py-4 text-sm font-semibold text-slate-600">
                        {request.requestedShift}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {request.requestDate}
                      </td>

                      <td className="max-w-[220px] truncate px-5 py-4 text-sm text-slate-500">
                        {request.reason}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`
                            inline-flex rounded-full border
                            px-3 py-1 text-xs font-bold
                            ${statusClass[request.status]}
                          `}
                        >
                          {request.status}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() =>
                              openView(request)
                            }
                            title="View"
                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                          >
                            <Eye size={17} />
                          </button>

                          <button
                            onClick={() =>
                              openEdit(request)
                            }
                            title="Edit"
                            className="rounded-lg p-2 text-blue-500 hover:bg-blue-50"
                          >
                            <Pencil size={17} />
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(request.id)
                            }
                            title="Delete"
                            className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-5 py-14 text-center"
                    >
                      <div className="mx-auto max-w-sm">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                          <Search size={24} />
                        </div>

                        <h3 className="mt-4 font-bold text-slate-900">
                          No requests found
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          Try another search or create a new
                          shift change request.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADD / EDIT MODAL */}
      <Modal
        open={modalOpen}
        title={
          editingId
            ? "Edit Shift Change Request"
            : "Add Shift Change Request"
        }
        onClose={() => setModalOpen(false)}
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Employee Name
              </label>

              <input
                name="employee"
                value={form.employee}
                onChange={handleChange}
                required
                placeholder="Enter employee name"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-slate-950 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Employee ID
              </label>

              <input
                name="employeeId"
                value={form.employeeId}
                onChange={handleChange}
                required
                placeholder="Example: Z2C004"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-slate-950 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Current Shift
              </label>

              <select
                name="currentShift"
                value={form.currentShift}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none focus:border-slate-950 focus:bg-white"
              >
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Requested Shift
              </label>

              <select
                name="requestedShift"
                value={form.requestedShift}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none focus:border-slate-950 focus:bg-white"
              >
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Request Date
              </label>

              <input
                type="date"
                name="requestDate"
                value={form.requestDate}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-slate-950 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none focus:border-slate-950 focus:bg-white"
              >
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Reason
            </label>

            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Enter reason for shift change..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-950 focus:bg-white"
            />
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
            >
              {editingId
                ? "Update Request"
                : "Save Request"}
            </button>
          </div>
        </form>
      </Modal>

      {/* VIEW MODAL */}
      <Modal
        open={viewOpen}
        title="Shift Request Details"
        onClose={() => setViewOpen(false)}
      >
        {viewingRequest && (
          <div className="space-y-5">

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-black text-slate-950">
                    {viewingRequest.employee}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {viewingRequest.employeeId}
                  </p>
                </div>

                <span
                  className={`
                    rounded-full border px-3 py-1 text-xs font-bold
                    ${statusClass[viewingRequest.status]}
                  `}
                >
                  {viewingRequest.status}
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoItem
                label="Current Shift"
                value={viewingRequest.currentShift}
              />

              <InfoItem
                label="Requested Shift"
                value={viewingRequest.requestedShift}
              />

              <InfoItem
                label="Request Date"
                value={viewingRequest.requestDate}
              />

              <InfoItem
                label="Request ID"
                value={`#${viewingRequest.id}`}
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Reason
              </p>

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
                {viewingRequest.reason}
              </div>
            </div>

            <button
              onClick={() => setViewOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-sm font-bold text-white hover:bg-slate-800"
            >
              Close
              <X size={17} />
            </button>
          </div>
        )}
      </Modal>
    </main>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}
```

---

# 16. `src/App.jsx`

```jsx
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
```

---

# 17. `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

# 18. `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <meta
      name="description"
      content="Zero2Code Employee Shift Management Portal"
    />

    <meta
      name="theme-color"
      content="#020617"
    />

    <title>
      Zero2Code | Employee Portal
    </title>
  </head>

  <body>
    <div id="root"></div>

    <script
      type="module"
      src="/src/main.jsx"
    ></script>
  </body>
</html>
```

---

# 19. `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

---

# 20. `package.json`

If you create the project using Vite, install the packages rather than manually replacing the generated package file.

Expected dependencies:

```json
{
  "dependencies": {
    "lucide-react": "^0.468.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^4.0.0",
    "vite": "^6.0.0"
  }
}
```

Use the versions generated by your current Vite setup if they are newer.

---

# 21. Login Flow

The login process is:

```text
Open Application
      |
      v
Login Page
      |
      v
Enter Mobile Number
      |
      v
Enter Password
      |
      v
Check localStorage Users
      |
      +---- Invalid ----> Show Error
      |
      +---- Valid ------> Save Session
                              |
                              v
                         Dashboard
```

---

# 22. LocalStorage Data

After opening the application, the following keys are created:

```text
zero2code_users
zero2code_auth
zero2code_shift_requests
zero2code_remember
```

---

# 23. User Authentication Object

After successful login:

```json
{
  "id": 1,
  "username": "9998003879",
  "name": "Zero2Code Employee",
  "role": "Employee",
  "loggedInAt": "2026-08-19T12:00:00.000Z"
}
```

---

# 24. CRUD Architecture

```text
                    Shift Request
                          |
             +------------+------------+
             |            |            |
            ADD          READ         EDIT
             |            |            |
             v            v            v
         addRequest   getRequests  updateRequest
             |            |            |
             +------------+------------+
                          |
                       DELETE
                          |
                          v
                   deleteRequest
```

---

# 25. Add Request

The Add Request form contains:

```text
Employee Name
Employee ID
Current Shift
Requested Shift
Request Date
Status
Reason
```

Example:

```text
Employee Name: Amit Shah
Employee ID: Z2C004
Current Shift: Morning
Requested Shift: Evening
Request Date: 2026-08-19
Status: Pending
Reason: Personal requirement
```

---

# 26. Edit Request

Click:

```text
Pencil Icon
```

The existing data is loaded into the same form.

After clicking:

```text
Update Request
```

the request is updated in localStorage.

---

# 27. View Request

Click:

```text
Eye Icon
```

A responsive modal displays:

```text
Employee
Employee ID
Current Shift
Requested Shift
Request Date
Request ID
Status
Reason
```

---

# 28. Delete Request

Click:

```text
Trash Icon
```

A confirmation dialog is displayed.

After confirmation:

```javascript
deleteRequest(id);
```

removes the record from localStorage.

---

# 29. Responsive Design

The UI is responsive for:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

## Desktop

```text
---------------------------------------------------------
| Sidebar | Header                                      |
|         |---------------------------------------------|
|         | Dashboard                                   |
|         | Cards                                       |
|         | Table                                       |
|         |                                             |
---------------------------------------------------------
```

## Mobile

```text
--------------------------------
| Menu | zero2code | Profile   |
--------------------------------
|                              |
| Dashboard                    |
|                              |
| Cards                        |
|                              |
| Responsive Table             |
|                              |
--------------------------------
```

The sidebar automatically becomes a slide-out mobile drawer.

---

# 30. UI Design System

## Main colors

```text
Primary:
Slate 950

Background:
Slate 50

Cards:
White

Border:
Slate 200

Muted:
Slate 400

Text:
Slate 900

Pending:
Amber

Approved:
Emerald

Rejected:
Red
```

---

# 31. UI Characteristics

The implementation includes:

- Large rounded cards
- Soft shadows
- Clean enterprise typography
- Sticky header
- Fixed sidebar
- Responsive mobile navigation
- Hover animations
- Button transitions
- Status badges
- Modal dialogs
- Responsive tables
- Search bar
- Filter dropdown
- Empty-state UI
- Form validation
- Login error messages
- Password visibility toggle

---

# 32. Run the Application

Install:

```bash
npm install
```

Start:

```bash
npm run dev
```

Then open the URL shown by Vite, normally:

```text
http://localhost:5173
```

---

# 33. Test Login

Use:

```text
Mobile Number:
9998003879

Password:
9998003879
```

Click:

```text
Sign In
```

You will be redirected to:

```text
/dashboard
```

---

# 34. Test CRUD

## Add

Go to:

```text
Shift Requests
```

Click:

```text
Add Request
```

Fill the form and click:

```text
Save Request
```

---

## Show

All saved requests appear in:

```text
Shift Change Requests
```

---

## Edit

Click:

```text
Pencil
```

Change information and click:

```text
Update Request
```

---

## View

Click:

```text
Eye
```

The request detail modal opens.

---

## Delete

Click:

```text
Trash
```

Confirm deletion.

---

# 35. Important LocalStorage Note

This implementation intentionally uses `localStorage` because the requested application specifies fixed credentials and local persistence.

This is suitable for:

```text
Demo
Training
Prototype
Frontend assignment
UI demonstration
```

It should **not** be used as production authentication because passwords stored in browser-accessible storage are not secure.

For production, replace this with:

```text
React Frontend
      |
      v
REST API
      |
      v
Backend Authentication
      |
      v
Database
```

Recommended production architecture:

```text
React
  |
  | Axios / Fetch
  v
Node.js / Laravel API
  |
  v
MySQL
```

---

# 36. Recommended Production Database

A production `shift_change_requests` table could contain:

```sql
CREATE TABLE shift_change_requests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    employee_id VARCHAR(50) NOT NULL,
    employee_name VARCHAR(150) NOT NULL,
    current_shift VARCHAR(50) NOT NULL,
    requested_shift VARCHAR(50) NOT NULL,
    request_date DATE NOT NULL,
    reason TEXT NOT NULL,
    status ENUM(
        'Pending',
        'Approved',
        'Rejected'
    ) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 37. Final Application Flow

```text
                    ZERO2CODE
                       |
                       v
                  Login Screen
                       |
                9998003879
                9998003879
                       |
                       v
                  Authentication
                       |
                       v
                   Dashboard
                       |
       +---------------+----------------+
       |               |                |
       v               v                v
    Overview      Shift Requests     Add Request
                       |
       +---------------+----------------+
       |               |                |
       v               v                v
      View            Edit            Delete
                       |
                       v
                     Update
                       |
                       v
                  localStorage
```

---

# 38. Production Enhancement Ideas

The current frontend can later be expanded with:

```text
JWT Authentication
Role-based Access
Admin Dashboard
Employee Dashboard
Manager Approval
Shift Master
Employee Master
Department Master
Attendance
Leave Management
Notifications
Email Notifications
WhatsApp Notifications
Export to Excel
Export to PDF
Pagination
Server-side Search
Server-side Filtering
Audit Logs
Dark Mode
Charts
Reports
```

---

# 39. Suggested Final Routes

```text
/login

/dashboard

/shift-requests

/shift-requests/add
```

---

# 40. Final Result

The completed Zero2Code frontend provides:

```text
✓ Eye-catching Login UI
✓ Zero2Code branding
✓ Fixed mobile authentication
✓ localStorage authentication
✓ Protected dashboard
✓ Responsive sidebar
✓ Responsive header
✓ Dashboard statistics
✓ Shift request listing
✓ Search
✓ Status filtering
✓ Add shift request
✓ View shift request
✓ Edit shift request
✓ Update shift request
✓ Delete shift request
✓ Modal forms
✓ Responsive table
✓ Mobile responsive design
✓ Tailwind CSS
✓ React.js
✓ React Router
✓ Lucide icons
✓ LocalStorage CRUD
```

This provides a complete frontend prototype that can be connected to a Laravel, Node.js/Express, PHP, or other backend API later.
