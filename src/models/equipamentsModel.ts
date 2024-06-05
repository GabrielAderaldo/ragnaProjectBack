enum EquipmentType {
    TOP_HEAD,
    MIDDLE_HEAD,
    BOTTOM_HEAD,
    ARMOR,
    WEAPON,
    SHIELD,
    FOOT,
    ACCESSORY_1,
    ACCESSORY_2,
    COVER,
}


export interface Equipment {
    id: string;
    name: string;
    type: EquipmentType;
    description: string;
    refinements: string;
    cards?: string[];
    runes?: string[];
    enchantments?: string[];
    gems?: string[];
    obtainMethod: string;
}