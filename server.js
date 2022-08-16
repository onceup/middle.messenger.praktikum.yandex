/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');

const PORT = process.env.port || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => console.log(`Server has started on http://localhost:${PORT}`));
