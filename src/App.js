// import './App.css';
import { useContext,useState } from 'react';
import styled from 'styled-components';
import Header from './components/header';
import Home from './home';
import TrendingAll from './trending-all';
import UpcomingAll from './UpcomingAll';
import RecommendedAll from './recommended-all';
import {BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Tutorial from './components/tutorial';
// import Watchlist from './components/watchlist';
import { TrendingContext } from './context/trendingContext';
import { UpcomingContext } from './context/UpcomingContext';
import { RecommendedContext } from './context/RecommendedContext';
import Loading from './components/loading';
function App() {

  const recommended=useContext(RecommendedContext);
  const trending=useContext(TrendingContext);
  const upcoming=useContext(UpcomingContext);

  return (
    ((recommended && trending && upcoming))?
  <APP className="App">
 
     <BrowserRouter>
     <Header/>   
     <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/trending" element={<TrendingAll/>} ></Route>
      <Route exact path="/recommended" element={<RecommendedAll/>} ></Route>
      <Route exact path="/upcoming" element={<UpcomingAll/>} ></Route>
      <Route  path="/tutorial/:id" element={<Tutorial/>}></Route>
      {/* <Route path="/watchlist"  element={<Watchlist/>}></Route> */}
     </Routes>
     </BrowserRouter>
     <Footer/>
    </APP>:<Loading/>
  )
}

export default App;
const APP=styled.div`
 font-family: 'Poppins',sans-serif;
  /* background-color: var(--navbar-color); */
  background-image: var(--gradient-color);
  color: var(--white-50);
  overflow-x: hidden;
margin:0;
	padding:0;
	box-sizing: border-box;
	line-height: 1.5;
    text-align: left;
button{
    background-color: var(--secondary-color);
    color: #fff;
    border: none;
    height: 40px;

}
li{
    list-style: none;
}
.primary-btn{
    font-size:1.2em;
    font-weight: 400;
    border-radius: 3px;
    width: auto;
    padding-left:10px;
    padding-right:10px;

}
a{
    color: rgb(242, 232, 232);
    font-weight: 600;
    position: relative;
    text-decoration: none;
    transition: transform .8s;
}
.primary-btn:hover{
    transform: scale(1.05);
}
.page-header{
 
 font-size: 2rem;
 margin:3rem 0;
 text-align: left;
}

`