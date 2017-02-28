import path from 'path';
import express from 'express';
import config from './webpack.config.js';

const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, ()=>{
    console.log("Running");
});
