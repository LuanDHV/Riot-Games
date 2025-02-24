import { ISilderBanner } from "@/app/(child)/arcane/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderbannerApi = createApi({
  reducerPath: "sliderbannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/arcane",
  }),
  endpoints: (builder) => ({
    getSliderBanner: builder.query<ISilderBanner[], void>({
      query: () => "/sliderbanner",
    }),
  }),
});

export const { useGetSliderBannerQuery } = sliderbannerApi;
