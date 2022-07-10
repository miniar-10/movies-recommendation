import logo from './logo.svg';
import './App.css';
import Header from './header';
import Home from './home';
import Upcoming from './upcoming';
import TrendingAll from './trending-all';
import UpcomingAll from './UpcomingAll';
import RecommendedAll from './recommended-all';
import {BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Footer from './Footer';
import Tutorial from './tutorial';
import Watchlist from './watchlist';

function App() {
  return (
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
    </div>
  );
}

export default App;
