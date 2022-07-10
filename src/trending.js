import React,{useState,useEffect} from "react";

// import trending_films from'./films.json';
// import UpcomingCard from "./upcomingCard";
import TrendingCard from "./trendingCard";
import'./trending.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RecommendedCard from "./RecommendedCard";
import{Link} from 'react-router-dom'

export default function Trending(){
    const req="https://api.themoviedb.org/3/trending/all/day?api_key=542f1dd0ab5fb5284db223dca8e27224&language=en-US&external_source=imdb_id"

    const[trending,setTrending]=useState([{}]);

    const getTrending=async()=>{
        const trendings=await fetch(req);
        const trending_data=await trendings.json();
        console.log(trending_data)
        setTrending(trending_data.results)
    }

    useEffect(()=>getTrending,[]);
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
    <div className="bord">
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
    </div>
        <div className="see-all">
            <Link to='/trending'>View All</Link>
        </div>
    </div>

}