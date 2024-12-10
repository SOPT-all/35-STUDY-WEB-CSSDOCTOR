import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle"
import Sale from "./components/Sale/Sale";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Sale />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
