import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chooseyourchampionApi = createApi({
  reducerPath: "chooseyourchampionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/leagueoflegends",
  }),
  endpoints: (builder) => ({
    getChooseYourChampion: builder.query({
      query: () => "/chooseyourchampion",
    }),
  }),
});

export const { useGetChooseYourChampionQuery } = chooseyourchampionApi;
