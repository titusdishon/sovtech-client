import React from "react";
import App from "../App";
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://sov-test-gql-1.herokuapp.com//",
});

const CustomApolloProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default CustomApolloProvider;
