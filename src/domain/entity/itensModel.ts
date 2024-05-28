export interface main_card{
    name:string;
    description:string;
    imageUrl:string;
    type:string;
    ref:number;
    howWeGet:string;
    priceUrl:string;
}

export interface optional_card{
    name:string;
    description:string;
    imageUrl:string;
    type:string;
    ref:number;
    howWeGet:string;
    priceUrl:string;
}

export interface item{
    name:string;
    description:string;
    imageUrl:string;
    type:string;
    ref:number;
    howWeGet:string;
    priceUrl:string;
}

enum TYPE{
    head_top,
    head_mid,
    head_low,
    armor,
    weapon,
    shild,
    cover,
    boot,
    ACCESSORY_RIGHT,
    ACCESSORY_LEFT,
}


export interface itensModel{
    firstClass: {item:item,main_card:main_card,optional_card:optional_card,others:string,enchantment:string,howWeGet:string,type:TYPE}[];
    secondClass: {item:item,main_card:main_card,optional_card:optional_card,others:string,enchantment:string,howWeGet:string,type:TYPE}[];
    thirdClass: {item:item,main_card:main_card,optional_card:optional_card,others:string,enchantment:string,howWeGet:string,type:TYPE}[];
    fourthClass: {item:item,main_card:main_card,optional_card:optional_card,others:string,enchantment:string,howWeGet:string,type:TYPE}[];
}