import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.port || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/*', (_req, res) => {
  res.sendFile(join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => console.log(`Server has started on http://localhost:${PORT}`));
