import express from 'express';
import http from 'http';
import cors from 'cors';
import  playersync  from 'playersync';

const PORT = process.env.PORT || 3000;


const app = express();
const server = http.createServer(app);
app.use(express.json());

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 
}));

playersync(app);

server.listen(PORT);

console.log('💫🚀 Playersync-Server Listening on: ' + PORT);
