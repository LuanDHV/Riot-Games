import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const entertainmentsApi = createApi({
  reducerPath: "entertainmentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotgames" }),
  endpoints: (builder) => ({
    getEntertainments: builder.query({
      query: () => "/entertainments",
    }),
  }),
});

export const { useGetEntertainmentsQuery } = entertainmentsApi;