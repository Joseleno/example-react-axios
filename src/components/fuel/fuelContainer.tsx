import { useEffect, useState } from "react";
import {
  Box,
  Container,
  FuelPrice,
  FuelText,
  Panel,
  Row,
  SettingsIcon,
  Title,
} from "../../commun/css/styles";
import { Fuel } from "../../types/fuel";
import { getFuel } from "./fuelService";

export const FuelContainer = () => {
  const [fuel, setFuel] = useState<Array<Fuel>>();

  async function updateFuelData() {
    const listFuel = await getFuel();
    setFuel(listFuel);
  }

  useEffect(() => {
    updateFuelData();
  }, []);

  return (
    <Container>
      <Title>Gas Station</Title>
      <SettingsIcon />
      <Panel>
        {fuel?.map((item) => (
          <Row key={item.id}>
            <Box>
              <FuelText>{item.name}</FuelText>
            </Box>
            <Box>
              <FuelPrice>{item.price}</FuelPrice>
            </Box>
          </Row>
        ))}
      </Panel>
    </Container>
  );
};
