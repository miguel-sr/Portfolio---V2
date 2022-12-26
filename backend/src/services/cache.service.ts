import { createClient } from "redis";
import type { RedisClientType } from "redis";
let redisClient: RedisClientType;
let isReady: boolean;

async function getCache(): Promise<RedisClientType> {
  if (!isReady) {
    redisClient = createClient();
    redisClient.on("error", (error: string) => {
      throw new Error(error);
    });
    redisClient.on("connect", () => {
      console.log("==> Connected to Redis!");
    });
    redisClient.on("ready", () => {
      isReady = true;
    });
    await redisClient.connect();
  }
  return redisClient;
}

getCache()
  .then((connection) => {
    redisClient = connection;
  })
  .catch((error) => {
    throw new Error("==> Failed to connect to Redis!" + error);
  });

export default getCache;
