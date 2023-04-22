import React, {useEffect } from "react";
import Download from "../components/download";
import Header from "../components/header";
import About from "../components/about";
import HowToDownload from "../components/howtodownload";
import Specs from "../components/specs";
import Footer from "../components/footer";

export default function Home() {
  
  useEffect(()=>{
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(err => console.error("Service worker registration failed", err))
    } else {
        console.log("Service worker not supported");
    }
  },[])
  

  return (
    <div>
      <Header/>
      <Download/>
      <HowToDownload/>
      <Specs/>
      <Footer/>
    </div>
  );
}