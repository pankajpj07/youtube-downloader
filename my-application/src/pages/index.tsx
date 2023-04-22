import React from "react";
import Download from "../components/download";
import Header from "../components/header";
import HowToDownload from "../components/howtodownload";
import Specs from "../components/specs";
import Footer from "../components/footer";

export default function Home() {
  
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