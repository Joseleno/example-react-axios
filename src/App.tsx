import React from "react";
import { ThemeProvider } from "styled-components";
import { Title } from "./commun/css/styles";
import { FuelContainer } from "./components/fuel/fuelContainer";
import { theme } from "./theme/theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FuelContainer />
    </ThemeProvider>
  );
}

export default App;
