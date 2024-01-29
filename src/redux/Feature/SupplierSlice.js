import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const url = process.env.REACT_APP_API_URL +"/supplier";
export const AllSupplier = createAsyncThunk(
  "Supplier/all",
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

export const CreateSupplier = createAsyncThunk(
  "Supplier/create",
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

export const DeleteSupplier = createAsyncThunk(
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

export const UpdateSupplier = createAsyncThunk(
  "Supplier/update",
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

export const SupplierDetail = createSlice({
  name: "Supplier",
  initialState: {
    Supplier: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchSupplier: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllSupplier.pending]: (state) => {
      state.loading = true;
    },
    [AllSupplier.fulfilled]: (state, action) => {
      state.loading = false;
      state.Supplier = action.payload;
    },
    [AllSupplier.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateSupplier.pending]: (state) => {
      state.loading = true;
    },
    [CreateSupplier.fulfilled]: (state, action) => {
      state.loading = false;
      state.Supplier.push(action.payload);
    },
    [CreateSupplier.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteSupplier.pending]: (state) => {
      state.loading = true;
    },
    [DeleteSupplier.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteSupplier.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateSupplier.pending]: (state) => {
      state.loading = true;
    },
    [UpdateSupplier.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateSupplier.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default SupplierDetail.reducer;

export const { searchSupplier } = SupplierDetail.actions;
