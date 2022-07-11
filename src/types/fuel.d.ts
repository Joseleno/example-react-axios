export interface Fuel{
    id: number;
    name: string;
    price: number;
}

export type FuelState = Fuel & {
    updated?: boolean;
}