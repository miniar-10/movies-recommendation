import React,{useState}  from "react";
import genres from'../genres.json';
import styled from "styled-components";
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
    return<CARD className="movie_card" id={props.film.theme}>
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
             

                </CARD> 
          
                
                    
    }
 
  const CARD=styled.div`
     position: relative;
        display: block;
        width: 15vw;
        height: 300px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 4px;
        transition: all 0.8s;
        text-align: left;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.05);
        margin-right: 8px;

        &:hover .recommended-img-div::after{
    display: block;
  }
  @media screen and (min-width: 768px){
.movie_header {
    width: 60%;
}
}
.info_section h4{
  width: 90%;
  font-weight: 300;
  white-space: initial;
font-size: larger;
  word-wrap: break-word;

  font-size: 1.2rem;

}
     .info_section {
      position: relative;
      /* width: 100%; */
      height: 100%;
      /* top: 40%; */
      background-blend-mode: multiply;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      z-index: 6;
      padding:  1rem 1rem;
      /* border-radius: 10px; */
      bottom: 10px;
      display: none;
        /* border-radius: 10px; */
    }
    &:hover .info_section{
        display: flex;
    }
    .recommended-img-div{
      position: absolute;
      width:15vw;
      height: 100%;

      /* z-index: ; */
     
    }
    .info_section .rate{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;
    }
    .add-rate i{
      color:#bab3b3;
    }
    .recommended-img-div::after{
      position: absolute;
      content: '';
      background-color: #0000007d;
      z-index: 4;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: none;
    
    }
    .recommended-card-img{
      position: absolute;
      width:15vw;
      height: 100%;
      z-index: 0;
    }

 
    

 .info_section .minutes {
    display: inline-block;
    margin-top: 10px;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.13);
}
      .type{
        /* display: inline-block; */
        color: #cee4fd;
        /* width: 80%; */
        /* margin-left: 5%; */
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        width: 100%;

      }
      .type span{
        font-size: small;
        margin-right: 10px;
        overflow: hidden;
  /* white-space: initial; */
  text-overflow: ellipsis;


        /* word-wrap:break-word; */

      }
    
    
    .movie_desc{
      padding: 25px;
      height: 50%;
    
    }
    .movie_social{
      height: 10%;
      padding-left: 15px;
      padding-bottom: 20px;
     
  }

 .info_section .movie_social ul {
    list-style: none;
    padding: 0;
}
 
 .info_section .movie_social ul li {
    display: inline-block;
    color: rgba(255, 255, 255, 0.4);
    transition: color 0.8s;
    /* transition-delay: 0.15s; */
    margin: 0 10px;
}
 .info_section .movie_social ul li i {
    font-size: 19px;
    cursor: pointer;
}

@media screen and (min-width: 768px) {
  .movie_header{
    width: 60%;
  }
  
  .movie_desc{
    width: 50%;
  }
  
  
  
  .blur_back{
    width: 80%;
    background-position: -100% 10% !important;  
  }
}
.info_section h4 {
    color: #fff;
    font-weight: 400;
}
.watch-list-btn{
  background-color: transparent;
  width: 98%;
  border-radius: 3px;

  /* margin:5px; */
  align-self: center;
}
.watch-list-btn:hover{
  background-color: rgba(47, 47, 47,.9);
}
.read-more-btn{
  border-radius: 3px;
  background-color: rgba(255, 0, 0,.8);
  width: 98%;
  margin:5px 0;
  font-size: .9rem;

  align-self: center;

}
.read-more-btn:hover{
  background-color: rgba(255, 0, 0,1);

}
button{
  cursor: pointer;
  font-size: .9rem;

}
@media (max-width:800px) {
    height: 200px;

  .info_section .rate,.type,.watch-list-btn{
    display: none;
  }
  
  
   img{
    height: 100%;
  }
   h4{
    font-size: .8em;
    font-weight: 600;
  }
  
}
@media (max-width:560px) {
    height: 150px;

  .info_section .rate,.type,.watch-list-btn{
    display: none;
  }
  
  

 .read-more-btn{
  font-size: .7rem;
  margin:1px 0;
  ;

 }
  .info_section{
  padding: .2em
 }
}

  `


