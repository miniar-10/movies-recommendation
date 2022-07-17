import React,{useState,useEffect,useContext} from "react";
import upcoming_fims from'./films.json';
import UpcomingCard from "./upcomingCard";
import { Link } from "react-router-dom";
import'./upcoming.css'
import { UpcomingContext } from "./UpcomingContext";

export default function Upcoming(){
    const upcomig=useContext(UpcomingContext)
    
    
    return<div className="upcomig-board">
        <div className="upcoming">
                <h3 className="page-header">Upcoming :</h3>
            <div className="bord">

                <div className="upcoming-container">
                    {/* {console.log(upcoming)} */}
                   {
                    upcomig.slice(0,12).map((item)=>{
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