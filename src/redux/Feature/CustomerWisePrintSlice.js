import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const url = process.env.REACT_APP_API_URL +"/customer";
export const AllCustomer = createAsyncThunk(
  "Customer/all",
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

export const CreateCustomer = createAsyncThunk(
  "Customer/create",
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

export const DeleteCustomer = createAsyncThunk(
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

export const UpdateCustomer = createAsyncThunk(
  "Customer/update",
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

export const CustomerDetail = createSlice({
  name: "Customer",
  initialState: {
    Customer: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchCustomer: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllCustomer.pending]: (state) => {
      state.loading = true;
    },
    [AllCustomer.fulfilled]: (state, action) => {
      state.loading = false;
      state.Customer = action.payload;
    },
    [AllCustomer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateCustomer.pending]: (state) => {
      state.loading = true;
    },
    [CreateCustomer.fulfilled]: (state, action) => {
      state.loading = false;
      state.Customer.push(action.payload);
    },
    [CreateCustomer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteCustomer.pending]: (state) => {
      state.loading = true;
    },
    [DeleteCustomer.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteCustomer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateCustomer.pending]: (state) => {
      state.loading = true;
    },
    [UpdateCustomer.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateCustomer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default CustomerDetail.reducer;

export const { searchCustomer } = CustomerDetail.actions;
