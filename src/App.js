import './App.css';
import { useContext,useState } from 'react';
import Header from './header';
import Home from './home';
import TrendingAll from './trending-all';
import UpcomingAll from './UpcomingAll';
import RecommendedAll from './recommended-all';
import {BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Footer from './Footer';
import Tutorial from './tutorial';
import Watchlist from './watchlist';
import { TrendingContext } from './trendingContext';
import { UpcomingContext } from './UpcomingContext';
import { RecommendedContext } from './RecommendedContext';
import Loading from './loading';
function App() {

  const recommended=useContext(RecommendedContext);
  const trending=useContext(TrendingContext);
  const upcoming=useContext(UpcomingContext);

  return (
    ((recommended && trending && upcoming))?
  <div className="App">
 
     <BrowserRouter>
     <Header/>   
     <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/trending" element={<TrendingAll/>} ></Route>
      <Route exact path="/recommended" element={<RecommendedAll/>} ></Route>
      <Route exact path="/upcoming" element={<UpcomingAll/>} ></Route>
      <Route  path="/tutorial/:id" element={<Tutorial/>}></Route>
      <Route path="/watchlist"  element={<Watchlist/>}></Route>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>:<Loading/>
  )
}

export default App;
