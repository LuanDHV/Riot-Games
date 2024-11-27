import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const multiplewaystoplayApi = createApi({
  reducerPath: "multiplewaystoplayApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/leagueoflegends",
  }),
  endpoints: (builder) => ({
    getMultipleWaysToPlay: builder.query({
      query: () => "/multiplewaystoplay",
    }),
  }),
});

export const { useGetMultipleWaysToPlayQuery } = multiplewaystoplayApi;
