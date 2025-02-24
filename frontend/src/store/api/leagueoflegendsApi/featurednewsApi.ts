import { IFeaturedNews } from "@/app/(child)/leagueoflegends/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featurednewsApi = createApi({
  reducerPath: "featurednewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/leagueoflegends",
  }),
  endpoints: (builder) => ({
    getFeaturedNews: builder.query<IFeaturedNews[], void>({
      query: () => "/featurednews",
    }),
  }),
});

export const { useGetFeaturedNewsQuery } = featurednewsApi;
