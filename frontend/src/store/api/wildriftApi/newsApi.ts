import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/wildrift",
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/news",
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
