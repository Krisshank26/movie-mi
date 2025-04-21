import React, {useEffect, useState, useContext, useRef } from 'react' ; 
import MovieCard from "./MovieCard" ; 
import {contextWatchlist } from "./contextWatchlist" ; 
function Watchlist() 
{ 
    const watchlist= useContext(contextWatchlist ) ; 
    const handleWatchlist= watchlist.handleAddWatchlist ; 
    const setWatchlist= watchlist.setAddWatchlist ; 
    const [tet, setLine ]= useState("" ) ; 
    const rate= useRef(true ) ; 
    console.log((JSON.parse(localStorage.getItem("handleWatchlist" ) ) ) ) ; 
    localStorage.setItem("handleWatchlist", (JSON.stringify(handleWatchlist ) ) ) ; 
    let genreids= { 
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",
    } 
    const [genresel, setgenre ]= useState(['All Genres' ] ) ; 
    const [genreState, setStategenre ]= useState(false ) ; 
    function takeMovieWatchlist(movies, ele ) 
    { 
        let lis= [...handleWatchlist ] ; 
        let mv ; 
        for(let i= 0 ; i< handleWatchlist.length ; ++i ) 
        { 
            if(movies.id== lis[i].id ) 
            { 
                mv= lis.splice(i, 1 ) ; 
                break ; 
            } 
        } 
        console.log(lis ) ; 
        genreMovie(lis ) ; 
        console.log(mv ) ; 
    } 
    function handleGenres(movies ) 
    { 
        if(genreState== true ) 
        { 
            handleListGenre() ; 
            setStategenre(false ) ; 
        } 
        else 
        { 
            let ls= [] ; 
            ls= [movies ] ; 
            setgenre(ls ) ; 
            setStategenre(true ) ; 
        } 
    } 
    function rateMovies() 
    { 
        console.log("Here" ) ; 
        let ls= [] ; 
        ls= handleWatchlist.map((moviesObj )=> 
        { 
            return moviesObj.vote_average ; 
        } ) ; 
        ls.sort() ; 
        if(rate.current== false ) 
        { 
            ls.reverse() ; 
        } 
        let la= [...handleWatchlist ] ; 
        console.log(ls ) ; 
        let lsa= [] ; 
        lsa= ls.map((moviesObj )=> 
        { 
            console.log("Is" ) ; 
            for(let i= 0 ; i< la.length ; ++i ) 
            { 
                if(moviesObj== (la[i].vote_average ) ) 
                { 
                    let movieObj= la[i] ; 
                    la.splice(i, 1 ) ; 
                    console.log(movieObj ) ; 
                    return movieObj ; 
                } 
            } 
        } ) ; 
        console.log(lsa ) ; 
        setWatchlist(lsa ) ; 
    } 
    function handleListGenre() 
    { 
        let ls= [] ; 
        ls= handleWatchlist.map((movies )=> 
        { 
            return genreids[movies.genre_ids[0] ] ; 
        } ) ; 
        ls= new Set(ls ) ; 
        ls= [...ls ] ; 
        ls= ls.sort() ; 
        ls= ['All Genres ', ...ls ] ; 
        setgenre(ls ) ; 
    } 
    function genreMovie(lis ) 
    { 
        let ls= [...genresel ] ; 
        ls= lis.map((movie )=> 
        { 
            return genreids[movie.genre_ids[0] ] ; 
        } ) 
        ls= new Set(ls ) ; 
        ls= [...ls ] ; 
        ls= ls.sort() ; 
        let lsa= [] ; 
        for(let i= 0 ; i< ls.length ; ++i ) 
        { 
            for(let j= 0 ; j< lis.length ; ++j ) 
            { 
                if(ls[i]== genreids[lis[j].genre_ids[0 ] ] ) 
                { 
                    lsa.push(lis[j ] ) ; 
                } 
            } 
        } 
        ls= ['All Genres ', ...ls ] ; 
        setgenre(ls ) ; 
        setWatchlist(lsa ) ; 
        console.log(ls ) ; 
    } ; 
    useEffect(()=> {genreMovie(handleWatchlist ) }, [] ) ; 
    return ( 
        <> 
        <div > 
            <div className= "flex justify-center m-4" > 
                {genresel.map((movies, index )=> ( 
                    <div key= {index } onClick= {()=> {handleGenres(movies ) } } className= "mx-4 flex justify-center items-center bg-blue-500 h-[3rem] w-[9rem] text-white font-bold border rounded-xl" >{movies } </div > 
                ) ) } 
            </div> 
            <div className= "flex justify-center my-10" > 
                <input style={{display: (handleWatchlist.length> 0 )? "initial": "none" } } type= "text" placeholder= "Search" className= "h-3[rem] w-[18rem] bg-gray-200 px-4 outline-none broder border-border-slate-600" onChange= {(e )=> {setLine(((((e.target ).value ).trim() ).toLowerCase() ) ) } } /> 
            </div > 
            {handleWatchlist.length== 0? (<h3 className= "flex justify-center items-center font-extrabold text-[30px] ">Click on any Movie in the "Movies" and add it!!</h3> ): ( <div className= "m-8" > 
                <table className= "w-full text-center " > 
                <thead className= "border border-gray-200 rounded-lg bg-sky-800 " > 
                    <tr > 
                        <th className= "text-orange-300 " >Name </th> 
                        <th > 
                            <p className= "text-orange-300 " onClick= {()=> {rate.current= false ; rateMovies() ; } } >&uarr; </p> 
                            <p className= "text-orange-300 " >Ratings </p> 
                            <p className= "text-orange-300 " onClick= {()=> {rate.current= true ; rateMovies() ; } } >&darr; </p> 
                        </th> 
                        <th className= "text-orange-300 " >Popularity </th> 
                        <th className= "text-orange-300 " >Genre </th> 
                        <th className= "text-orange-300 " >Delete Movies </th> 
                    </tr> 
                </thead > 
                <tbody > 
                { handleWatchlist.map((moviesObj, index )=> 
                ( 
                    (((tet== "" ) || (((moviesObj.original_title ).substring(0, ((tet.length> ((moviesObj.original_title ).length ) )? 0: (tet.length ) ) ).toLowerCase() )== tet ) ) && ((genresel.length== 1 && genresel[0]== 'All Genres ' ) || (genresel.length== 1 && genresel[0]== genreids[moviesObj.genre_ids[0] ] ) || (genresel.length> 1 ) ) )? (<tr key= {index } className= "border-b-2" > 
                            <td className= "flex items-center px-6 py-4" ><img className= "h-[6rem] w-[10rem]" src= {`https://image.tmdb.org/t/p/original${moviesObj.backdrop_path }` } /> <div className= "mx-10" >{moviesObj.original_title } </div > </td> 
                            <td >{moviesObj.vote_average } </td> 
                            <td >{moviesObj.popularity } </td> 
                            <td >{genreids[moviesObj.genre_ids[0] ] } </td> 
                            <td className= "text-red-500" onClick= {()=> {takeMovieWatchlist(moviesObj, index ) } } >Delete </td> 
                        </tr> ): (<></> ) 
                ) ) } 
                </tbody > 
                </table > 
                <h3 className= "flex justify-center items-center font-extrabold text-[25px] " >Click on any Movie in the "Movies" and add more!! </h3> 
                </div > ) } 
        </div> 
        </> 
    ) ; 
} 

export default Watchlist ; 