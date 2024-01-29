import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const url = process.env.REACT_APP_API_URL +"/process";
export const AllProcess = createAsyncThunk(
  "Process/all",
  async (_, { rejectWithValue }) => {
   try {
     const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token") || ""}`,
      },
    });
  return res.data;
   } catch (error) {
    return rejectWithValue(error)
   }
  }
);

export const CreateProcess = createAsyncThunk(
  "Process/create",
  async (data, { rejectWithValue }) => {
    try {
      const res =await axios.post(url,data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token") || ""}`,
        },
      });
      return res.data;  

    } catch (error) {
      return rejectWithValue(error)
    }
  }
);

export const DeleteProcess = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
     await axios.delete(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token") || ""}`,
      },
    });      
      return id;
    } catch (error) {
      return rejectWithValue(error)
    }

  }
);

export const UpdateProcess = createAsyncThunk(
  "Process/update",
  async (data, { rejectWithValue }) => {
  try {
    const res = await axios.put(`${url}/${data._id}`, data , {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token") || ""}`,
      },
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error)
  }
  }
);

export const ProcessDetail = createSlice({
  name: "Process",
  initialState: {
    Process: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchProcess: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllProcess.pending]: (state) => {
      state.loading = true;
    },
    [AllProcess.fulfilled]: (state, action) => {
      state.loading = false;
      state.Process = action.payload;
    },
    [AllProcess.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateProcess.pending]: (state) => {
      state.loading = true;
    },
    [CreateProcess.fulfilled]: (state, action) => {
      state.loading = false;
      state.Process.push(action.payload);
    },
    [CreateProcess.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteProcess.pending]: (state) => {
      state.loading = true;
    },
    [DeleteProcess.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteProcess.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateProcess.pending]: (state) => {
      state.loading = true;
    },
    [UpdateProcess.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateProcess.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default ProcessDetail.reducer;

export const { searchProcess } = ProcessDetail.actions;
