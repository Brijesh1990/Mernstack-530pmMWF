import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addUser: (state) => {
      state.loading = true;
      state.error = null;
    },

    addUserSuccess: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },

    addUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateUser: (state) => {
      state.loading = true;
      state.error = null;
    },

    updateUserSuccess: (state, action) => {
      state.loading = false;

      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },

    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteUser: (state) => {
      state.loading = true;
      state.error = null;
    },

    deleteUserSuccess: (state, action) => {
      state.loading = false;

      state.users = state.users.filter(
        (user) => user.id !== action.payload
      );
    },

    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,

  addUser,
  addUserSuccess,
  addUserFailure,

  updateUser,
  updateUserSuccess,
  updateUserFailure,

  deleteUser,
  deleteUserSuccess,
  deleteUserFailure
} = userSlice.actions;

export default userSlice.reducer;