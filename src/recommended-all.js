import React,{ useContext} from "react";
import  RecommendedCard from './RecommendedCard'
import { RecommendedContext } from "./RecommendedContext";
import'./recommended.css'
export default function RecommendedAll(){
    const recommendedFilms=useContext(RecommendedContext);
   
    function get_image(film){
       
        if(film.poster_path!==null && film.poster_path!==undefined){
            return (`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`)
        }
         return 'not found'
        }
        
 

   
    return<div className="recommended">
            <h1 className="page-header all-page-header">recommended for you:</h1>
    <div   className="recommended-all-container">

            {/* <div className=""> */}
               { recommendedFilms.map((item)=>{
                const key=item.id

                 const img=get_image(item)
                 if(img!=='not found'){
                    return(<RecommendedCard
                    film={item}
                    image={img}

                    />)
                }})}
            
            </div>
    </div>
    }
