import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://628642b996bccbf32d724049.mockapi.io/contacts',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    fetchContacts: build.query({
      query: () => '',
      providesTags: ['Contacts'],
    }),
    createContact: build.mutation({
      query: contact => ({
        url: '',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    removeContact: build.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useRemoveContactMutation,
  useCreateContactMutation,
} = contactsApi;
