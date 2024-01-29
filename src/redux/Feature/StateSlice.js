import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const url = process.env.REACT_APP_API_URL +"/state";
export const AllState = createAsyncThunk(
  "State/all",
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

export const CreateState = createAsyncThunk(
  "State/create",
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

export const DeleteState = createAsyncThunk(
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

export const UpdateState = createAsyncThunk(
  "State/update",
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

export const StateDetail = createSlice({
  name: "State",
  initialState: {
    State: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchState: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [AllState.pending]: (state) => {
      state.loading = true;
    },
    [AllState.fulfilled]: (state, action) => {
      state.loading = false;
      state.State = action.payload;
    },
    [AllState.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CreateState.pending]: (state) => {
      state.loading = true;
    },
    [CreateState.fulfilled]: (state, action) => {
      state.loading = false;
      state.State.push(action.payload);
    },
    [CreateState.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DeleteState.pending]: (state) => {
      state.loading = true;
    },
    [DeleteState.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [DeleteState.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UpdateState.pending]: (state) => {
      state.loading = true;
    },
    [UpdateState.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [UpdateState.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default StateDetail.reducer;

export const { searchState } = StateDetail.actions;
