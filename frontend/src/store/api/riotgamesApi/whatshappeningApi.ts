import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const whatshappeningApi = createApi({
  reducerPath: "whatshappeningApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotgames" }),
  endpoints: (builder) => ({
    getWhathappening: builder.query({
      query: () => "/whatshappening",
    }),
  }),
});

export const { useGetWhathappeningQuery } = whatshappeningApi;
