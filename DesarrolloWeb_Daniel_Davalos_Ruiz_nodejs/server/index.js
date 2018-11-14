const bodyParser=require('body-parser'),
http=require('http'),
express=require('express'),
Routing=require('./rutas.js'),
path=require('path'),
mongoose=require('mongoose'),
session = require('express-session');

const PORT=3000;
const app=express();
const Server=http.createServer(app);
var usuario=require('./model.js')
var url="mongodb://localhost/nextu"
mongoose.connect(url)

let us=new usuario({
  email:"daniel@gmail.com",
  password:"daniel123",
  nombre:"daniel",
  apellido:"davalos",
  fecha_nacimiento:"1996-12-01"
})
us.save(function(error){
  if (error) {
    console.log("Error al crear usuario")
  }
  else {
    console.log("La credencial es: daniel@gmail.com daniel123")
  }
})

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('client'))
app.use('/events',Routing)
Server.listen(PORT,function(){
  console.log("e"+PORT)
})
