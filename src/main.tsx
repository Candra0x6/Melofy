import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const font_custom = extendTheme({
  fonts: {
    body: `'Krona One', sans-serif, 'Poppins', sans-serif`,
    heading: `'Krona One', sans-serif, 'Poppins', sans-serif`,
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={font_custom}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
