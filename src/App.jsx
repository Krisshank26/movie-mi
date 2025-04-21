import React, { useState, useEffect, lazy, Suspense, useRef } from 'react' ; 
import reactLogo from './assets/react.svg' ; 
import viteLogo from '/vite.svg' ; 
import './App.css' ; 
import Navbar from "./components/Navbar" ; 
import Movie_Update from "./components/Movie_Update" ; 
import Movies from "./components/Movies" ; 
import Watchlist from "./components/Watchlist" ; 
import RecommendList from "./components/RecommendList" ; 
import Banner from "./components/Banner" ; 
import {BrowserRouter, Routes, Route } from "react-router" ; 
import {contextWatchlist } from "./components/contextWatchlist" ; 
import {contextMoviePage } from "./components/contextBannerPage" ; 


function App() { 
  /* const Movies= lazy(()=> import("./components/Movies" ) ) ; 
  console.log(Movies ) ; */ 
  const [page, setPage ]= useState(1 ) ; 
  console.log(page ) ; 
  const [count, setCount] = useState(0) ; 
  const [handleAddWatchlist, setAddWatchlist ]= useState([] ) ; 
  const cou= useRef(0 ) ; 
  let htd= document.querySelector("html" ) ; 
  htd.className= "bg-blue-300 " ; 
  console.log((JSON.parse(localStorage.getItem("handleWatchlist" ) ) ) ) ; 
  if(JSON.parse(localStorage.getItem("handleWatchlist" ) )!= null && cou.current== 0 ) 
  { 
    setAddWatchlist(JSON.parse(localStorage.getItem("handleWatchlist" ) ) ) ; 
    cou.current= 1 ; 
  } 

  return ( 
    <> 
    <contextWatchlist.Provider value= {{handleAddWatchlist, setAddWatchlist } } > 
      <Suspense fallback= {<h1>Loading... </h1> } > 
      <BrowserRouter > 
        <Navbar /> 
        <Routes> 
          <Route path="/" element= {<><contextMoviePage.Provider value= {{page, setPage } } > <Banner /> <Movies /> </contextMoviePage.Provider > </> }/> 
          <Route path="/watchlist" element= {<Watchlist /> } /> 
          <Route path="/recommendList" element= {<RecommendList /> } /> 
        </Routes> 
      </BrowserRouter> 
      </Suspense > 
      </contextWatchlist.Provider > 
    </> 
  ) 
} 

export default App ; 
