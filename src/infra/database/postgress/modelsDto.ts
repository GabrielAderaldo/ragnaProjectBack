export interface User {
    id?: string;
    name: string;
    email: string;
    builds: Build[];
    comments: Comment[];
    rankings: Ranking[];
    favorites: Favorite[];
  }
  
  export interface Build {
    id: string;
    title: string;
    description: string;
    creator: User;
    creatorId: string;
    skillTree: Skill[];
    earlyGame?: BuildLayer;
    midGame?: BuildLayer;
    endGame?: BuildLayer;
    earlyGameId?: string;
    midGameId?: string;
    endGameId?: string;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
    comments: Comment[];
    rankings: Ranking[];
    favorites: Favorite[];
  }
  
  export interface Skill {
    id: string;
    name: string;
    description: string;
    builds: Build[];
  }
  
  export interface BuildLayer {
    id: string;
    equipments: Equipment[];
    statsId?: string;
    stats?: Stats;
    earlyGameBuild?: Build;
    midGameBuild?: Build;
    endGameBuild?: Build;
  }
  
  export interface Equipment {
    id: string;
    name: string;
    description: string;
    refinements: string;
    cards: string[];
    runes: string[];
    enchantments: string[];
    gems: string[];
    obtainMethod: string;
    buildLayerId?: string;
    buildLayer?: BuildLayer;
  }
  
  export interface Stats {
    id: string;
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
    buildLayers: BuildLayer[];
  }
  
  export interface Comment {
    id: string;
    text: string;
    author: User;
    authorId: string;
    build: Build;
    buildId: string;
    createdAt: Date;
    responses: Comment[];
    responseTo?: Comment;
    responseToId?: string;
  }
  
  export interface Ranking {
    id: string;
    user: User;
    userId: string;
    build: Build;
    buildId: string;
    rating: number;
  }
  
  export interface Favorite {
    id: string;
    user: User;
    userId: string;
    build: Build;
    buildId: string;
  }
  