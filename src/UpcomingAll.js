import React,{useState ,useContext} from "react";
import Loading from "./components/loading";
import  RecommendedCard from './components/RecommendedCard'
// import'./recommended.css'
import styled from "styled-components";
import { UpcomingContext } from "./context/UpcomingContext";
export default function UpcomingAll(){
    const Upcoming=useContext(UpcomingContext)

    function get_image(film){
        
        if(film.poster_path!==null && film.poster_path!==undefined){
            return (`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`)
        }
         return 'not found'
        }
        
 

   
    return Upcoming?<UPCOMING className="recommended">
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
    </UPCOMING>:<Loading/>
    }
const UPCOMING=styled.div`
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