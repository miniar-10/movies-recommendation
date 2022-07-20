import React,{ useContext} from "react";
import  RecommendedCard from './components/RecommendedCard'
import { RecommendedContext } from "./context/RecommendedContext";
// import'./recommended.css'
import styled from "styled-components";
export default function RecommendedAll(){
    const recommendedFilms=useContext(RecommendedContext);
   
    function get_image(film){
       
        if(film.poster_path!==null && film.poster_path!==undefined){
            return (`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`)
        }
         return 'not found'
        }
        
 

   
    return<RECOMMENDED className="recommended">
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
    </RECOMMENDED>
    }
const RECOMMENDED=styled.div`
.recommended-all-container{
  display: grid;
  grid-template-columns: repeat(4 ,16vw);
  justify-content: center;
  grid-gap: 24px;
}
.all-page-header{
text-align: center!important;
}
h1{
    margin-bottom: 16px;
}
`