import express from 'express';
// import cors from 'cors';

import playersync  from 'playersync';

const app = express();
app.use(express.json());
/*app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}));*/

playersync(app);

const PORT = process.env.PORT || 3030;
app.listen(PORT);
console.log('Listening on: ' + PORT);
