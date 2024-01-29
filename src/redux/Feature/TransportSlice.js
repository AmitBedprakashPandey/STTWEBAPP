import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const url = process.env.REACT_APP_API_URL +"/transport";
export const AllTransport = createAsyncThunk(
  "Transport/all",
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

export const CreateTransport = createAsyncThunk(
  "Transport/create",
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

export const DeleteTransport = createAsyncThunk(
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

export const UpdateTransport = createAsyncThunk(
  "Transport/update",
  async (data, { rejectWithValue }) => {
  try {
    const res = await axios.put(`${url}/${data._id}`, data, {
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

export const TransportDetail = createSlice({
  name: "Transport",
  initialState: {
    Transport: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchTransport: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllTransport.pending]: (state) => {
      state.loading = true;
    },
    [AllTransport.fulfilled]: (state, action) => {
      state.loading = false;
      state.Transport = action.payload;
    },
    [AllTransport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateTransport.pending]: (state) => {
      state.loading = true;
    },
    [CreateTransport.fulfilled]: (state, action) => {
      state.loading = false;
      state.Transport.push(action.payload);
    },
    [CreateTransport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteTransport.pending]: (state) => {
      state.loading = true;
    },
    [DeleteTransport.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteTransport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateTransport.pending]: (state) => {
      state.loading = true;
    },
    [UpdateTransport.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateTransport.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default TransportDetail.reducer;

export const { searchTransport } = TransportDetail.actions;
