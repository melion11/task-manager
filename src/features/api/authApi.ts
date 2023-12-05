import { baseApi } from "@/app/api";
import { FormValues } from "@/features";
import {
  LoginResponseData,
  MeResponseData,
  ResponseAuth,
} from "@/features/api/authApi.types.ts";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<ResponseAuth<MeResponseData>, void>({
      query: () => "auth/me",
      providesTags: ["Me"],
    }),
    getLogIn: builder.mutation<ResponseAuth<LoginResponseData>, FormValues>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Me"],
    }),
    getLogout: builder.mutation<ResponseAuth<{}>, void>({
      query: () => ({
        url: "auth/login",
        method: "DELETE",
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

export const { useGetLogInMutation, useMeQuery, useGetLogoutMutation } =
  authApi;
