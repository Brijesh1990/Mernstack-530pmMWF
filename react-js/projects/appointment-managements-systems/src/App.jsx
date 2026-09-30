import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

const API_URL = "http://localhost:3000/appointments";

export default function App() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openModal, setOpenModal] = useState(false);

  const initialForm = {
    id: null,
    patientName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    status: "Pending",
    notes: "",
  };

  const [form, setForm] = useState(initialForm);

  // ===============================
  // GET APPOINTMENTS
  // ===============================

  const fetchAppointments = async () => {
    try {
      setLoading(true);

      const res = await axios.get(API_URL);

      setAppointments(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // ===============================
  // CREATE OR UPDATE
  // ===============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id) {
        await axios.put(
          `${API_URL}/${form.id}`,
          form
        );
      } else {
        await axios.post(API_URL, form);
      }

      fetchAppointments();

      setOpenModal(false);
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      alert("Failed to save");
    }
  };

  // ===============================
  // DELETE
  // ===============================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete appointment?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`);

      fetchAppointments();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  // ===============================
  // EDIT
  // ===============================

  const handleEdit = (appointment) => {
    setForm(appointment);
    setOpenModal(true);
  };

  // ===============================
  // FILTER
  // ===============================

  const filteredAppointments =
    appointments.filter((item) => {
      const matchesSearch =
        item.patientName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.doctor
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All"
          ? true
          : item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

  // ===============================
  // STATS
  // ===============================

  const stats = {
    total: appointments.length,
    pending: appointments.filter(
      (x) => x.status === "Pending"
    ).length,
    completed: appointments.filter(
      (x) => x.status === "Completed"
    ).length,
    cancelled: appointments.filter(
      (x) => x.status === "Cancelled"
    ).length,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      {/* HEADER */}

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <h1 className="text-4xl font-bold">
          Appointment Management
        </h1>

        <button
          onClick={() => {
            setForm(initialForm);
            setOpenModal(true);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          New Appointment
        </button>
      </div>

      {/* DASHBOARD */}

      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <StatCard
          title="Total"
          value={stats.total}
          icon={<Users />}
          color="bg-blue-600"
        />

        <StatCard
          title="Pending"
          value={stats.pending}
          icon={<Clock />}
          color="bg-yellow-500"
        />

        <StatCard
          title="Completed"
          value={stats.completed}
          icon={<CheckCircle />}
          color="bg-green-600"
        />

        <StatCard
          title="Cancelled"
          value={stats.cancelled}
          icon={<XCircle />}
          color="bg-red-600"
        />
      </div>

      {/* SEARCH */}

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="relative">
          <Search
            className="absolute left-3 top-3"
            size={18}
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search patient or doctor..."
            className="w-full bg-slate-800 rounded-xl p-3 pl-10"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="bg-slate-800 rounded-xl p-3"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* TABLE */}

      <div className="overflow-auto rounded-2xl border border-slate-800">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-4 text-left">
                Patient
              </th>
              <th className="p-4 text-left">
                Doctor
              </th>
              <th className="p-4 text-left">
                Date
              </th>
              <th className="p-4 text-left">
                Status
              </th>
              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="5"
                  className="p-10 text-center"
                >
                  Loading...
                </td>
              </tr>
            ) : filteredAppointments.length ===
              0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="p-10 text-center"
                >
                  No appointments found
                </td>
              </tr>
            ) : (
              filteredAppointments.map(
                (appointment) => (
                  <tr
                    key={appointment.id}
                    className="border-t border-slate-800"
                  >
                    <td className="p-4">
                      {appointment.patientName}
                    </td>

                    <td className="p-4">
                      {appointment.doctor}
                    </td>

                    <td className="p-4">
                      {appointment.date}
                    </td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-slate-700">
                        {appointment.status}
                      </span>
                    </td>

                    <td className="p-4 flex gap-2">
                      <button
                        onClick={() =>
                          handleEdit(
                            appointment
                          )
                        }
                        className="bg-blue-600 p-2 rounded"
                      >
                        <Edit size={16} />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            appointment.id
                          )
                        }
                        className="bg-red-600 p-2 rounded"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}

      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              className="bg-slate-900 w-full max-w-xl rounded-3xl p-6"
            >
              <h2 className="text-2xl mb-6">
                {form.id
                  ? "Edit Appointment"
                  : "Create Appointment"}
              </h2>

              <div className="grid gap-3">
                <input
                  required
                  placeholder="Patient Name"
                  value={form.patientName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      patientName:
                        e.target.value,
                    })
                  }
                  className="bg-slate-800 p-3 rounded-xl"
                />

                <input
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email:
                        e.target.value,
                    })
                  }
                  className="bg-slate-800 p-3 rounded-xl"
                />

                <input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone:
                        e.target.value,
                    })
                  }
                  className="bg-slate-800 p-3 rounded-xl"
                />

                <input
                  required
                  placeholder="Doctor"
                  value={form.doctor}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      doctor:
                        e.target.value,
                    })
                  }
                  className="bg-slate-800 p-3 rounded-xl"
                />

                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      date:
                        e.target.value,
                    })
                  }
                  className="bg-slate-800 p-3 rounded-xl"
                />

                <input
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      time:
                        e.target.value,
                    })
                  }
                  className="bg-slate-800 p-3 rounded-xl"
                />

                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status:
                        e.target.value,
                    })
                  }
                  className="bg-slate-800 p-3 rounded-xl"
                >
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Notes"
                  value={form.notes}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      notes:
                        e.target.value,
                    })
                  }
                  className="bg-slate-800 p-3 rounded-xl"
                />

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 py-3 rounded-xl"
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenModal(false)
                    }
                    className="flex-1 bg-slate-700 py-3 rounded-xl"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className={`${color} rounded-2xl p-5`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p>{title}</p>
          <h2 className="text-3xl font-bold">
            {value}
          </h2>
        </div>

        {icon}
      </div>
    </motion.div>
  );
}