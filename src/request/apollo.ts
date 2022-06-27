import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4twfl410abr01un07s3ab7l/master",
    cache: new InMemoryCache()
})