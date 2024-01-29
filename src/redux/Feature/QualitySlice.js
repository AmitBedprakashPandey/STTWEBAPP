import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_API_URL + "/quality";
export const AllQuality = createAsyncThunk(
  "Quality/all",
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
      return rejectWithValue(error);
    }
  }
);

export const CreateQuality = createAsyncThunk(
  "Quality/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(url, data, {
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

export const DeleteQuality = createAsyncThunk(
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
      return rejectWithValue(error);
    }
  }
);

export const UpdateQuality = createAsyncThunk(
  "Quality/update",
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
      return rejectWithValue(error);
    }
  }
);

export const QualityDetail = createSlice({
  name: "Quality",
  initialState: {
    Quality: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchQuality: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllQuality.pending]: (state) => {
      state.loading = true;
    },
    [AllQuality.fulfilled]: (state, action) => {
      state.loading = false;
      state.Quality = action.payload;
    },
    [AllQuality.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateQuality.pending]: (state) => {
      state.loading = true;
    },
    [CreateQuality.fulfilled]: (state, action) => {
      state.loading = false;
      state.Quality.push(action.payload);
    },
    [CreateQuality.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteQuality.pending]: (state) => {
      state.loading = true;
    },
    [DeleteQuality.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteQuality.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateQuality.pending]: (state) => {
      state.loading = true;
    },
    [UpdateQuality.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateQuality.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default QualityDetail.reducer;

export const { searchQuality } = QualityDetail.actions;
