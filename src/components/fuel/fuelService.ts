import { Api } from "../../services/serviceApi";
import { FuelState } from "../../types/fuel";

export const getFuel = async () => {
    const request = await Api.get("fuel");

    return request.data;
};

export const updateFuel = async (fuel: FuelState) => {
    const request = await Api.put(`fuel/${fuel.id}`, fuel);

    return request.data;
};