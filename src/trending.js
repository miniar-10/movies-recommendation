import React,{useContext} from "react";

// import trending_films from'./films.json';
// import UpcomingCard from "./upcomingCard";
import TrendingCard from "./trendingCard";
import'./trending.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RecommendedCard from "./RecommendedCard";
import{Link} from 'react-router-dom'
import { TrendingContext } from "./trendingContext";

export default function Trending(){
   const trending=useContext(TrendingContext)
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
                slidesToScroll: 6,
                autoplay: true,
                nextArrow:<SampleNextArrow/>,
                prevArrow:<SamplePrevArrow/>
        
              };
    return<div className="recommended">
    <h3 className="page-header">Trending this week </h3>
   {trending? <div className="bord">
    <Slider {...settings}  className="recommended-container">

       { trending.map((item)=>{
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
            <Link to='/trending'>View All</Link>
        </div>
    </div>

}