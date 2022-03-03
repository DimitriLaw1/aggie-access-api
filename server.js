const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;


server.use(middlewares);
server.use(router);

server.listen(port);

//fetch("http://localhost:300/user")
//.then(res => res.json())
//.then(json => {
    //json.map(data => {
    //    console.log(data.name)
   // })
//})