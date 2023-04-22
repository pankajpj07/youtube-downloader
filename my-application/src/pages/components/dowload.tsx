import React, { useState, useEffect } from "react";
import download from 'downloadjs';
import { getTitle, getVideoID } from "../utilities/format-youtube-utilities";
import Button from "./Button";



export default function Download() {
  const [url, setUrl] = useState<string>("");
  const [ info, setInfo ] = useState<string>('');
  
  const handleMp4 = async () => {
    const videoID = getVideoID(url);
    setInfo("Processing the video...");
    if(videoID){
      const title = await getTitle(videoID);
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url,type:"mp4"})
        };
        fetch(`/api/youtube`, requestOptions)
        .then( res => res.blob() )
        .then( blob => {
          const sizeInBytes = blob.size;
          console.log('sizeInBytes: ', sizeInBytes);
          if(sizeInBytes <=0){
            setInfo("Unable to download! Maybe File size is too high. Try to download video less than 5MB");
          }else{
            download(blob,`${title}.mp4`,"video/mp4");
            setInfo("Ready for download!");
          }
        });
      }
      catch(err){
        setInfo("Unable to download! Maybe File size is too high. Try to download video less than 5MB");
      }
    }else{
      setInfo("Invalid URL");
    }
    
  }
  
  const handleMp3 = async () => {
    const videoID = getVideoID(url);
    setInfo("Processing the video...");
    if(videoID){
      const title = await getTitle(videoID);
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url,type:"mp3"})
        };
        fetch(`/api/youtube`, requestOptions)
        .then( res => res.blob() )
        .then( blob => {
          const sizeInBytes = blob.size;
          console.log('sizeInBytes: ', sizeInBytes);
          if(sizeInBytes<=0){
            setInfo("Unable to download! Maybe File size is too high. Try to download video less than 5MB");
          }else{
            download(blob,`${title}.mp3`,"audio/mpeg");
            setInfo("Ready for download!");
          }
        });
      }
      catch(err){
        console.log('err: ', err);
      }
    }else{
      setInfo("Invalid URL");
    }
  }

  return (
    <div className="bg-gray-100 px-4">
      <div className="py-16 md:pt-24 w-full">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 relative top-1/4">
          <h1 className="text-2xl md:text-4xl flex justify-center font-bold">FREE <span className="text-red-700">&nbsp;YOUTUBE</span>&nbsp;DOWNLOADER </h1>
          <h2 className="text-xs py-1 flex justify-center"> Sample video link : https://youtu.be/videoID </h2>
          <div className=" overflow-hidden shadow-sm sm:rounded-lg w-full">
            <div className="p-6 border-b border-gray-200 flex justify-center w-full">
              <div className="flex w-full md:w-4/5">
                <input
                    type="text"
                    className="border-2 m-1.5 border-gray-300 p-2 w-full"
                    name="title"
                    id="title"
                    value={url}
                    onChange={(e)=>{
                      setInfo(null);
                      setUrl(e.target.value)}
                    }
                    placeholder="Paste the valid youtube link"
                    required
                ></input>
              </div>
            </div>
            <div className="p-3 flex w-full justify-center">
            <Button title={'Download mp3'} onClickFn={handleMp3}/>
            <Button title={'Download mp4'} onClickFn={handleMp4}/>
            </div>
          </div>
          { info && <h3 className="flex justify-center p-3 m-1.5 "> {info} </h3>}
        </div>
      </div>
    </div>
  );
}