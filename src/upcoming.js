import React,{useState,useEffect} from "react";
import upcoming_fims from'./films.json';
import UpcomingCard from "./upcomingCard";
import { Link } from "react-router-dom";

import'./upcoming.css'

export default function Upcoming(){
    const req="https://api.themoviedb.org/3/movie/upcoming?api_key=542f1dd0ab5fb5284db223dca8e27224&language=en-US&external_source=imdb_id"
    const[upcoming,setUpcoming]=useState([{}]);

    const getupcoming=async()=>{
        const upcomings=await fetch(req);
        const upcoming_data=await upcomings.json();
        console.log(upcoming_data)
        setUpcoming(upcoming_data.results)
    }

    useEffect(()=>getupcoming,[]);
    // console.log(upcoming)
    
    return<div className="upcomig-board">
        <div className="upcoming">
                <h3 className="page-header">Upcoming :</h3>
            <div className="bord">

                <div className="upcoming-container">
                    {/* {console.log(upcoming)} */}
                   {
                    upcoming.slice(0,12).map((item)=>{
                const key=item.id
console.log(key)
                        return(<UpcomingCard
                        film={item}
                        />)
                    })
                }
                </div>
        <div className="see-all">
            <Link to='/upcoming'>View All</Link>
        </div>
        </div>
        </div>

    </div>
}