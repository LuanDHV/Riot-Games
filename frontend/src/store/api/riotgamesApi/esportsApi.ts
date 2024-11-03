import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const esportsApi = createApi({
  reducerPath: "esportsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotgames" }),
  endpoints: (builder) => ({
    getEsports: builder.query({
      query: () => "/esports",
    }),
  }),
});

export const { useGetEsportsQuery } = esportsApi;
