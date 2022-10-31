import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'szazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'cdf19c2519msha09ba2add6a2d6bp15fae6jsnd00615ffbe88');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (contryCode) => `/charts/country?country_code=${contryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerms) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerms}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
	useGetSongsBySearchQuery
} = shazamCoreApi;
