function handleRequest(req,res){
  var url=req.url
  switch (url) {
    case '/events':
        res.end("modulo events")
      break;
    case '/all':
      res.end('modulo all')
      break;
    default:
      res.end('Recurso no encontrado')

  }
}
