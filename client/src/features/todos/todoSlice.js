import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "https://gold-barnacle-wig.cyclic.app";

const initialState = {
  todos: [],
  loading: false,
  success: false,
  error: false,
  message: "",
};

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${backendURL}/api/todos`, config);
      return response.data;
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postTodo = createAsyncThunk(
  "todo/postTodo",
  async (todo, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${backendURL}/api/todos`,
        todo,
        config
      );
      return response.data;
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(
        `${backendURL}/api/todos/${id}`,
        config
      );
      return response.data;
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reset: (state) => {
      state.todos = [];
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.todos.push(action.payload);
      })
      .addCase(postTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.todos = [];
      })
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.todos = [];
      })
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload.id
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
