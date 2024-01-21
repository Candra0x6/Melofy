import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./global/store/search";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

const font_custom = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: ` 'Poppins', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ChakraProvider theme={font_custom}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>
);
