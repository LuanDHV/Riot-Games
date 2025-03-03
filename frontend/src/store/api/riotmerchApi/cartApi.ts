import { ICartItem } from "@/app/riotmerch/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getCartId = () => {
  let cartId = localStorage.getItem("cartId");
  if (!cartId) {
    cartId = crypto.randomUUID();
    localStorage.setItem("cartId", cartId);
  }
  return cartId;
};

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/riotmerch",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCart: builder.query<{ cartId: string; products: ICartItem[] }, void>({
      query: () => `/cart/${getCartId()}`,
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation<void, { productId: number; quantity: number }>({
      query: (body) => ({
        url: `/cart/${getCartId()}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCart: builder.mutation<void, { productId: number; quantity: number }>(
      {
        query: ({ productId, quantity }) => ({
          url: `/cart/${getCartId()}`,
          method: "PATCH",
          body: { productId, quantity },
        }),
        invalidatesTags: ["Cart"],
      },
    ),
    removeFromCart: builder.mutation<void, { productId: number }>({
      query: ({ productId }) => ({
        url: `/cart/${getCartId()}`,
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useRemoveFromCartMutation,
} = cartApi;
