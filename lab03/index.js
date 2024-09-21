
// Importing http module 
var http = require('http');

// // Creating http Server
var myserver=http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
//   //Send the response body as Hello World!
  res.end('Hello World!, Comp3123');
}).listen(8080); //the server object listens on port 8080

console.log('Server running at http://127.0.0.1:8080/');


const PORT2 = process.env.PORT || 3000;
 
var httpServer2 = http.createServer(
    function (req, res) {
        const body = '<h1>hello COMP3123</h1>';
 
        // Calling response.writeHead method 
          res.writeHead(200, {'Content-Type': 'text/html'});
        //Send the response body as Hello World!
          res.end(body);
    });
 
// // Listening to http Server (assigning the port to the server) 
httpServer2.listen(PORT2,
    () => {
        console.log("Server running at http://127.0.0.1:3000/");
    });

//-------------------------------------------------------------------

const PORT3 = process.env.PORT || 2020;
 
const httpServer3 = http.createServer(

    function (req, res) {
      //// we can send the message directly 
        res.write('Hello world!');
        res.end();
    }
)
    //// listening directly 
    .listen(PORT3, error => {
        // Print port in substitiuton 
        console.log(`Server listening on port ${PORT3}`);
        console.log(error); //if there is any unexpectd error. print the error 
        console.log("Server running at http://127.0.0.1:2020/");
    });

//--------------------------------------------------------------------------
myCars=["Mazda","BMW","Toyota","Ford"]

http.createServer(function (req, res) {

// req.url returns the request url for any request made to it.
//    if http://127.0.0.1:8082/ 
  if(req.url=="/")
    { res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('Welcome');} 
  

  if(req.url=="/hello")
    { res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Hello World!</h1>');} 
  
  if(req.url=="/name")
    { res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Shirin</h1>');} 

     // if http://127.0.0.1:8082/cars 
   //Send the response body as "myCars" in normal order
   if(req.url=="/cars")
    { 
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      ////The JSON. stringify() method converts JavaScript objects into strings.
      return res.end(JSON.stringify(myCars))
    } 
        
   if(req.url=="/carssort")
    { 
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      myCars=myCars.sort();
      return res.end(JSON.stringify(myCars))
    } 
   
   if(req.url=="/carsrev")
    { 
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      myCars.reverse();
      return res.end(JSON.stringify(myCars))
    } 
 
}).listen(8082) //the server object listens on port 8082

console.log('Server running at http://127.0.0.1:8082/');



////--------------------------------------------------------------------------
// using req.method
let person = [
  {id:1,firstName: "Mohammed",lastName: "Doe",age: 40, job: "IT"},
  {id:2,firstName: "Smith",lastName: "Jay",age: 50, job: "marketing"},
  {id:3,firstName: "John",lastName: "Doe",age: 45, job: ""},
  {id:4,firstName: "Sara",lastName: "Ali",age: 35, job: "finance"},
]
// // make loop
for (const [key, value] of Object.entries(person)) {console.log(key, value);} 
for (const [key, value] of Object.entries(person)) {console.log(key, value.firstName);} 

const PORT4 = process.env.PORT || 8082

const httpServer4 = http.createServer(function (req, res) {


  if (req.method !== 'GET') {
      res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
  } else {

      //http://localhost:8082/
      if (req.url === '/') {
          res.end("<h1>Hello World</h1>")
      }
      //http://localhost:8082/hello
      if (req.url === '/hello') {
          res.write("<h1>Hello</h1>")
          res.end()
      }

       //http://localhost:8082/users
      if (req.url === '/users') {
          res.setHeader('Content-Type', 'application/json;charset=utf-8');
          return res.end(JSON.stringify(person))
      }
  }
  
});

httpServer4.listen(PORT4, () => {
  console.log(`Server listening on port ${PORT4}`);
})


 
// Create server 1 listening on port 8080 
const server1 = http.createServer((req, res) => { 
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('Hello from server 1'); 
}); 
server1.listen(8080, () => { 
  console.log('Server 1 running at http://localhost:8080/'); 
}); 
 
// Create server 2 listening on port 8081 
const server2 = http.createServer((req, res) => { 
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('Hello from server 2'); 
}); 
server2.listen(8081, () => { 
  console.log('Server 2 running at http://localhost:8081/'); 
}); 


// // read from file 
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true); 
  var filename = "." + q.pathname; 
  
  fs.readFile(filename, function(err, data) {
   

    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log("http://localhost:8080/file1.html")
console.log("OR")
console.log("http://localhost:8080/file2.html")