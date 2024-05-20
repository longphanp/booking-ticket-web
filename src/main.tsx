import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import configs from "configs";
import queryClient from "queries";
import theme from "styles/theme";

import { ThemeProvider } from "@emotion/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./styles/global.css";

import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={configs.google.clientId}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
