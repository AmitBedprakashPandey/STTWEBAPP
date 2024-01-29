import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const url = process.env.REACT_APP_API_URL +"/catagory";

export const AllCatagory = createAsyncThunk(
  "Catagory/all",
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

export const CreateCatagory = createAsyncThunk(
  "Catagory/create",
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
export const DeleteCatagory = createAsyncThunk(
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
export const UpdateCatagory = createAsyncThunk(
  "Catagory/update",
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

export const CatagoryDetail = createSlice({
  name: "Catagory",
  initialState: {
    Catagory: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchCatagory: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllCatagory.pending]: (state) => {
      state.loading = true;
    },
    [AllCatagory.fulfilled]: (state, action) => {
      state.loading = false;
      state.Catagory = action.payload;
    },
    [AllCatagory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateCatagory.pending]: (state) => {
      state.loading = true;
    },
    [CreateCatagory.fulfilled]: (state, action) => {
      state.loading = false;
      state.Catagory.push(action.payload);
    },
    [CreateCatagory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteCatagory.pending]: (state) => {
      state.loading = true;
    },
    [DeleteCatagory.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteCatagory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateCatagory.pending]: (state) => {
      state.loading = true;
    },
    [UpdateCatagory.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateCatagory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default CatagoryDetail.reducer;

export const { searchCatagory } = CatagoryDetail.actions;
