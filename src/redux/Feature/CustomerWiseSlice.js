import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const url = process.env.REACT_APP_API_URL +"/customerentry";

export const AllCustomerWise = createAsyncThunk(
  "CustomerWise/all",
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

export const CreateCustomerWise = createAsyncThunk(
  "CustomerWise/create",
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

export const DeleteCustomerWise = createAsyncThunk(
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

export const UpdateCustomerWise = createAsyncThunk(
  "CustomerWise/update",
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

export const CustomerWiseDetail = createSlice({
  name: "CustomerWise",
  initialState: {
    CustomerWise: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchCustomerWise: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllCustomerWise.pending]: (state) => {
      state.loading = true;
    },
    [AllCustomerWise.fulfilled]: (state, action) => {
      state.loading = false;
      state.CustomerWise = action.payload;
    },
    [AllCustomerWise.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateCustomerWise.pending]: (state) => {
      state.loading = true;
    },
    [CreateCustomerWise.fulfilled]: (state, action) => {
      state.loading = false;
      state.CustomerWise.push(action.payload);
    },
    [CreateCustomerWise.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteCustomerWise.pending]: (state) => {
      state.loading = true;
    },
    [DeleteCustomerWise.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteCustomerWise.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateCustomerWise.pending]: (state) => {
      state.loading = true;
    },
    [UpdateCustomerWise.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateCustomerWise.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default CustomerWiseDetail.reducer;

export const { searchCustomerWise } = CustomerWiseDetail.actions;
