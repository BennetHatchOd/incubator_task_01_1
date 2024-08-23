import { Request, Response } from "express";
import {db} from '../db/db';
import {HTTP_STATUSES} from '../setting';
import {Video} from '../interfaces';

export const getIdVideoController = (req: Request<{id: string}>, res: Response<Video>) =>{
   
    
    const foundItem: Video = db.videos.find(c => c.id === +req.params.id);
    
    if(!foundItem) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
        return;
    }
    res.status(HTTP_STATUSES.OK_200);
    res.json(foundItem);
}