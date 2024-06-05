export interface Comment {
    id: string;
    text: string;
    authorId: string;
    buildId: string;
    createdAt: Date;
    updatedAt: Date;
    responses?: Comment[];
}