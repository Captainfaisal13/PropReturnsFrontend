import React from "react";
import Head from "next/head";
import App from "../components/App";
import { AppProvider } from "../components/context";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

let data = [];

export default function Home({ launches }) {
  const [isLoading, setIsLoading] = React.useState(true);
  data = launches;

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Head>
        <title>PropReturns Assignments</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <AppProvider>
        <App />
      </AppProvider>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://propreturnsbackend.onrender.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query Properties {
        properties {
          _id
          address
          area
          bathrooms
          bedrooms
          image
          price
        }
      }
    `,
  });
  return {
    props: {
      launches: data.properties,
    },
  };
}

export { data };
