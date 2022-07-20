import React from "react";

export default function TrendingCard(props){
    return<div className="trending-card">
        
        <img className="trending-card-image" src={`https://www.themoviedb.org/t/p/w1280/${props.film.poster_path}`}></img>
        <h2 className="trending-card-title">{props.film.original_title}</h2>
        

    </div>
}