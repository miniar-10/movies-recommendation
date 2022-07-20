import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./components/HomePage";
import styled from "styled-components";
import * as data from './data'
import Trending from "./components/trending";
import Recommended from"./components/recommended"
import Upcoming from "./components/upcoming";
// import './home.css'

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
    return<HOME >
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
    </HOME>
}
const HOME=styled.div`
margin:0;
	padding:0;
	box-sizing: border-box;
	line-height: 1.5;
    text-align: left;
 min-height: 100vh;
 width:100vw;
    position: relative;
    overflow-y: hidden;
.ctrl-btn button {
    background: none;
    background: #00000061!important;

    border: 3px solid hsla(0,0%,100%,.3);
    border-radius: 50%!important;
    cursor: pointer;
    min-height: 50px;
    padding: 0;
    width: 50px;
    position: relative;
}
/* .ctrl-btn button:after {
    background: #00000061;
   position: absolute;content:'';
   border-radius: 50%;
   width: 100%;
   height: 100%;
   left: 0;
   top:0;
} */

.ctrl-btn .next {
    right: 2%;
    position: absolute;
    top: 50%;
    z-index: 99;
}
.ctrl-btn .next {
    right: 2%;
    position: absolute;
    top: 50%;
    z-index: 99;
}
.ctrl-btn:hover i{
    color:#f00
}
.ctrl-btn:hover .prev{
    color:#f00
}
.ctrl-btn .prev {
    left: 1%;
    position: absolute;
    top: 50%;
    z-index: 99;
}
@media (max-width:944px) {
    .description p{
        font-size: .9rem;
      }
      .cast h4{
        margin:0.5rem 0;
    }
    .details h1{
        font-size: 3em;
    }

}
@media (max-width:878px) {
    /* .details{
    padding: 1em 4em;

    } */
    .details h1{
    font-size: 2rem;

    }
    
    .cast h4{
        margin:0.4rem 0;
      
    }
      .description p{
        font-size: .85rem;
      }
      .description h4{
        font-size: .8rem;
      }
    .donnow{
        /* width: 30%; */
        /* left:65%; */
        top:-2rem
    } 

.watch-trailer-img {
    margin:1rem
}
}
@media(max-width:734px){
    .details{
        width: 80vw!important;
  
    }
    .fa-star ,.fa-star-half{
        color :var(--secondary-color);
        transform: scale(1);
        margin:2px
    }.watch-trailer-img {
        margin: 1rem;
        width: 4rem;
        height: 4rem;
    }
    .donnow {
        font-size: .8rem;
    }
}
@media (max-width:614px) {
    .details{
        /* width: 75vw!important; */
  
    }
    .details{
        width:100%!important;
       }
}
@media (max-width:566px) {
    .details h1{
    font-size: 1rem!important;

  
    }
    .watch-trailer-img{
        margin:.2rem;
        width: 3rem;
        height: 3rem;
    }
   
}
@media (max-width:506px) {
    .details h1{
    font-size: 1rem!important;

  
    }
    .description h4{
        font-size: .8rem;

    }
    .cast h4{
        margin:0.1rem 0;
    }
    .watch-trailer-img{
        margin:.2rem;
        width: 3rem;
        height: 3rem;
    }
    
}
@media (max-width:420px) {
 
    .watch-trailer-img{
        margin:.2rem;
        width: 2rem;
        height: 2rem;
    }
    .donnow{
        padding-top: 25vh;

    }
  .details{
    padding:1em;
  }
}
.mr-16{
    margin-right: 16px;
}

`