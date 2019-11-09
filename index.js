const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 80;

const app = express();
const httpServer = http.createServer(app);
const io = socketio(httpServer);

let rps = 0;
let updateInterval = setInterval(() => {
	io.emit("rps", rps);
	rps = 0;
}, 1350);


app.disable('x-powered-by');

app.use((req, res, next) => {
	rps++;
	next();
});

app.use(express.static('static'));
app.use(express.urlencoded({'extended': true}));
app.use(express.json());

app.use((req, res, next) => {
	res.status(404).end("404 - Bu ne la.");
});

app.use((err, req, res, next) => {
	res.status(500).end("500 - Noluyo mk.");
});

httpServer.listen(port, host, (err) => {
	if(err) throw err;
	console.log(`Layer7 başlatıldı! : http://${host}:${port}`);
});