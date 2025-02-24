import { ITheLatest } from "@/app/(child)/valorant/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const theLatestApi = createApi({
  reducerPath: "theLatestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/valorant" }),
  endpoints: (builder) => ({
    getTheLatest: builder.query<ITheLatest[], void>({
      query: () => "/thelatest",
    }),
  }),
});

export const { useGetTheLatestQuery } = theLatestApi;
