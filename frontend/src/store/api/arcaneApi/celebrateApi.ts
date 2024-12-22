import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const celebrateApi = createApi({
  reducerPath: "celebrateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/arcane",
  }),
  endpoints: (builder) => ({
    getCelebrate: builder.query({
      query: () => "/celebrate",
    }),
  }),
});

export const { useGetCelebrateQuery } = celebrateApi;
