import React, {useState, useRef } from "react" ; 
import Banner from "./Banner" ; 
import Movies from "./Movies" ; 

function Movie_Update() 
{ 
    const page= useRef(1 ) ; 
    return ( 
        <><Banner /> <Movies /> </> 
    ) 
} 
export default Movie_Update ; 