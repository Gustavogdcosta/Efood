// use effect do home, headerTroria e MenuTrattoria
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, RestauranteAPI } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<RestauranteAPI[], void>({
      query: () => ''
    }),
    getHeader: builder.query<RestauranteAPI, string>({
      query: (id) => `/${id}`
    }),
    getMenu: builder.query<Cardapio[], string>({
      query: (id) => `/${id}`,
      transformResponse: (response: RestauranteAPI) => response.cardapio
    })
  })
})

export const { useGetHomeQuery, useGetHeaderQuery, useGetMenuQuery } = api

export default api
