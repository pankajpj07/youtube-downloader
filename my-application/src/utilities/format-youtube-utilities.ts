export const getVideoID = (url:string):string | undefined => {
    if(url.match(/watch/)){
      return url.split("/")[3].split("?")[1].split("=")[1];
    }else if(url.match(/youtu.be/)){
      return url.split("/")[3];
    }
    return undefined
  }
  