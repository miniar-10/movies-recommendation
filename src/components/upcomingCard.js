import React from "react";
import genres from'../genres.json';
import styled from "styled-components";
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
    return<UPCOMING_CARD className="upcoming-card"  >
        
        <div className="upcoming-img" background={props.background}>
    
            <img className="upcoming-card-image" src={`https://www.themoviedb.org/t/p/w1280/${props.film.poster_path}`}></img>
        </div>
        <h4 className="upcoming-card-title">{props.film.original_title}</h4>
        <p className="upcoming-card-release">{props.film.release_date}</p>


    </UPCOMING_CARD>
}
}
const UPCOMING_CARD=styled.div`
 width: 15vw;
    height: 300px;
    /* height: 400px; */
    position: relative;
    padding:3% 5%;
    background-color:var(--primary-color);
    /* color:var(--secondary-color); */
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
    border-radius: 3px;
    z-index: 1;
    transform: 0.5s;
    color: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .upcoming-card-image{
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    /* top:0; */
    z-index: 0;
}
.upcoming-card-title{
    position: absolute;
    top: 70%;
    /* left: 20px !important; */
    color: var(--white-50);
    width: 90%;
    /* font-size: .rem; */
    z-index: 4;
}
.upcoming-card-release{
    position: absolute;
    top:87%;
    left: 20px !important;;
    color: var(--white-50);
    width: 90%;
    z-index: 4;


}
.upcoming-img {
    height: 65%;
    position: absolute;
    width: 90%;
}
.upcoming-img:after {
    background-image: linear-gradient(to right bottom,rgba(0,0,0,.7),rgba(0,0,0,.6),rgba(0,0,0,.5),rgba(0,0,0,.4),transparent);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
}
&:hover{
    /* transform: scale(1.2); */
    z-index: 1000;
}
&:hover .upcoming-img:after{
    display: none;
}
`
