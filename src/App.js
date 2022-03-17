import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Favorites from "./pages/Favorites";
import Profil from "./pages/Profil";
import { QueryClient, QueryClientProvider } from "react-query";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  favoritesSlice,
  popularAlbumsSlice,
  popularTracksSlice,
} from "./Slices";

const queryClient = new QueryClient();
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorites: favoritesSlice.reducer,
    popularTracks: popularTracksSlice.reducer,
    popularAlbums: popularAlbumsSlice.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

function App() {
  return (
    <div className="root">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover/:id" element={<Discover />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profil" element={<Profil />} />
              </Routes>
            </Router>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
