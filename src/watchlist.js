import React from "react";
import RecommendedCard from "./RecommendedCard";
export default function Watchlist(){
  // { console.log(localStorage['films'])}
    const ls_films='['+localStorage['films']+']'
    const films=JSON.parse(ls_films);
    console.log(films)
    return<div className="watch-list">

  
    <h1 className="page-header all-page-header">Watch list</h1>
    <div   className="recommended-all-container">

   { films.map((item)=>{
        // console.log(item)
        
        // const key=item.id
       return(<RecommendedCard
            film={item}
            image={`https://www.themoviedb.org/t/p/w1280/${item.poster_path}`}

            />)
       // film={item}
        // image={`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`}
    
    })}
     
       
    </div>
        
    </div>

}
