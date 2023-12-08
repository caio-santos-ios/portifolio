export type Ttecnology = {
    name: string;
}

export type Tproject = {
    id: number;
    name: string;
    description: string;
    link: string;
    photo: string;
    repository: string;
    tecnologies: Ttecnology[];
}