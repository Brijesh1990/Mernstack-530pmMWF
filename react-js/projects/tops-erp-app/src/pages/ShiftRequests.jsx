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