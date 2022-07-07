import { Api } from "../../services/serviceApi";

export const getFuel = async () => {
    const request = await Api.get("fuel");

    return request.data;
};