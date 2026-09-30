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