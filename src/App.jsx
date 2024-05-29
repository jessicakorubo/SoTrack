import { useEffect, useState } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Register from "./Components/Register/Register";
import Gallery from "./Components/Gallery/Gallery";
import './App.css';


function App() {
 let heroData = [
  {text1: "So-track,", text2: "your way to confidence!" },
  {text1: "Give into your", text2: "driving passsions" },
  {text1: "Want to be a pro?", text2: "Let so-track lead you!" },

 ]

 const [heroCount, setHeroCount ] = useState(1);
 const [playStatus, setPlayStatus]= useState(false);

 useEffect(()=> {
  setInterval(() => {
    setHeroCount((count)=> {return count===2?0:count+1})
  }, 3000);
 }, [])

  return (
    <div className="app">
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} 
        heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}
      />
      <About/>
      <Services />
      <Register />
      <Gallery />
    </div>
  )
}

export default App
