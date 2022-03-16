import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    add: (state, action) =>
      state.includes(action.payload.idTrack)
        ? state
        : [...state, action.payload.idTrack],
    remove: (state, action) =>
      state.filter((idTrack) => idTrack !== action.payload.idTrack),
    toggle: (state, action) =>
      state.includes(action.payload.idTrack)
        ? state.filter((idTrack) => idTrack !== action.payload.idTrack)
        : [...state, action.payload.idTrack],
  },
});
