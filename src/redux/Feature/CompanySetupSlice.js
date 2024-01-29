import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
const url = process.env.REACT_APP_API_URL +"/companysetup";

export const AllCompanySetup = createAsyncThunk(
  "CompanySetup/all",
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

export const CreateCompanySetup = createAsyncThunk(
  "CompanySetup/create",
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

export const DeleteCompanySetup = createAsyncThunk(
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

export const UpdateCompanySetup = createAsyncThunk(
  "CompanySetup/update",
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

export const CompanySetupDetail = createSlice({
  name: "CompanySetup",
  initialState: {
    CompanySetup: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchCompanySetup: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllCompanySetup.pending]: (state) => {
      state.loading = true;
    },
    [AllCompanySetup.fulfilled]: (state, action) => {
      state.loading = false;
      state.CompanySetup = action.payload;
    },
    [AllCompanySetup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateCompanySetup.pending]: (state) => {
      state.loading = true;
    },
    [CreateCompanySetup.fulfilled]: (state, action) => {
      state.loading = false;
      state.CompanySetup.push(action.payload);
    },
    [CreateCompanySetup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteCompanySetup.pending]: (state) => {
      state.loading = true;
    },
    [DeleteCompanySetup.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteCompanySetup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateCompanySetup.pending]: (state) => {
      state.loading = true;
    },
    [UpdateCompanySetup.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateCompanySetup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default CompanySetupDetail.reducer;

export const { searchCompanySetup } = CompanySetupDetail.actions;
