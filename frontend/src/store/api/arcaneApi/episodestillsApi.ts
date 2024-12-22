import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const episodestillsApi = createApi({
  reducerPath: "episodestillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/arcane",
  }),
  endpoints: (builder) => ({
    getEpisodeStills: builder.query({
      query: () => "/episodestills",
    }),
  }),
});

export const { useGetEpisodeStillsQuery } = episodestillsApi;
