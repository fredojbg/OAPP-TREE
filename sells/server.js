var http = require("http"),
	fs = require("fs");



http.createServer(function(req, res) {
	fs.readFile("./views/layout/home.html", function(err,html){
		res.writeHead(200,{"Content-Type":"text/html"})
		res.write(html);
		res.end();
	});
}).listen(8080);