import React,{useState ,useContext} from "react";
import  RecommendedCard from './RecommendedCard'
import'./recommended.css'
import { UpcomingContext } from "./UpcomingContext";
export default function UpcomingAll(){
    const Upcoming=useContext(UpcomingContext)

    function get_image(film){
        
        if(film.poster_path!==null && film.poster_path!==undefined){
            return (`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`)
        }
         return 'not found'
        }
        
 

   
    return Upcoming?<div className="recommended">
            <h1 className="page-header all-page-header">Upcoming this week</h1>
    <div   className="recommended-all-container">

            {/* <div className=""> */}
               { Upcoming.map((item)=>{
                const key=item.id
                 const img=get_image(item)
                 if(img!=='not found'){
                    return(<RecommendedCard
                    film={item}
                    image={img}

                    />)
                }})}
            
            </div>
    </div>:<h1>Loading..</h1>
    }
