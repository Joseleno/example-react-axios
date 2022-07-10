import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import {
  Box,
  Container,
  EditionText,
  FuelPrice,
  FuelText,
  Panel,
  Row,
  SaveButton,
  SaveIcon,
  SettingsIcon,
  Title,
} from "../../commun/css/styles";
import { Fuel } from "../../types/fuel";
import { getFuel } from "./fuelService";

type FuelComponentProps = {
  modeEdit: boolean;
  handlerChangeModeEdit: () => void;
};

export const FuelComponent = ({
  modeEdit,
  handlerChangeModeEdit,
}: FuelComponentProps) => {
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
      <SettingsIcon onClick={handlerChangeModeEdit} />
      <Panel>
        {modeEdit && (
          <Row>
            <EditionText>Change the item price.</EditionText>
          </Row>
        )}
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

        {modeEdit && (
          <Row>
            {" "}
            <SaveButton>
              <SaveIcon />
              <span>Save</span>
            </SaveButton>
          </Row>
        )}
      </Panel>
    </Container>
  );
};
