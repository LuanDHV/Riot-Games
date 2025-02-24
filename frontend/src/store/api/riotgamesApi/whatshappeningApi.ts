import { IWhatsHappening } from "@/app/riotgames/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const whatshappeningApi = createApi({
  reducerPath: "whatshappeningApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotgames" }),
  endpoints: (builder) => ({
    getWhatsHappening: builder.query<IWhatsHappening[], void>({
      query: () => "/whatshappening",
    }),
  }),
});

export const { useGetWhatsHappeningQuery } = whatshappeningApi;
