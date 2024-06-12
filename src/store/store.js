import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cardsSliceReducer } from "./cards/cards-slice-cards";
import { filterSliceReducer } from "./cards/cards-slice-filter";

const persistConfig = {
  key: "app-storage",
  storage,
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const combinedReducers = combineReducers({
  cards: cardsSliceReducer,
  filters: filterSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistore = persistStore(store);
