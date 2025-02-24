import { IForge } from "@/app/riotgames/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const forgeApi = createApi({
  reducerPath: "forgeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotgames" }),
  endpoints: (builder) => ({
    getForge: builder.query<IForge[], void>({
      query: () => "/forge",
    }),
  }),
});

export const { useGetForgeQuery } = forgeApi;
