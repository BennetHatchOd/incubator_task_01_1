export interface Errors {
    message: string,
    field: string
};

export interface Video {
    id: number,
    title:	string,
    author:	string,
    availableResolutions: string[],
    canBeDownloaded:	boolean,
    minAgeRestriction: number | null,
    publicationDate: string
    createdAt:	string
}

export interface CreateVideo {
    title:	string,
    author:	string,
    availableResolutions: string[],
}

export interface CorrectVideo {
    title:	string,
    author:	string,
    availableResolutions: string[],
    canBeDownloaded:	boolean,
    minAgeRestriction: number | null,
    publicationDate: string
}

