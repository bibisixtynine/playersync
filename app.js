import express from 'express';
import cors from 'cors';

import playersync  from 'playersync';
console.log('💫🚀 playersync started...');

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*', // Accepter les requêtes de n'importe quelle origine
    optionsSuccessStatus: 200 
}));

playersync(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`  -> ✅ Server listening at port ${PORT}`));
