const ytdl = require("ytdl-core");
const fs = require("fs");
import { NextApiRequest, NextApiResponse } from "next";
import logger from "../../../logs/logger";
const urlParse = require("url-parse");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const url = req.body.url;
      const type = req.body.type;
      logger.info(type, " File requested to download");

      // const videoId = urlParse(url, true).query.v;
      // const info = await ytdl.getInfo(videoId);
      const title = 'random';

      if (type === "mp3") {
        res.setHeader("content-type", "audio/mpeg");
        res.setHeader(
          "content-disposition",
          `attachment; filename="${title.substring(0, 15)?.trim()}"`
        );
        const response = await ytdl(url, {
          format: "mp3",
          filter: "audioonly",
        });
        console.log("response",response)
        response.on('data', (chunk) => {
          res.write(chunk);
        });
        response.on('end', () => {
          res.end();
        });
      } else if (type === "mp4") {
        res.setHeader("content-type", "video/mp4");
        res.setHeader(
          "content-disposition",
          `attachment; filename="${title.substring(0, 15)?.trim()}"`
        );
        const response = await ytdl(url, { filter: format => format.container === 'mp4' })
        console.log("response",response)
        response.on('data', (chunk) => {
          res.write(chunk);
        });
        response.on('end', () => {
          res.end();
        });
        
      }
    } catch (err) {
      logger.error("Some error occured:", err);
      console.log("err: ", err);
    }
  } else {
    logger.error("Invalid Request by the user");
    res.status(400).json({ result: false });
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
};
