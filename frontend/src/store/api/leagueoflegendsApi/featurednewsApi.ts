import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featurednewsApi = createApi({
  reducerPath: "featurednewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/leagueoflegends",
  }),
  endpoints: (builder) => ({
    getFeaturedNews: builder.query({
      query: () => "/featurednews",
    }),
  }),
});

export const { useGetFeaturedNewsQuery } = featurednewsApi;
