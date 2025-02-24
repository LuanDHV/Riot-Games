import { IEsports } from "@/app/riotgames/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const esportsApi = createApi({
  reducerPath: "esportsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotgames" }),
  endpoints: (builder) => ({
    getEsports: builder.query<IEsports[], void>({
      query: () => "/esports",
    }),
  }),
});

export const { useGetEsportsQuery } = esportsApi;
