import React,{useContext} from "react";
import  RecommendedCard from './RecommendedCard'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import'./recommended.css'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RecommendedContext } from "../context/RecommendedContext";


export default function Recommended(){    
    const recommendedFilms =useContext(RecommendedContext)
    function get_image(film){
        if(film.poster_path!==null && film.poster_path!==undefined){
            return (`https://www.themoviedb.org/t/p/w1280/${film.poster_path}`)
        }
         return 'not found'
        }
        
    function SampleNextArrow(props){
        const {onClick}=props;
        return <div className="ctrl-btn" onClick={onClick}>
        <button className="next">
            <i className="fa fa-chevron-right"></i>
        </button>
        
        </div>
        }
        function SamplePrevArrow(props){
            const {onClick}=props;
            return <div className="ctrl-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-chevron-left"></i>
            </button>
            
            </div>
            }
            const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 5,
                autoplay: true,
                nextArrow:<SampleNextArrow/>,
                prevArrow:<SamplePrevArrow/>
        
              };
   
    return<RECOMMENDED className="recommended">
            <h3 className="page-header">Recommended for you:</h3>
            {recommendedFilms?<div className="bord">
    <Slider {...settings}  className="recommended-container">

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
            
            </Slider>
            </div>:<h1>Loading ..</h1>}
            <div className="see-all">
            <Link to='/recommended'>View All</Link>
        </div>
    </RECOMMENDED>
    }
const RECOMMENDED=styled.div`
    padding:2.5%;
    width: 100%;
   
.see-all{
    /* width: 15vw; */
    display: flex;
    /* align-items: flex-end; */
    justify-content: right;
    margin: 1.5rem 1.2rem;
}
.see-all:hover a{
color: #f00;
}
`