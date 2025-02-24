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
    prepareHeaders: (headers) => {
      headers.set("cart-id", getCartId());
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCart: builder.query<ICartItem[], void>({
      query: () => "/cart",
    }),
    addToCart: builder.mutation<void, { productId: number; quantity: number }>({
      query: (body) => ({
        url: `/cart/${getCartId()}`,
        method: "POST",
        body,
      }),
    }),
    updateCart: builder.mutation<void, { id: string; quantity: number }>({
      query: ({ id, quantity }) => ({
        url: `/cart/${id}`,
        method: "PATCH",
        body: { quantity },
      }),
    }),
    removeFromCart: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useRemoveFromCartMutation,
} = cartApi;
