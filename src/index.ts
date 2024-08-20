import express from 'express';
import {app} from './app';
import {SETTING, HTTP_STATUSES} from './setting';
 




app.listen(SETTING.PORT, () => {
    console.log(`Server is working on port ${SETTING.PORT}`);
})