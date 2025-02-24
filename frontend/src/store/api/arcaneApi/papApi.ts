import { IPaP } from "@/app/(child)/arcane/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const papApi = createApi({
  reducerPath: "papApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/arcane",
  }),
  endpoints: (builder) => ({
    getPaP: builder.query<IPaP[], void>({
      query: () => "/pap",
    }),
  }),
});

export const { useGetPaPQuery } = papApi;
