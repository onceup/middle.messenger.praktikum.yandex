const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, 'dist')));

router.get('/', function (_req: any, res: { sendFile: (string: any) => void; }) {
  res.sendFile(path.join(__dirname + 'dist/index.html'));
});

app.listen(process.env.port || 3000, () => console.log('Server has started'));
