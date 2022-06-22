import "../styles/index.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { ApplicationContainer } from "../components/ApplicationContainer";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Poverty in the Philippines</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          primaryColor: "indigo"
        }}
      >
        <ApplicationContainer>
          <Component {...pageProps} />
        </ApplicationContainer>
      </MantineProvider>
    </>
  );
}
