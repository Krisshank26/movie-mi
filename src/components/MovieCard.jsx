import React, {useContext } from 'react' ; 
import Movies from './Movies' ; 
import {contextWatchlist } from "./contextWatchlist" ; 

function MovieCard({moviesObj, ele } ) 
{ 
    const data= useContext(contextWatchlist ) ; 
    const handleAddWatchlist= data.handleAddWatchlist ; 
    const setWatchlist= data.setAddWatchlist ; 
    function addWatchlist() 
    { 
        let lis= [...handleAddWatchlist ] ; 
        let pr= true ; 
        for(let i= 0 ; i< handleAddWatchlist.length ; ++i ) 
        { 
            if(lis[i].id== moviesObj.id ) 
            { 
                pr= false ; 
                break ; 
            } 
        } 
        if(pr== true ) 
        { 
            lis.push(moviesObj ) ; 
        } 
        else 
        { 
            pr= false ; 
        } 
        setWatchlist(lis ) ; 
        console.log(lis ) ; 
    } 
    return ( 
        <div > 
            <div onClick= {addWatchlist } key= {ele } className= "h-[42vh] w-[272px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300" style= {{backgroundImage: `url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2${moviesObj.poster_path })`, } } > 
            <div className= "text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg" >{moviesObj.original_title } </div> 
            </div> 
        </div> 
    ) ; 
} 
export default MovieCard ; 