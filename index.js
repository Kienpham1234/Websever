const express = require ('express');

const app = express();
app.get('/',(req,res,next) =>{
    return res.send('Hello iam a website');
});
app.get('/time',(req,res,next) => {
    if(!req.query.name){
        return res.status(400).end();
    }
    return res.send(new Date().toString());

});