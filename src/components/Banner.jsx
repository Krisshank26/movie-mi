import React, {useEffect, useState, useContext } from 'react' ; 
import axios from "axios" ; 
import {contextMoviePage } from "./contextBannerPage" ; 
import { API_KEY } from '../config.js';
function Banner() 
{ 
    const {pga, setPage }= useContext(contextMoviePage ) ; 
    const [backgroundIma, setBackground ]= useState("https://image.tmdb.org/t/p/original/uKb22E0nlzr914bA9KyA5CVCOlV.jpg" ) ; 
    const [title, setTitle ]= useState("Wicked" ) ; 
    useEffect(function backgroundIm() 
    { 
        let pg= Math.floor((Math.random()* (500- 1 ) )+ 1 ) ; 
        console.log(pg ) ; 
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pg }` ).then(function(response ) 
        { 
            console.log(response ) ; 
            setBackground(`https://image.tmdb.org/t/p/original${response.data.results[2].backdrop_path } ` ) ; 
            setTitle(`${response.data.results[2].original_title } ` ) ; 
            console.log(backgroundIma ) ; 
        } ).catch(function(err ) 
        { 
            console.log("Less Call Image ", err ) ; 
        } ) ; 
    }, [pga ] ) 
    return ( 
        <div> 
            {console.log(backgroundIma ) } 
            <div className= "flex items-end h-[72vh] w-full bg-cover bg-center duration-200 hover:scale-102" style= {{backgroundImage: `url(${backgroundIma })`, } } > 
                <div className= "w-full text-center text-white text-[42px] font-[32px] bg-slate-800/42 rounded-lg" >{title } </div> 
            </div> 
        </div> 
    ) ; 
} 

export default Banner ; 