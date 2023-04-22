export const ytApiKey= process.env.YTAPIKEY

export const getTitle = async (videoID:string) => {
    const youtubeAPI = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&fields=items(id%2Csnippet)&key=${ytApiKey}`;
    console.log("URL",youtubeAPI)
    let response = videoID && await fetch(youtubeAPI);
    const res = await response.json(); 
    if(res.code===200){
      const title  = res.items[0].snippet.title;
      return title;
    }
    return 'youtubeVid'
}

export const getVideoID = (url:string) => {
    if(url.match(/watch/)){
      const videoID = url.split("/")[3].split("?")[1].split("=")[1];
      return videoID;
    }else if(url.match(/youtu.be/)){
      const videoID = url!="" && url.split("/")[3];
      return videoID
    }
  }
  