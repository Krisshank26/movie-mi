import React from "react" ; 
import Logo from "../assets/ChatGPT Image Apr 20, 2025, 11_03_32 PM.png" ; 
import "../index.css" ; 
import Movies from "./Movies" ; 
import RecommendList from "./RecommendList" ; 
import Watchlist from "./Watchlist" ; 
import {Link } from "react-router" ; 
function Navbar() 
{ 
    return ( 
        <div class="flex space-x-8 items-center pl-3 py-4 bg-green-300 " > 
            <Link to="/" ><img className= "w-[60px] h-[55px] " src= {Logo } /> </Link> 
            <Link to="/" className="text-black text-3xl font-bold" >Movies </Link> 
            <Link to="/watchlist" className="text-black text-3xl font-bold" >WatchList </Link> 
            <Link to="/recommendList" className="text-black text-3xl font-bold" >Recommend Movie </Link> 
        </div> 
    ) ; 
} 
export default Navbar ; 