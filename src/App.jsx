import { useState } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


function App() {
 let heroData = [
  {text1: "Achieve your dreams", text2: "with us" },
  {text1: "Let our knowledge", text2: "take you places" },
  {text1: "Give into your", text2: "driving passsions" },

 ]

 const [heroCount, setHeroCount ] = useState(2);
 const [playStatus, setPlayStatus]= useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} 
        heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}
      />
    </div>
  )
}

export default App
