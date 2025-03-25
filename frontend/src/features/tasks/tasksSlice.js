import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
};

// Async actions using createAsyncThunk
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('http://localhost:5000/api/tasks');
  return response.data;
});

export const createTask = createAsyncThunk('tasks/createTask', async (task) => {
  const response = await axios.post('http://localhost:5000/api/tasks', task);
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (task) => {
  const response = await axios.put(`http://localhost:5000/api/tasks/${task.id}`, task);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
  return taskId;
});

// Task slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task._id === action.payload._id);
        state.tasks[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task._id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
