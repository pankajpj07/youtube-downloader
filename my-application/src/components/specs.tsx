import React from 'react'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import BuildIcon from '@mui/icons-material/Build'

const SPECIFICATIONS = [
  {
    icon: <LocalOfferIcon fontSize="large" className="self-center" />,
    title: 'Free download',
    description:
      'Convert and download YouTube videos as much as you want without limitation and always free.',
  },
  {
    icon: <ThumbUpIcon fontSize="large" className="self-center" />,
    title: 'Fast and easy to use',
    description:
      'Just paste the link or type in the search box to get ready to download.',
  },
  {
    icon: <BuildIcon fontSize="large" className="self-center" />,
    title: 'No registration required',
    description:
      'Our downloader is free and you can download any video without user registration.',
  },
  {
    icon: <CloudDownloadIcon fontSize="large" className="self-center" />,
    title: 'Best to download',
    description:
      'The conversion and download speed is extremely fast. You do not need to wait long to get the MP3 or MP4 files.',
  },
]

export default function Specs() {
  return (
    <div className="p-10 md:p-20 w-full md:w-8/12 md:m-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center place-content-center border-b border-b-gray-200">
      {SPECIFICATIONS.map((spec) => (
        <div className="flex flex-col text-center" key={spec.title}>
          {spec.icon}
          <div className="text-red-600 font-bold my-2 text-lg md:text-xl">
            {spec.title}
          </div>
          <div>{spec.description}</div>
        </div>
      ))}
    </div>
  )
}
