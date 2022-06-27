import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./request/apollo"
import { Router } from "./Router"

function App() {
  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </ApolloProvider>
  )
}

export default App