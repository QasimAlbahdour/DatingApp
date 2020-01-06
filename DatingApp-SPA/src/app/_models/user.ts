import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAS: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    phtoUrl: string;
    city: string;
    country: string;
    intrest?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];

}
