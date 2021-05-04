require('./config/config');
const express = require('express');
const bodyParser= require('body-parser');


const app = express();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res){
    res.json('Haciendo una peticion get a usuarios');
})

app.post('/usuario', function(req, res){
    let body = req.body;
    if(body.nombre===undefined){
        res.status(400).json({
            ok:false,
            msg:'El nombre es necesario'
        })
    }else{
        res.json({
            body:body
        });
    }
   
})

app.put('/usuario/:id', function(req, res){
    let id = req.params.id;
    res.json({
        id
    });
})
app.delete('/usuario', function(req, res){
    res.json('Haciendo una peticion delete a usuarios');
})
app.listen(process.env.PORT,()=>{
    console.log('escuchando el puerto :'+process.env.PORT);
});