import {
  useEffect,
  useState
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser
} from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();

  const {
    users,
    loading,
    error
  } = useSelector(
    (state) => state.users
  );

  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    city: ""
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.city) {
      alert("Please fill all fields");
      return;
    }

    if (form.id) {
      dispatch(updateUser(form));
    } else {
      dispatch(
        addUser({
          name: form.name,
          email: form.email,
          city: form.city
        })
      );
    }

    setForm({
      id: null,
      name: "",
      email: "",
      city: ""
    });
  };

  const handleEdit = (user) => {
    setForm(user);
  };

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete?"
      )
    ) {
      dispatch(deleteUser(id));
    }
  };

  return (
 <div className="container-fluid px-3 px-md-4">
  <div
    className="mx-auto my-4"
    style={{
      width: "900px",
      maxWidth: "95%"
    }}
  >
    <h1>Redux Saga CRUD</h1>

    <form onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-12 col-md-4">
          <input
            className="form-control"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-md-4">
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-md-4">
          <input
            className="form-control"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            {form.id ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>

    <hr />

    {loading && <p>Loading...</p>}

    {error && (
      <p style={{ color: "red" }}>
        {error}
      </p>
    )}

    <div className="table-responsive">
      <table className="table table-bordered table-striped align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>

              <td>
                <div className="d-flex flex-wrap gap-2">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() =>
                      handleEdit(user)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      handleDelete(user.id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}

export default App;