import React,{useState ,useEffect, createContext} from "react";
export const RecommendedContext=createContext(); 

export function RecommendedProvider({children}){
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
    return<RecommendedContext.Provider value={recommendedFilms}>
        {children}
    </RecommendedContext.Provider>
    }
