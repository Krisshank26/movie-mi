import "../App.css" ; 
import React, {useState, useEffect, useContext } from 'react' ; 
import MovieCard from "./MovieCard" ; 
import axios from "axios" ; 
import Banner from "./Banner" ; 
import {contextWatchlist } from "./contextWatchlist" ; 
import {contextMoviePage } from "./contextBannerPage" ; 
import { API_KEY } from "../config.js";

function Movies() 
{ 
    const {page, setPage }= useContext(contextMoviePage ) ; 
    const [movies, setMovie ]= useState(null ) ; 
    const [loading, setLoading ]= useState(true ) ; 
    let pgP= false ; 
    let pne= false ; 
    function previous() 
    { 
        if((page )> 1 ) 
        { 
            setPage((pga )=> pga- 1 ) ; 
        } 
        else 
        { 
            pgP= true ; 
        } 
    } 
    function nxp() 
    { 
        if((page )< 500 ) 
        { 
            setPage((pae )=> pae+ 1 ) ; 
        } 
        else 
        { 
            pne= true ; 
        } 
    } 
    function stoMov(mv ) 
    { 
        localStorage.setItem(mv.original_title, mv ) ; 
        console.log(mv ) ; 
    } 
    useEffect(()=> 
    { 
        let movieData= axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page }` ).then(function(response ) 
        { 
            console.log(response ) ; 
            setMovie(response.data.results ) ; 
            setLoading(false ) ; 
        } ).catch(function(err ) 
        { 
            console.log("Less Call Data", err ) ; 
        } ) ; 
    }, [page ] ) ; 
    return ( 
        <div > 
            {console.log("Here" ) } 
            <div className= "text-2xl font-bold text-center m-5" > 
                Trending Movies 
            </div> 
            <div className= "flex justify-evenly flex-wrap gap-8" > 
                {loading== true?(<div>Loading </div> ): movies.map((moviesObj, index )=> 
                ( 
                    <MovieCard moviesObj= {moviesObj } ele= {index } /> 
                ) ) } 
            </div> 
            <div className= "bg-cyan-500 flex justify-center text-5xl" > 
                <button className= "text-[23px] m-2 border-4 " onClick= {previous } disabled= {pgP } >&lt;&lt; Page </button> 
                <p className= "text-[30px] m-3 pl-2 pr-2 " >{page } </p> 
                <button className= "text-[23px] m-2 border-4 " onClick= {nxp } disabled= {pne } >Page &gt;&gt; </button> 
            </div> 
        </div> 
    ) ; 
} 
export default Movies ; 