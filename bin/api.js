/* eslint no-console : 0 */
import express from 'express';
import { apiPort } from '../config/env';

const app = express();

app.get('/api', (req, res) => {
    res.send('Hello World');
});

app.listen( apiPort, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`api listening on port ${apiPort}`);
    }
});