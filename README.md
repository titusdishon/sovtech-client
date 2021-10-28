# Project description

This is the reactjs application that enables a user to fetch a list of people and their details.

## Requirements:

- Node js version ^14.x
- React js version ^14.x
- All other requirements will be installed as we proceed.

## Getting started with the project

Clone the project:
`git clone git@github.com:titusdishon/sovtech-client.git` if you are using ssh client or,
`git clone https://github.com/titusdishon/sovtech-client.git` if you are using https:
change directory into the cloned project directory and run:
`npm i` on the shell.
This will install all the required packages to start interacting with the project:

In the poject directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
Thsi project will be consuming graphql endpoints hosted on heroku, if you are interested in using a local version of the server code please follow the guide on [sovtech server](https://github.com/titusdishon/sovtech-server)
After cloning and runnin the server code remember to change the base url on the client code
`client/src/apollo/Apollo.tsx`

```
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

```

Change this line `"https://sov-test-gql-1.herokuapp.com//"` to `http://localhost:5781`

This will route all the requests to the local instance of server code runing on your pc.
