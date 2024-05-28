import { buildModel } from "./buildModel";

export interface serverModel{
    name: string;
    url: string;
    description: string;
    builds: buildModel[];
}