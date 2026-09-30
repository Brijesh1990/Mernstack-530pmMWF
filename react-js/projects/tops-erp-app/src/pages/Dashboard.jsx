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