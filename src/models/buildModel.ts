import { Equipment } from "./equipamentsModel";
import { Skill } from "./skillModel";

export interface Stats {
    STR: number;
    AGI: number;
    VIT: number;
    INT: number;
    DEX: number;
    LUK: number;
    POW: number;
    STA: number;
    WIS: number;
    SPL: number;
    CON: number;
    CRT: number;
}

export interface BuildModel {
    id: string;
    title: string;
    description: string;
    creatorId: string;
    skillTree: Skill[];
    earlyGame: BuildLayer;
    midGame: BuildLayer;
    endGame: BuildLayer;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
    raiting: number;
}

export interface BuildLayer {
    equipments: Equipment[];
    stats: Stats;
}

