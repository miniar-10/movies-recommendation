import React,{useState}  from "react";
import genres from'./genres.json';
// import Link from 'react-router-dom'
import { Link } from 'react-router-dom'

// import Tutorial from "./tutorial";
const genre=genres.genres;


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

export default function RecommendedCard(props){
    const[filmsss,setFilm]=useState(null)
    const ReadHandle=(elt)=>{
        setFilm(elt)
        console.log(filmsss)
    }
    const[addedToWatchlist,setAddedToWatchlist]=useState(false);

    const handleClick=()=>{
        setAddedToWatchlist(!addedToWatchlist)
    }
    
    const d=get_genre(props.film.genre_ids)
//console.log(d[0])
    return<div className="movie_card" id={props.film.theme}>
                    <div className="recommended-img-div">
                        <img className="recommended-card-img" src={props.image}/>
                    </div>
                    <div className="info_section">
                        <div class="rate">
                            <div className="current-rate">
                                <i class="fa fa-star"></i>
                                <span>{props.film.vote_average}</span>
                            </div>
                            <div className="add-rate">
                                <i class="fa fa-star-o"></i>
                            </div>
                        </div>
                        <h4>{props.film.title}</h4>
                        {/* <span className="minutes">117 min</span> */}
                        <p className="type">
                            {d.map((i)=>{
                                 return <span >{i}</span>
                            })}
                        </p>
                        <button className="read-more-btn" ><Link to={`/tutorial/${props.film.id}`}>Read more</Link> </button>
                        <button onClick={handleClick} className="watch-list-btn">{(addedToWatchlist || localStorage.getItem(props.film.id))?'Remove from watchlist ': 'Add to watchlist'}</button>

                    </div>
             

                </div> 
          
                
                    
    }
 
  

