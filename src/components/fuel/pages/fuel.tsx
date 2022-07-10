import { useState } from "react";
import { FuelComponent } from "../fuelComponent";

export const FuelPage = () => {
  const [modeEdit, setModeEdit] = useState(false);

  function handlerChangeModeEdit() {
    setModeEdit((prev) => !prev);
  }

  return (
    <FuelComponent
      modeEdit={modeEdit}
      handlerChangeModeEdit={handlerChangeModeEdit}
    />
  );
};
