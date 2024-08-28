import { apiSlice } from "./apiSlice";
import { CONTACT_URL } from "./constants";
import { MESSAGES_URL } from "./constants";

export const contactSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sendContactForm: builder.mutation({
            query: (contactData) => ({
                url: CONTACT_URL,
                method: 'POST',
                body: contactData,
            }),
        }),
        getMessages: builder.query({
            query: () => ({
                url: `${MESSAGES_URL}/messages`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useSendContactFormMutation, useGetMessagesQuery } = contactSlice;
