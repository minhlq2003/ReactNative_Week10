import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  filter: 'All',
};

const bikeSlice = createSlice({
  name: 'bike',
  initialState,
  reducers: {
    setBikes: (state, action) => {
      state.data = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setBikes, setFilter } = bikeSlice.actions;
export default bikeSlice.reducer;
