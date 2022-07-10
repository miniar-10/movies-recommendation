import React from "react";
import { useState ,useEffect } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./HomePage";
import * as data from './data'
import Trending from "./trending";
import Recommended from"./recommended"
import Upcoming from "./upcoming";
import './home.css'

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
    
const res='https://api.themoviedb.org/3/discover/movie?api_key=542f1dd0ab5fb5284db223dca8e27224&certification_country=US&certification=R&sort_by=vote_average.desc';
export default function Home(){
    // console.log(results)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>

      };
    console.log(data.homeData)
    return<div >
        <div className="home">
                 <Slider {...settings}  className="home">
    {/* <div> */}
       { data.homeData.map((item)=>{
        // const bckg=`https://www.themoviedb.org/t/p/w1280/${item.poster_path}`
        const style={
            width:"100vw",
            height:'100vh'

        }
            return<HomePage
            item={item}
            style={style}
            />
        })
    }
   
    {/* </div> */}
    </Slider>
    </div>
     <Trending/>
    <Recommended/>

     <Upcoming/>
    </div>
}