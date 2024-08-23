

type Error = {
    message: string,
    field: string
}

export type Errors = {
    errorMessages: Array<Error>
}

export type Video = {
    id: number,
    title:	string,
    author:	string,
    availableResolutions: Array<string>, 
    canBeDownloaded:	boolean,
    minAgeRestriction: null | number,
    publicationDate: string
    createdAt:	string
}

export type CreateVideo = {
    title:	string,
    author:	string,
    availableResolutions: Array<string>, 
}


export type CorrectVideo = {
    title:	string,
    author:	string,
    availableResolutions: Array<string>, 
    canBeDownloaded:	boolean,
    minAgeRestriction: null | number,
    publicationDate: string
}


