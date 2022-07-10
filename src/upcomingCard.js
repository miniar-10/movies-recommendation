import React from "react";
import genres from'./genres.json';
const genre=genres.genres;


function get_image(film){
    if(film.backdrop_path!==null&& film.backdrop_path!==undefined){
        // console.log(film.backdrop_path)
    
        return(`https://www.themoviedb.org/t/p/w1280/${film.backdrop_path}`)
    }else if(film.poster_path!==null && film.poster_path!==undefined){
        return (`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`)
    }
     return 'not found'
    }
    
    function get_genre(filmGenres){
        const myGenres=[]
        for(let g in filmGenres){
            // //console.log(g)
            genre.map((item)=>{
                if(item.id===filmGenres[g]){
                    //console.log(g)
                    myGenres.push(item.name);
                }
            })
        }
        return(myGenres)
    }

export default function UpcomingCard(props){
    const img=get_image(props.film)
    if(img!=='not found'){
        // console.log(img)
    const d=get_genre(props.film.genre_ids)
    return<div className="upcoming-card"  >
        
        <div className="upcoming-img" background={props.background}>
    
            <img className="upcoming-card-image" src={`https://www.themoviedb.org/t/p/w1280/${props.film.poster_path}`}></img>
        </div>
        <h4 className="upcoming-card-title">{props.film.original_title}</h4>
        <p className="upcoming-card-release">{props.film.release_date}</p>


    </div>
}
}