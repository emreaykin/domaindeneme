import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { startWebsocket } from "./websocket.js";

const app = express();

app.use(bodyParser.json({ limit: "2mb" }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hoşgeldin!' });
});
// GET endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Merhaba Dünya!' });
});

// POST endpoint
app.post('/api/goodbye', (req, res) => {
  res.json({ message: 'Güle güle!' });
});
const server = app.listen( async () => {
  console.log(`Uygulama http://localhost: çalışıyor `);
  
  startWebsocket(server);
});


