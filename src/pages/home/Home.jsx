import React from "react";
import Banner from "./Banner";
import TopSeller from "./TopSeller";
import Recommend from "./recommend";
import News from "./News";


const Home = () =>{
  return (
    <>
      <Banner />
      <TopSeller/>
      <Recommend />
      <News />
    
    </>
  )
}

export default Home