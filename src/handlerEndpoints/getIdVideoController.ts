import { Request, Response } from "express";
import {db} from '../db/db';
import {SETTING, HTTP_STATUSES} from '../setting';

export const getIdVideoController = (req: Request, res: Response) =>{
    //const videos = db.videos;
    
    const foundItem = db.videos.find(c => c.id === +req.params.id);
    
    if(!foundItem) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
        return;
    }
    res.status(HTTP_STATUSES.OK_200);
    res.json(foundItem);
}