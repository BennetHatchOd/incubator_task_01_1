import { Request, Response } from "express";
import {db} from '../db/db';
import * as SETTING from '../setting';
import * as INTERFACES from '../interfaces';

export const putVideoController = (req: Request, res: Response) =>{
    
  const foundVideo = db.videos.find(c => c.id === +req.params.id);
    if(!foundVideo) {
      res.sendStatus(SETTING.HTTP_STATUSES.NOT_FOUND_404);
      return;
    }
    
  let errors = findErrorValidData(req.body);

  if(errors.errorsMessages.length == 0){

     
     
    foundVideo.title =	req.body.title;
    foundVideo.author =	req.body.author;
    foundVideo.availableResolutions = [...req.body.availableResolutions];
    foundVideo.canBeDownloaded =	req.body.	canBeDownloaded;
    foundVideo.minAgeRestriction =	req.body.minAgeRestriction;
    foundVideo.publicationDate =	req.body.publicationDate; 
          
    res
      .sendStatus(SETTING.HTTP_STATUSES.NO_CONTENT_204);
    return;
  }

  res
    .status(SETTING.HTTP_STATUSES.BAD_REQUEST_400)
    .json(errors);
      
    return;
}
      

    function findErrorValidData(body: INTERFACES.CorrectVideo){

        const errors :{
                errorsMessages: INTERFACES.Errors[] 
            } = {errorsMessages: []};

        if(typeof(body.title) != "string" || body.title.length == 0 || body.title.length > 40)
            errors.errorsMessages.push(SETTING.foundError.title);
            
        if(typeof(body.author) != "string" || body.author.length == 0 || body.author.length > 40)
            errors.errorsMessages.push(SETTING.foundError.author);

        if(!body.availableResolutions.every(n => SETTING.RESOLUTIONS.includes(n)) || body.availableResolutions.length == 0){
            errors.errorsMessages.push(SETTING.foundError.resolutions);
        } 
        if(typeof(body.canBeDownloaded) != "boolean")
            errors.errorsMessages.push(SETTING.foundError.canBeDownloaded);


        if (body.minAgeRestriction != null)
            if(body.minAgeRestriction > 18 || body.minAgeRestriction < 1)
                errors.errorsMessages.push(SETTING.foundError.minAgeRestriction);
        
        
        if(typeof(body.publicationDate) != "string" || isNaN(Date.parse(body.publicationDate)))
            errors.errorsMessages.push(SETTING.foundError.publicationDate);

        return errors;
    }
