import React,{useState ,useEffect} from "react";
import  RecommendedCard from './RecommendedCard'
import'./recommended.css'
export default function UpcomingAll(){
    const req="https://api.themoviedb.org/3/movie/upcoming?api_key=542f1dd0ab5fb5284db223dca8e27224&language=en-US&external_source=imdb_id"

    const[Upcoming,setUpcoming]=useState([{}]);

    const getUpcoming=async()=>{
        const Upcomings=await fetch(req);
        const Upcoming_data=await Upcomings.json();
        console.log(Upcoming_data)
        setUpcoming(Upcoming_data.results)
    }

    useEffect(()=>getUpcoming,[]);
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
        
 

   
    return<div className="recommended">
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
    </div>
    }
