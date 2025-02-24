import { ISilderBanner } from "@/app/(child)/arcane/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotmerch" }),
  endpoints: (builder) => ({
    getBanner: builder.query<ISilderBanner[], void>({
      query: () => "/banner",
    }),
  }),
});

export const { useGetBannerQuery } = bannerApi;
