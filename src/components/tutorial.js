import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom'
// import './tutorial.css'
import styled from "styled-components";
import Loading from "./loading";

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

    return film? <TUTORIAL className="tutorial-container">
        
   

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
            </TUTORIAL> :<Loading/>
}
const TUTORIAL=styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0;
    padding:3rem 3rem 0;
    text-align: left;
.tuto-img{
    width:30vw;
    height: 100%;margin:0;
    border-radius: 3px;
}
 .informations{
    padding:0 3rem;
    line-height: 2rem;
}
span{
margin-right: 16px;
}
 h3{
    font-weight: 200;
}
.tuto-release-date{
    font-weight: 200;
    color:aliceblue;
    margin-left: 1.2rem;
}
.tuto-vote-avg{
    margin-left: 1.2rem;

}
.fa-start-o:before{
    color:#f00;
}
 h1{
    margin-bottom: 0.2rem;
    font-weight: 400;
    line-height: 3.4rem;;
    font-size: 3rem;
}

 h1 span{
    font-size: 1.6rem;
}
 h3{
    margin-bottom: 1.2rem;
    margin-bottom: .8rem;

}

 .current-rate{
    margin-bottom: 1.2rem;
    margin-bottom: .8rem;

}
.film-elt{
    margin-bottom: .8rem;

}
.fa-star ,.fa-star-half,.fa-star-o{
    color :var(--secondary-color);
    transform: scale(1.2);
    margin:4px
}
`