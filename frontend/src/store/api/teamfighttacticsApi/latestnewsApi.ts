import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const latestNewsApi = createApi({
  reducerPath: "latestNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/teamfighttactics",
  }),
  endpoints: (builder) => ({
    getLatestNews: builder.query({
      query: () => "/latestNews",
    }),
  }),
});

export const { useGetLatestNewsQuery } = latestNewsApi;
