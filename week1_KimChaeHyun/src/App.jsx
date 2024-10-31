import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import "@styles/theme.css";
import GlobalStyle from "@styles/global";
import router from "@routes/Router";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
