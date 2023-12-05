import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://social-network.samuraijs.com/api/1.1/",
  credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Me"],
  baseQuery,
  endpoints: () => ({}),
});
