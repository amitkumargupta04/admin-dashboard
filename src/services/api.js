import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Products', 'Users'],
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => '/posts', providesTags: ['Products'] }),
    getProduct: builder.query({ query: (id) => `/posts/${id}` }),
    createProduct: builder.mutation({
      query: (data) => ({ url: '/posts', method: 'POST', body: data }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({ url: `/posts/${id}`, method: 'PUT', body: data }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({ url: `/posts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Products'],
    }),
    getUsers: builder.query({ query: () => '/users', providesTags: ['Users'] }),
    getUser: builder.query({ query: (id) => `/users/${id}` }),
  }),
});

export const {
  useGetProductsQuery, useGetProductQuery,
  useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation,
  useGetUsersQuery, useGetUserQuery,
} = api;