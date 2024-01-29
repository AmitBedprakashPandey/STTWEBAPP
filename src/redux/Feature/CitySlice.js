import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const AllCity = createAsyncThunk(
  "City/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${url}/city`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const CreateCity = createAsyncThunk(
  "City/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${url}/city`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token") || ""}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const DeleteCity = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${url}/city/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token") || ""}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UpdateCity = createAsyncThunk(
  "City/update",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${url}/city/${data._id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const CityDetail = createSlice({
  name: "city",
  initialState: {
    city: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchCity: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllCity.pending]: (state) => {
      state.loading = true;
    },
    [AllCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    [AllCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateCity.pending]: (state) => {
      state.loading = true;
    },
    [CreateCity.fulfilled]: (state, action) => {
      state.city.push(action.payload);
      state.loading = false;
    },
    [CreateCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteCity.pending]: (state) => {
      state.loading = true;
    },
    [DeleteCity.fulfilled]: (state, action) => {
      state.message = action.payload.message;
      state.loading = false;
    },
    [DeleteCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateCity.pending]: (state) => {
      state.loading = true;
    },
    [UpdateCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateCity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default CityDetail.reducer;

export const { searchCity } = CityDetail.actions;
