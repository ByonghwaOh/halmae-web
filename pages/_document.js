import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@mui/styles";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
        originalRenderPage({
            // Useful for wrapping the whole react tree
            enhanceApp: App => props =>
                sheet.collectStyles(materialSheets.collect(<App {...props} />)),
            // Useful for wrapping in a per-page basis
            enhanceComponent: (Component) => Component,
        });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
            <>
                {initialProps.styles}
                {sheet.getStyleElement()}
            </>
            )
        };
    } finally {
        sheet.seal();
    };
  };

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="favicon.ico" />
          <link rel="apple-touch-icon" href="logo192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  };
};

export default MyDocument;
