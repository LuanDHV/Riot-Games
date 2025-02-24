import { ILatestNews } from "@/app/(child)/teamfighttactics/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const latestNewsApi = createApi({
  reducerPath: "latestNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/teamfighttactics",
  }),
  endpoints: (builder) => ({
    getLatestNews: builder.query<ILatestNews[], void>({
      query: () => "/latestNews",
    }),
  }),
});

export const { useGetLatestNewsQuery } = latestNewsApi;
