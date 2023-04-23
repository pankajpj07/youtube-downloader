export const getVideoID = (url:string) => {
    if(url.match(/watch/)){
      const videoID = url.split("/")[3].split("?")[1].split("=")[1];
      return videoID;
    }else if(url.match(/youtu.be/)){
      const videoID = url!="" && url.split("/")[3];
      return videoID
    }
  }
  