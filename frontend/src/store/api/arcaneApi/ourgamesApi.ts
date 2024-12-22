import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ourgamesApi = createApi({
  reducerPath: "ourgamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/arcane",
  }),
  endpoints: (builder) => ({
    getOurGames: builder.query({
      query: () => "/ourgames",
    }),
  }),
});

export const { useGetOurGamesQuery } = ourgamesApi;
