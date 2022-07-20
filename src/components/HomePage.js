import React,{useState,useEffect} from "react";
import play_btn from '../images/play-button.png'
import styled from "styled-components";
export default function HomePage(props){
    return<HOMEPAGE className="homePage" >
    <div className="cover-image">

    <img className="home-img" style={props.style} src={props.item.cover} ></img >
    </div>
    

    <div className="details">
        <h1 >{props.item.name}</h1>
        <div className="rating flex">
            <div className="rate mr-16">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
            </div>
            <label className="mr-16">{props.item.rating}(Imdb)</label>
            <span>GP</span>
            <label>{props.time}</label>
        </div>
        <div className="description">
        <p>{props.item.desc}
        </p>
        <div className="cast">
            <h4>
                <span>Starring  :</span>
                {props.item.starring}
            </h4>
            <h4>
                <span>Genres :</span>
                {props.item.genres}
            </h4>
            <h4><span>Tags </span>{props.item.tags}</h4>
        </div>
        <button className="primary-btn play-now"><i className="fa fa-play"></i> PLAY NOW</button>
    </div>
</div>

    <div className="donnow">
    <img src={play_btn} className="watch-trailer-img"></img>WATCH TRAILER      
    </div>

    </HOMEPAGE>

}
const HOMEPAGE=styled.div`
    position: relative;
    .home-img {
    max-height: 100vh;
    min-height: 70vh;
   
    
}
.cover-image:after {
    background-image: linear-gradient(to right bottom,rgba(0,0,0,.7),rgba(0,0,0,.6),rgba(0,0,0,.5),rgba(0,0,0,.4),transparent);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
}
.details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top:0;
    padding: 1.5em 5em;
    width: 60%;
    z-index: 4;

}
.donnow{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 60%;
    top: 0;
    min-height: 100vh;
    width: 40%;
    z-index: 4;
padding-top: 10vh;
padding-right: 1.5em;
font-size: 1.2rem;
}
.details h1{
    font-size: 3.5rem;
    margin-bottom:1rem;
    margin-top: 0;
}
.fa-star ,.fa-star-half,.fa-star-o{
    color :var(--secondary-color);
    transform: scale(1.2);
    margin:4px
}
.rating{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    ;
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 20px;

}
.cast{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.cast h4{
    margin:0.7rem 0;
}
.rating span{
    background-color: #6c757d;
}
.cast span{
    color: var(--secondary-color);
}
.watch-trailer-img{
    margin:2rem;
    width: 6rem;
    height: 6rem;
}
.watch-trailer-img:hover{
    transform: scale(1.05);
}
.description{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}
.play-now{
    margin-top:15px;
    z-index: 2000;
}

`