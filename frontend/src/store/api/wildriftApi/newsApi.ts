import { INews } from "@/app/(child)/wildrift/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/wildrift",
  }),
  endpoints: (builder) => ({
    getNews: builder.query<INews[], void>({
      query: () => "/news",
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
