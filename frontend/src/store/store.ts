import { configureStore } from "@reduxjs/toolkit";
import * as riotGamesApi from "./api/riotgamesApi";
import * as leagueoflegendsApi from "./api/leagueoflegendsApi";

export const store = configureStore({
  reducer: {
    // Riot Games API
    [riotGamesApi.whatshappeningApi.reducerPath]:
      riotGamesApi.whatshappeningApi.reducer,
    [riotGamesApi.gamesApi.reducerPath]: riotGamesApi.gamesApi.reducer,
    [riotGamesApi.esportsApi.reducerPath]: riotGamesApi.esportsApi.reducer,
    [riotGamesApi.entertainmentsApi.reducerPath]:
      riotGamesApi.entertainmentsApi.reducer,

    // League of Legends API
    [leagueoflegendsApi.featurednewsApi.reducerPath]:
      leagueoflegendsApi.featurednewsApi.reducer,
    [leagueoflegendsApi.chooseyourchampionApi.reducerPath]:
      leagueoflegendsApi.chooseyourchampionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // Riot Games API middleware
      .concat(riotGamesApi.whatshappeningApi.middleware)
      .concat(riotGamesApi.gamesApi.middleware)
      .concat(riotGamesApi.esportsApi.middleware)
      .concat(riotGamesApi.entertainmentsApi.middleware)

      // Riot Games API middleware
      .concat(leagueoflegendsApi.featurednewsApi.middleware)
      .concat(leagueoflegendsApi.chooseyourchampionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
