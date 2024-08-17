import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
const App = () => {
  let heroData=[
    {text1:"Define",text2:"of Beauty"},
    {text1:"From vanity mirrors",text2:" to classically simple mirrors"},
    {text1:" Browse and buy ",text2:"from a wide range of mirrors"},
    {text1:"Discover a wide range ",text2:"of high-quality mirrors in Egypt"},
    {text1:"Biggest selection of",text2:"Mirrors in Egypt"},
  ]
  const [heroCount,setHeroCount]=useState(2);
  const [playStatus,setPlayStatus]=useState(false);

useEffect(()=>{
  setInterval(() => {
    setHeroCount((count)=>{return count===2?0:count+1})
  }, 4000);
},[])


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  );
}

export default App;
