import { IGames } from "@/app/riotgames/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotgames" }),
  endpoints: (builder) => ({
    getGames: builder.query<IGames[], void>({
      query: () => "/games",
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
