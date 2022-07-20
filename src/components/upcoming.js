import React,{useState,useEffect,useContext} from "react";
// import upcoming_fims from'../films.json';
import UpcomingCard from "./upcomingCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import'./upcoming.css'
import { UpcomingContext } from "../context/UpcomingContext";

export default function Upcoming(){
    const upcomig=useContext(UpcomingContext)
    
    
    return<UPCOMING className="upcomig-board">
        <div className="upcoming">
                <h3 className="page-header">Upcoming :</h3>
            <div className="bord">

                <div className="upcoming-container">
                    {/* {console.log(upcoming)} */}
                   {
                    upcomig.slice(0,12).map((item)=>{
                const key=item.id
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

    </UPCOMING>
}
const UPCOMING=styled.div`
 /* height: 70vh!important; */
    width: 95%;
    padding: 2.5%;
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
.upcoming-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6,15vw);
    grid-gap: 5vh 1vw;
   justify-content: center;
   margin-left: 2.5vw!important;
}
    /* padding-left:5vw; */
`