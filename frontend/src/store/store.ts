import { configureStore } from "@reduxjs/toolkit";
import * as riotGamesApi from "./api/riotgamesApi";

export const store = configureStore({
  reducer: {
    [riotGamesApi.whatshappeningApi.reducerPath]:
      riotGamesApi.whatshappeningApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(riotGamesApi.whatshappeningApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
