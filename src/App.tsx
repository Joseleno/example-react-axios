import React from "react";
import { ThemeProvider } from "styled-components";
import { Title } from "./commun/css/styles";
import { theme } from "./theme/theme";
import "./index.css";
import { FuelPage } from "./components/fuel/pages/fuel";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FuelPage />
    </ThemeProvider>
  );
}

export default App;
