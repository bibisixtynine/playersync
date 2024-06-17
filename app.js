import express from 'express';
import http from 'http';
import cors from 'cors';
import playersync  from 'playersync';

const PORT = process.env.PORT || 3000;

console.log('💫🚀 Playersync-Server V12 Starting ...')

const app = express();
const server = http.createServer(app);
app.use(express.json());

app.use(cors({
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200 
}));

playersync(app);

server.listen(PORT);

console.log(' -> ✅ ePlayersync-Server Listening on: ' + PORT);
