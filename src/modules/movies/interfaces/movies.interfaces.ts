


export interface ICategory {
    id: number;
    name: string;
}

export interface ILanguage {
    id: number;
    name: string;
}

export interface IMovies {
    id: number;
    title: string;
    releasedYear: number;
    description: string;
    categoryId: number;
    languageId: number;
    category: ICategory;
    language: ILanguage;
}