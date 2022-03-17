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

export const popularTracksSlice = createSlice({
  name: "popularTracks",
  initialState: [],
  reducers: {
    add: (state, action) => [
      ...state,
      ...action.payload.loved.filter(
        (popularTrack) =>
          !state.some(({ idTrack }) => popularTrack.idTrack === idTrack)
      ),
    ],
  },
});

export const popularAlbumsSlice = createSlice({
  name: "popularAlbums",
  initialState: [],
  reducers: {
    add: (state, action) => [
      ...state,
      ...action.payload.loved.filter(
        (popularAlbum) =>
          !state.some(({ idAlbum }) => popularAlbum.idAlbum === idAlbum)
      ),
    ],
  },
});
