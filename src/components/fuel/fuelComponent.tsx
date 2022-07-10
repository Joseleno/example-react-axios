import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import {
  Box,
  Container,
  EditionText,
  FuelPrice,
  FuelText,
  InputText,
  Panel,
  Row,
  SaveButton,
  SaveIcon,
  SettingsIcon,
  Title,
} from "../../commun/css/styles";
import { Fuel, FuelState } from "../../types/fuel";
import { getFuel, updateFuel } from "./fuelService";

type FuelComponentProps = {
  modeEdit: boolean;
  handlerChangeModeEdit: () => void;
};

export const FuelComponent = ({
  modeEdit,
  handlerChangeModeEdit,
}: FuelComponentProps) => {
  const [fuel, setFuel] = useState<FuelState[]>();

  async function updateFuelData() {
    const listFuel = await getFuel();
    setFuel(listFuel);
  }

  useEffect(() => {
    updateFuelData();
  }, []);

  function onUpdatePrice(id: number, price: string) {
    const updatedFuel = fuel?.map((f) => {
      if (f.id === id) {
        f.price = Number(price);
        f.updated = true;
      }

      return f;
    });

    setFuel(updatedFuel);
  }

  async function onSave() {
    const changed = fuel?.filter((f) => f.updated);

    if (!changed) {
      handlerChangeModeEdit();
      return;
    }

    for (const item of changed) {
      const { updated, ...rest } = item;
      await updateFuel(rest);
    }

    updateFuelData();
    handlerChangeModeEdit();
  }

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
              {modeEdit ? (
                <InputText
                  type="number"
                  value={item.price}
                  onChange={(e) => onUpdatePrice(item.id, e.target.value)}
                />
              ) : (
                <FuelPrice>{item.price}</FuelPrice>
              )}
            </Box>
          </Row>
        ))}

        {modeEdit && (
          <Row>
            {" "}
            <SaveButton onClick={onSave}>
              <SaveIcon />
              <span>Save</span>
            </SaveButton>
          </Row>
        )}
      </Panel>
    </Container>
  );
};
