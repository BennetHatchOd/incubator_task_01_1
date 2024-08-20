import express from 'express';
import {SETTING, HTTP_STATUSES} from './setting';
import * as Handler from './handlerEndpoints/indexHandlers';




export const app = express();
//app.use(express.json());

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);


app.get('/', (req,res) => {   
    
    res.status(200).json({version: '1.0'});
    
})


app.get(SETTING.PATH.VIDEO, Handler.getVideoController);
app.get(SETTING.PATH.VIDEOID, Handler.getIdVideoController);
app.delete(SETTING.PATH.VIDEOID, Handler.deleteIdVideoController);
app.put(SETTING.PATH.VIDEOID, Handler.putVideoController);
app.post(SETTING.PATH.VIDEO, Handler.postVideoController);
app.delete(SETTING.PATH.TEST_CLEAR_DB, Handler.deleteAllController);




// app.delete('/courses/:id', (req,res) => { //   courses/:id [DELETE]
//     const foundCourse = db.courses.find(c => c.id === +req.params.id);
//     db.courses = db.courses.filter(c => c.id !== +req.params.id);
    
//     if(!foundCourse) {
//         res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
//         return;
//     }
//     res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
// })

// app.put('/courses/:id', (req,res) => { //   courses/:id [PUT]
//     const foundCourse = db.courses.find(c => c.id === +req.params.id)
    
//     if(!foundCourse) {
//         res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
//         return;
//     }
//     if(!req.body.title){
//         res.sendStatus(HTTP_STATUSES.NOT_FOUND_404);
//         return;
//     }

//     foundCourse.title = req.body.title;

//     res.status(HTTP_STATUSES.NO_CONTENT_204);
// })

// app.delete('/__test__/data', (req, res) =>{
//     db.courses = [];
//     res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
// })
