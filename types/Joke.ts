export interface Joke {
    id: number;
    jokeType: string;
    content: string[];
    source: string;
    createdAt: Date;
    updatedAt: Date;
}