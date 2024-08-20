import { Request, Response } from "express";
import {SETTING, HTTP_STATUSES} from '../setting';
import {db} from '../db/db';

export const getVideoController = (req: Request, res: Response) =>{
    const videos = db.videos;
    res.status(HTTP_STATUSES.OK_200).json(videos);

}
