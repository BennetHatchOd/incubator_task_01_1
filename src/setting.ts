import {config} from 'dotenv';


export const SETTING = {
    PORT: process.env.PORT || 3014,
    PATH: {
        VIDEO: '/videos',
        VIDEOID: '/videos/:id',
        TEST_CLEAR_DB: '/testing/all-data'
    }
};

export const HTTP_STATUSES = {
    OK_200:             200,
    CREATED_201:        201,
    NO_CONTENT_204:     204,
    BAD_REQUEST_400:    400,
    NOT_FOUND_404:      404 
};

export interface Errors {
    message: string,
    field: string
};

export const foundError ={
    title:{
        message: "Title length isn't allowed",
        field: "title"
    },
    author:{
        message: "Author length isn't allowed",
        field: "author"
    },
    resolutions: {
        message: "Resolutions type isn't allowed",
        field:  "availableResolutions"
    }
};

export const RESOLUTIONS = [ 'P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160' ];

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
