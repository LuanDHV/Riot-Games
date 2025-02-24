import { ICharacter } from "@/app/(child)/arcane/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/arcane",
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query<ICharacter[], void>({
      query: () => "/character",
    }),
  }),
});

export const { useGetCharacterQuery } = characterApi;
