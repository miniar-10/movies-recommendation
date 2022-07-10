import React,{useState ,useEffect} from "react";
import recomended_films from'./films.json';
import  RecommendedCard from './RecommendedCard'
// import UpcomingCard from "./upcomingCard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import'./recommended.css'
import { Link } from "react-router-dom";
export default function Upcoming(){
    const [recommendedFilms ,setRecommendedFilms]=useState([{}]);
    useEffect(()=>getRecommended,[])
    const getRecommended=async()=>{
        // const recommended=await fetch("https://imdb-api.com/en/API/Top250Movies/k_unmeo90z")
        // const data=await recommended.json()
        // console.log(data.items)
        // setRecommendedFilms(data.items)
        const rec=await fetch("https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=542f1dd0ab5fb5284db223dca8e27224")
        ///discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc
        const data=await rec.json();
        console.log (data.results);
        setRecommendedFilms(data.results)


    }
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
    // console.log(recomended_films.recommended)
   
    return<div className="recommended">
            <h3 className="page-header">Recommended for you:</h3>
            <div className="bord">
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
            </div>
            <div className="see-all">
            <Link to='/recommended'>View All</Link>
        </div>
    </div>
    }
