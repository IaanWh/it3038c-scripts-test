const http = require("http");
const fs = require("fs");
const os = require("os");
const ip = require('ip');
var seconds = os.uptime()
var minutes = seconds /60;
var hours = minutes /60;
var days = hours /24;
days = Math.floor(days);
seconds = Math.floor(seconds);
minutes = Math.floor(minutes);
hours = Math.floor(hours);
http.createServer((req, res) => {
if (req.url === "/") {
fs.readFile("./public/index.html", "UTF-8", (err, body) => {
res.writeHead(200, {"Content-Type": "text/html"});
res.end(body);
});
} {
myHostName=os.hostname();


html=`
<!DOCTYPE html>
<html>
<head>
<title>Node JS Response</title>
</head>
<body>
<p>Hostname: ${myHostName}</p>
<p>IP: ${ip.address()}</p>
<p>Server Uptime: Days:${days} , Hours:${hours} , Minutes: ${minutes} , Seconds: ${os.uptime()} </p>
<p>Total Memory: ${os.totalmem()/1000000} MB</p>
<p>Free Memory: ${os.freemem()/1000000} MB </p>
<p>Number of CPUs: ${os.cpus().length} </p>
</body>
</html>`
res.writeHead(200, {"Content-Type": "text/html"});
res.end(html);
} {

}
}).listen(8001);

console.log("Server listening on port 8001");
