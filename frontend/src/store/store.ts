import { configureStore } from "@reduxjs/toolkit";
import * as RiotGamesApi from "./api/riotgamesApi";
import * as LeagueOfLegendsApi from "./api/leagueoflegendsApi";
import * as ValorantApi from "./api/valorantApi";
import * as TeamFightTacticsApi from "./api/teamfighttacticsApi";
import * as WildRiftApi from "./api/wildriftApi";
import * as ArcaneApi from "./api/arcaneApi";

export const store = configureStore({
  reducer: {
    // Riot Games API
    [RiotGamesApi.whatshappeningApi.reducerPath]:
      RiotGamesApi.whatshappeningApi.reducer,
    [RiotGamesApi.gamesApi.reducerPath]: RiotGamesApi.gamesApi.reducer,
    [RiotGamesApi.esportsApi.reducerPath]: RiotGamesApi.esportsApi.reducer,
    [RiotGamesApi.entertainmentsApi.reducerPath]:
      RiotGamesApi.entertainmentsApi.reducer,
    [RiotGamesApi.forgeApi.reducerPath]: RiotGamesApi.forgeApi.reducer,

    // League of Legends API
    [LeagueOfLegendsApi.featurednewsApi.reducerPath]:
      LeagueOfLegendsApi.featurednewsApi.reducer,
    [LeagueOfLegendsApi.chooseyourchampionApi.reducerPath]:
      LeagueOfLegendsApi.chooseyourchampionApi.reducer,
    [LeagueOfLegendsApi.multiplewaystoplayApi.reducerPath]:
      LeagueOfLegendsApi.multiplewaystoplayApi.reducer,

    //Valorant API
    [ValorantApi.theLatestApi.reducerPath]: ValorantApi.theLatestApi.reducer,

    //Team Fight Tactics API
    [TeamFightTacticsApi.latestNewsApi.reducerPath]:
      TeamFightTacticsApi.latestNewsApi.reducer,

    //Wild Rift API
    [WildRiftApi.newsApi.reducerPath]: WildRiftApi.newsApi.reducer,

    //Arcane API
    [ArcaneApi.sliderbannerApi.reducerPath]: ArcaneApi.sliderbannerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      // Riot Games API middleware
      .concat(RiotGamesApi.whatshappeningApi.middleware)
      .concat(RiotGamesApi.gamesApi.middleware)
      .concat(RiotGamesApi.esportsApi.middleware)
      .concat(RiotGamesApi.entertainmentsApi.middleware)
      .concat(RiotGamesApi.forgeApi.middleware)

      // Riot Games API middleware
      .concat(LeagueOfLegendsApi.featurednewsApi.middleware)
      .concat(LeagueOfLegendsApi.chooseyourchampionApi.middleware)
      .concat(LeagueOfLegendsApi.multiplewaystoplayApi.middleware)

      //Valorant API middleware
      .concat(ValorantApi.theLatestApi.middleware)

      //Team Fight Tactics middleware
      .concat(TeamFightTacticsApi.latestNewsApi.middleware)

      //Wild Rift middleware
      .concat(WildRiftApi.newsApi.middleware)

      //Arcane middleware
      .concat(ArcaneApi.sliderbannerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
