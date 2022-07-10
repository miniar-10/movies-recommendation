import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom'
// import genres from'./genres.json';
import './tutorial.css'
// const genre=genres.genres;

// function get_genre(filmGenres){
//     const myGenres=[]
//     for(let g in filmGenres){
//         // //console.log(g)
//         genre.map((item)=>{
//             if(item.id===filmGenres[g]){
//                 //console.log(g)
//                 myGenres.push(item.name);
//             }
//         })
//     }
//     return(myGenres)
// }

export default function Tutorial (){
    const { id } = useParams();
    const req=`https://api.themoviedb.org/3/movie/${id}?api_key=542f1dd0ab5fb5284db223dca8e27224&language=en-US&external_source=imdb_id`

    const[film,setFilm]=useState([{}]);

    const getFilm=async()=>{
        const resp=await fetch(req);
        const film_data=await resp.json();
        console.log(film_data)
         setFilm(film_data)
    }

    useEffect(()=>getFilm,[]);
    console.log(film.vote_average)
    const vote=film.vote_average?Math.trunc(film.vote_average):3;
    const cl=film.vote_average?Math.ceil(film.vote_average):3
    var rest=10-vote-(cl-vote)
    // const d=get_genre(film.genre_ids)
    // console.log(film.genres[0])

    return  <div className="tutorial-container">
        
   

                  <img className="tuto-img" src={`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`}></img>
                <div className="informations">
                    <h1 >{film.title}<span className="tuto-release-date">({film.release_date})</span></h1>
                    <h3>{film.tagline}</h3>
                    <div className="current-rate">
                        
                      {
                       [...Array(vote)].map((x,i)=>{
                        console.log(vote)
                        return<i class="fa fa-star"></i>}
                       )
                 
                      }

                      {
                        rest!==0&&vote<(film.vote_average)?<i class="fa fa-star-half"></i>:<span></span>
                      }
                       {
                       [...Array(rest)].map((x,i)=>{
                        console.log(vote)
                        return<i class="fa fa-star-o"></i>}
                       )
                 
                      }
                      
                      
                        {/* <span className='tuto-vote-avg'>{film.vote_average}</span> */}
                    </div>
                    <p className="film-elt">
                        <span>{film.original_language}</span>  <span  className="tuto-release-date">{film.runtime} min</span>
                    </p>
                    <p className="film-elt type">
                            {film.genres?film.genres.map((i)=>{
                                // console.log(i.name)
                                 return <span >{i.name}</span>}
                                 ):<span></span>
                                }
                    </p>
                    <h5 >overview :</h5>
                    <p className="film-description">
                            {film.overview}
                    </p>

                        </div> 
            </div> 
}