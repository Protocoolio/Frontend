import type { AppProps } from "next/app";
import store from "../store/store";
import { Provider } from "react-redux";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme";

import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
