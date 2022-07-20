import React,{ useState,useEffect,useContext, createContext } from "react";

export const TrendingContext=createContext();

export function TrendingProvider({children}){
    const req="https://api.themoviedb.org/3/trending/all/day?api_key=542f1dd0ab5fb5284db223dca8e27224&language=en-US&external_source=imdb_id"

    const[trending,setTrending]=useState(null);

    const getTrending=async()=>{
        const trendings=await fetch(req);
        const trending_data=await trendings.json();
        console.log(trending_data)
        setTrending(trending_data.results)
    }

    useEffect(()=>getTrending,[]);

    return <TrendingContext.Provider value={trending}>
        {children}
    </TrendingContext.Provider>
}