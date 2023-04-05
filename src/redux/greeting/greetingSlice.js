import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_GREETING = 'FETCH_GREETING';

export const getGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const response = await fetch('http://localhost:3000/');
  const data = await response.json();
  return data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    name: '',
    isLoading: false,
    successful: false,
    error: '',
  },

  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(getGreeting.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      successful: true,
      name: action.payload,
    }));

    builder.addCase(getGreeting.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));
  },
});

export default greetingSlice.reducer;
