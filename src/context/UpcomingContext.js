import React,{useState,useEffect, createContext} from "react";

export const UpcomingContext=createContext();

export function UpcomingProvider({children}){
    const req="https://api.themoviedb.org/3/movie/upcoming?api_key=542f1dd0ab5fb5284db223dca8e27224&language=en-US&external_source=imdb_id"
    const[upcoming,setUpcoming]=useState([{}]);

    const getupcoming=async()=>{
        const upcomings=await fetch(req);
        const upcoming_data=await upcomings.json();
        console.log(upcoming_data)
        setUpcoming(upcoming_data.results)
    }

    useEffect(()=>getupcoming,[]);

    return<UpcomingContext.Provider value={upcoming}>
        {children}
    </UpcomingContext.Provider>
}