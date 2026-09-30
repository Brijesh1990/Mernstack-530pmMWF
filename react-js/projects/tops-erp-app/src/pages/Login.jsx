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