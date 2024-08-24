import { Request, Response } from "express";
import {db} from '../db/db';
import * as SETTING from '../setting';
import {Video, CorrectVideo, Errors } from '../interfaces';

export const putVideoController = (req: Request<{id: string},{},CorrectVideo>, res: Response<Errors>) =>{
    
  const foundVideo: Video = db.videos.find(c => c.id === +req.params.id);
    if(!foundVideo) {
      res.sendStatus(SETTING.HTTP_STATUSES.NOT_FOUND_404);
      return;
    }
    
  let errors: Errors = findErrorValidData(req.body);

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
    .send(errors);
      
    return;
}
      

    function findErrorValidData(body: CorrectVideo){

        const errors :Errors = {errorsMessages: []};

        if(typeof(body.title) != "string" || body.title.length == 0 || body.title.length > 40)
            errors.errorsMessages.push(SETTING.foundError.title);
            
        if(typeof(body.author) != "string" || body.author.length == 0 || body.author.length > 40)
            errors.errorsMessages.push(SETTING.foundError.author);

        if(Array.isArray(body.availableResolutions) && !body.availableResolutions.every(n => SETTING.RESOLUTIONS.includes(n)) || body.availableResolutions.length == 0){
            errors.errorsMessages.push(SETTING.foundError.resolutions);
        } 
        if(typeof(body.canBeDownloaded) != "boolean")
            errors.errorsMessages.push(SETTING.foundError.canBeDownloaded);


        if (body.minAgeRestriction != null && (typeof(+body.minAgeRestriction) != "number" || +body.minAgeRestriction > 18 || +body.minAgeRestriction < 1))
          errors.errorsMessages.push(SETTING.foundError.minAgeRestriction);
        
        
        if(typeof(body.publicationDate) != "string" || isNaN(Date.parse(body.publicationDate)))
            errors.errorsMessages.push(SETTING.foundError.publicationDate);

        return errors;
    }
