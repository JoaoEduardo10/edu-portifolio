/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/themes";
import { Provider } from "react-redux";
import { GlobalStyles } from "../style/globalStyles";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { store } from "./storeMock";

const renderTheme = (children: React.ReactNode, storeParams?: ToolkitStore) => {
  const isStore = storeParams ?? store;
  return render(
    <ThemeProvider theme={theme}>
      <Provider store={isStore}>
        {children}
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
};

export { renderTheme };
