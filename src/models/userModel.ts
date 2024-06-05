import { BuildModel } from "./buildModel";

export interface User {
    id: string; // ObjectId
    name: string;
    email: string;
    password: string;
    listOfFavoriteBuilds: BuildModel[];
}


