// const ytdl = require("ytdl-core");
const ytdl = require('@distube/ytdl-core')
import { NextApiRequest, NextApiResponse } from 'next'
import logger from '../../../logs/logger'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const url = req.body.url
      const type = req.body.type
      logger.info(type, ' File requested to download')
      if (type === 'mp3') {
        res.setHeader('content-type', 'audio/mpeg')
        res.setHeader('Content-Disposition', `attachment; filename=audio.mp3`)
        const response = await ytdl(url, {
          format: 'mp3',
          filter: 'audioonly',
        })

        console.log('response', response)
        response.on('data', (chunk: Buffer) => {
          console.log('Received data chunk:', chunk.length)
          res.write(chunk)
        })
        response.on('end', () => {
          console.log('Finished receiving data')
          res.end()
        })
        response.on('error', (err: any) => {
          console.error('Error downloading video:', err)
          res.status(500).send('Internal Server Error')
        })
      } else if (type === 'mp4') {
        res.setHeader('content-type', 'video/mp4')
        const response = await ytdl(url, {
          filter: (format: any) => format.container === 'mp4',
        })

        response.on('error', (err: Error) => {
          console.error('Response error:', err)
          res.status(500).send('Internal Server Error')
        })

        response.on('data', (chunk: Buffer) => {
          res.write(chunk)
        })

        response.on('end', () => {
          res.end()
        })
      }
    } catch (err) {
      logger.error('Some error occured:', err)
      console.log('err: ', err)
    }
  } else {
    logger.error('Invalid Request by the user')
    res.status(400).json({ result: false })
  }
}

export const config = {
  api: {
    responseLimit: '50mb',
    externalResolver: true,
    bodyParser: {
      sizeLimit: '50mb',
    },
    // Increase the response timeout to 1 minute
    responseTimeout: 60000,
  },
}
