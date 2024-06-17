import express from 'express';
import playersync  from 'playersync';
console.log('💫🚀 playersync started...');

const app = express();
app.use(express.json());

playersync(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`  -> ✅ Server listening at port ${PORT}`));
