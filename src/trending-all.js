import React,{useState ,useEffect,useContext} from "react";
import { TrendingContext } from "./context/trendingContext";
import  RecommendedCard from './components/RecommendedCard'
// import'./recommended.css'
import styled from "styled-components";
export default function TrendingAll(){

    const trending= useContext(TrendingContext)
    function get_image(film){
        // if(film.backdrop_path!==null&& film.backdrop_path!==undefined){
        //     // console.log(film.backdrop_path)
        
        //     return(`https://www.themoviedb.org/t/p/w1280/${film.backdrop_path}`)
        // }else 
        if(film.poster_path!==null && film.poster_path!==undefined){
            return (`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`)
        }
         return 'not found'
        }
        
 

   
    return<TRENDING className="recommended">
            <h1 className="page-header all-page-header">Trending this week</h1>
    <div   className="recommended-all-container">

            {/* <div className=""> */}
               { trending.map((item)=>{
                const key=item.id
                 const img=get_image(item)
                 if(img!=='not found'){
                    return(<RecommendedCard
                    film={item}
                    image={img}

                    />)
                }})}
            
            </div>
    </TRENDING>
    }
    const TRENDING=styled.div`
    .recommended-all-container{
  display: grid;
  grid-template-columns: repeat(4 ,16vw);
  justify-content: center;
  grid-gap: 24px;
}
h1{
    margin-bottom: 16px;
}
.all-page-header{
text-align: center!important;
}
    `
