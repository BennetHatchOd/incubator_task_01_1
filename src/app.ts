import express from 'express';
import {SETTING, HTTP_STATUSES} from './setting';
import cors from 'cors'
import * as Handler from './handlerEndpoints/indexHandlers';




export const app = express();


const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);


app.get('/', (req,res) => {   
    
    res.status(200).json({version: '4.0 '});
    
})


app.get(SETTING.PATH.VIDEO, Handler.getVideoController);
app.get(SETTING.PATH.VIDEOID, Handler.getIdVideoController);
app.delete(SETTING.PATH.VIDEOID, Handler.deleteIdVideoController);
app.put(SETTING.PATH.VIDEOID, Handler.putVideoController);
app.post(SETTING.PATH.VIDEO, Handler.postVideoController);
app.delete(SETTING.PATH.TEST_CLEAR_DB, Handler.deleteAllController);




