import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: import.meta.env.VITE_URI_API,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACESSES}`,
    },
    cache: new InMemoryCache()
})