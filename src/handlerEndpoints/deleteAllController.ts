import { Request, Response } from "express";
import {db} from '../db/db';
import {HTTP_STATUSES} from '../setting';

export const deleteAllController = (req: Request, res: Response) =>{
    db.videos = [];
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);

}