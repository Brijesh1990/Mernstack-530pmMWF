
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    // Store users data
    const [users, setUsers] = useState([]);

    // Loading state
    const [loading, setLoading] = useState(true);

    // Error state
    const [error, setError] = useState("");

    // GraphQL API URL
    const API_URL = "http://localhost:3000/graphql";

    // Fetch GraphQL data
    useEffect(() => {

        const fetchUsers = async () => {

            try {

                const query = `
                    query {
                        users {
                            id
                            name
                            email
                            age
                        }
                    }
                `;

                const response = await fetch(API_URL, {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        query: query
                    })
                });

                if (!response.ok) {
                    throw new Error("Network response was not OK");
                }

                const result = await response.json();

                console.log("GraphQL Response:", result);

                // Check GraphQL errors
                if (result.errors) {
                    throw new Error(result.errors[0].message);
                }

                // Store users in state
                setUsers(result.data.users);

            } catch (error) {

                console.error("Error fetching users:", error);

                setError(error.message);

            } finally {

                setLoading(false);

            }
        };

        fetchUsers();

    }, []);

    return (
        <div className="container py-5">

            {/* Page Heading */}
            <div className="text-center mb-5">

                <h1 className="fw-bold text-primary">
                    GraphQL Users
                </h1>

                <p className="text-muted">
                    Users fetched from GraphQL API
                </p>

            </div>


            {/* Loading */}
            {loading && (
                <div className="text-center">

                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>

                    <p className="mt-3">
                        Loading users...
                    </p>

                </div>
            )}


            {/* Error */}
            {error && (
                <div className="alert alert-danger">

                    <strong>Error:</strong> {error}

                </div>
            )}


            {/* Users */}
            {!loading && !error && (

                <>

                    {/* Total Users */}
                    <div className="alert alert-primary">

                        <strong>Total Users:</strong>{" "}
                        {users.length}

                    </div>


                    {/* Desktop Table */}
                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white">

                            <h4 className="mb-0">
                                All Users
                            </h4>

                        </div>


                        <div className="card-body p-0">

                            <div className="table-responsive">

                                <table className="table table-hover table-striped mb-0">

                                    <thead className="table-dark">

                                        <tr>

                                            <th>#</th>

                                            <th>ID</th>

                                            <th>Name</th>

                                            <th>Email</th>

                                            <th>Age</th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {users.map((user, index) => (

                                            <tr key={user.id}>

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td>
                                                    <span className="badge bg-secondary">
                                                        {user.id}
                                                    </span>
                                                </td>

                                                <td>
                                                    <strong>
                                                        {user.name}
                                                    </strong>
                                                </td>

                                                <td>
                                                    {user.email}
                                                </td>

                                                <td>
                                                    <span className="badge bg-info text-dark">
                                                        {user.age}
                                                    </span>
                                                </td>

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>


                    {/* Bootstrap Cards */}
                    <div className="row g-4 mt-4">

                        {users.map((user) => (

                            <div
                                className="col-12 col-sm-6 col-lg-4"
                                key={user.id}
                            >

                                <div className="card h-100 shadow-sm border-0">

                                    <div className="card-body">

                                        {/* Avatar */}
                                        <div
                                            className="
                                                bg-primary
                                                text-white
                                                rounded-circle
                                                d-flex
                                                align-items-center
                                                justify-content-center
                                                mx-auto
                                                mb-3
                                            "
                                            style={{
                                                width: "70px",
                                                height: "70px",
                                                fontSize: "28px"
                                            }}
                                        >
                                            {user.name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>


                                        {/* Name */}
                                        <h4 className="text-center">

                                            {user.name}

                                        </h4>


                                        {/* User ID */}
                                        <p className="text-center">

                                            <span className="badge bg-secondary">

                                                ID: {user.id}

                                            </span>

                                        </p>


                                        <hr />


                                        {/* Email */}
                                        <p>

                                            <strong>
                                                Email:
                                            </strong>

                                            <br />

                                            <span className="text-muted">
                                                {user.email}
                                            </span>

                                        </p>


                                        {/* Age */}
                                        <p>

                                            <strong>
                                                Age:
                                            </strong>{" "}

                                            <span className="badge bg-info text-dark">

                                                {user.age}

                                            </span>

                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </>

            )}

        </div>
    );
}

export default App;

