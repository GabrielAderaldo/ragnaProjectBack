import { habilitysModel } from "./habilitysModel"
import { itensModel } from "./itensModel"
import { statsModel } from "./statsModel"

export interface buildModel {
    name:string
    classReference:string
    typeOfBuild:string
    description:string
    statsReference:statsModel
    habilitysReference:habilitysModel
    itensReference:itensModel
    considerations:string
}