import React, { useState } from 'react'
import download from 'downloadjs'
import { getVideoID } from '../utilities/format-youtube-utilities'
import Button from './Button'
import featureToggles from '../../config/featureToggle'

export default function Download() {
  const [url, setUrl] = useState<string>('')
  const [info, setInfo] = useState<string>('')

  const handleDownload = async (mediaType: string = 'mp3') => {
    const videoID = getVideoID(url)
    const fileType =
      mediaType === 'mp3'
        ? 'audio/mpeg'
        : mediaType === 'mp4'
        ? 'video/mp4'
        : ''
    const fileName = mediaType === 'mp3' ? 'audio.mp3' : 'video.mp4'
    setInfo(`Processing the ${mediaType === 'mp3' ? 'audio' : 'video'}...`)

    if (videoID) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, type: mediaType }),
      }

      try {
        const res = await fetch(`/api/youtube`, requestOptions)
        const blob = await res.blob()
        // if fileType is not as expected or response is not correct
        if (blob.type !== fileType || blob?.size <= 0 || !res.ok) {
          throw new Error('Oops! Some error occured. Please Try again')
        }
        download(blob, fileName, blob?.type)
        setInfo('File downloaded successfully!')

        console.log('blob', blob)
        console.log('size in KBs: ', blob?.size / 1000)
      } catch (err) {
        console.log('err: ', err)
        setInfo('Some Error occured!!')
        alert(err)
      }
    } else {
      setInfo('Invalid URL')
    }
  }

  return (
    <div className="bg-gray-100 px-4">
      <div className="py-16 md:pt-24 w-full">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 relative top-1/4">
          <h1 className="text-2xl md:text-4xl flex justify-center font-bold">
            FREE <span className="text-red-700">&nbsp;YOUTUBE</span>
            &nbsp;DOWNLOADER{' '}
          </h1>
          <span className="text-xs py-1 flex justify-center">
            {' '}
            Sample video link : https://youtu.be/videoID{' '}
          </span>
          <div className=" overflow-hidden shadow-sm sm:rounded-lg w-full">
            <div className="p-6 border-b border-gray-200 flex justify-center w-full">
              <div className="flex w-full md:w-4/5">
                <input
                  type="text"
                  className="border-2 m-1.5 border-gray-300 p-2 w-full"
                  name="title"
                  id="title"
                  value={url}
                  onChange={(e) => {
                    setInfo('')
                    setUrl(e.target.value)
                  }}
                  placeholder="Paste the valid youtube link"
                  required
                ></input>
              </div>
            </div>
            <div className="p-3 flex w-full justify-center">
              {featureToggles.isEnableMP3 && (
                <Button
                  title={'Download mp3'}
                  onClickFn={() => handleDownload('mp3')}
                />
              )}
              {featureToggles.isEnableMP4 && (
                <Button
                  title={'Download mp4'}
                  onClickFn={() => handleDownload('mp4')}
                />
              )}
            </div>
          </div>
          {info && <h3 className="flex justify-center p-3 m-1.5 "> {info} </h3>}
        </div>
      </div>
    </div>
  )
}
