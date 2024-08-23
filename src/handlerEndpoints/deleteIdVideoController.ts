import { Request, Response } from "express";
import {db} from '../db/db';
import {HTTP_STATUSES} from '../setting';

export const deleteIdVideoController = (req: Request<{id: string}>, res: Response) =>{
    
    const index = db.videos.findIndex(n => n.id === +req.params.id);
  
    if(index == -1){
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
        return;
    }
    
    db.videos = db.videos.filter(n => n.id !== +req.params.id);
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    
}