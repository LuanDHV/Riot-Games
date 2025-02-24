import { ILatestCollaborations } from "@/app/riotmerch/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const latestcollaborationsApi = createApi({
  reducerPath: "latestcollaborationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/riotmerch" }),
  endpoints: (builder) => ({
    getLatestCollaborations: builder.query<ILatestCollaborations[], void>({
      query: () => "/latestcollaborations",
    }),
  }),
});

export const { useGetLatestCollaborationsQuery } = latestcollaborationsApi;
