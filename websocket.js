import { WebSocketServer } from "ws";
import { randomBytes } from "crypto";
import { v4 as uuidv4 } from 'uuid';
export const startWebsocket = async (server) => {
  try {
    const wss = new WebSocketServer({ server });
    wss.on("connection", async (ws) => {
      console.log("Kullanıcı bağlandı..");

      setInterval(() => {
        ws.send(JSON.stringify({ label: generateRandomString() }));
      }, 2000);
      ws.on("message", async (message) => {
        let messageStr = message.toString();
        let data = JSON.parse(messageStr);
      });

      ws.on("close", async () => {});

      ws.on("error", async (err) => {
        console.error("WebSocket hatası:aa", err);
      });
    });
  } catch (error) {}
};

function generateRandomString() {
  return uuidv4();
}