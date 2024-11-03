import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotgames" }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => "/games",
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
