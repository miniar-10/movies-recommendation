import React,{useState,useEffect} from "react";
import play_btn from './images/play-button.png'
export default function HomePage(props){
    return<div className="homePage" >
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

    </div>

}