import { configureStore } from "@reduxjs/toolkit";
import * as riotGamesApi from "./api/riotgamesApi";

export const store = configureStore({
  reducer: {
    [riotGamesApi.whatshappeningApi.reducerPath]:
      riotGamesApi.whatshappeningApi.reducer,
    [riotGamesApi.gamesApi.reducerPath]: riotGamesApi.gamesApi.reducer,
    [riotGamesApi.esportsApi.reducerPath]: riotGamesApi.esportsApi.reducer,
    [riotGamesApi.entertainmentsApi.reducerPath]:
      riotGamesApi.entertainmentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(riotGamesApi.whatshappeningApi.middleware)
      .concat(riotGamesApi.gamesApi.middleware)
      .concat(riotGamesApi.esportsApi.middleware)
      .concat(riotGamesApi.entertainmentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
