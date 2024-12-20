import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderbannerApi = createApi({
  reducerPath: "sliderbannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/arcane",
  }),
  endpoints: (builder) => ({
    getSliderBanner: builder.query({
      query: () => "/sliderbanner",
    }),
  }),
});

export const { useGetSliderBannerQuery } = sliderbannerApi;
