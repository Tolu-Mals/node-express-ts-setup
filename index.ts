import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.get('/', (_req, res) => {
  res.send("<h1>Express + TypeScript ⚡️ Server is running</h1>")
});

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
