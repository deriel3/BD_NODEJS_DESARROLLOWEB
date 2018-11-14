var express=require('express')
const Router=express.Router()
const session = require('express-session')
var usuario=require('./model.js')
var eventos=require('./model_event.js')
const mongoose = require('mongoose')
var url="mongodb://localhost/nextu"
mongoose.connect(url)

var sess;
Router.post('/login',function(req,res){
  sess = req.session;
  let user=req.body.user
  let pass=req.body.pass
  usuario.find({"email":user,"pass":pass}).exec(function(err,docs){
    if(err){res.status(500)
    res.json(err)}
    if(docs==[])
    {
      res.send("asd")
    }
    else {
      sess.email=user
      res.send("Validado")
    }
  })
})
Router.get('/all',function(req,res){
  eventos.find({"usuario_id":sess.email}).exec(function(err,docs){
    if(err){
      res.status(500)
    }
    else{
      res.send(docs)
    }
  })
})
Router.post('/delete',function(req,res){
  let id=req.body.id
  eventos.deleteOne({ id: id }, function (err) {
  if (err) {res.send("Error")}
  else{res.send("Se borro correctamente")}
  });
})
Router.post('/new',function(req,res){
  let titulo=req.body.title
  let start=req.body.start
  let end=req.body.end
  let usuario=sess.email
  let ev=new eventos({
    id:Math.floor(Math.random()*50),
    usuario_id:usuario,
    title:titulo,
    start:start,
    end:end
  })
  ev.save(function(error){
    if (error) {
      res.send("Error")
    }
    else {
      res.send("Se guardo Correctamente")
    }
  })
})
module.exports= Router
