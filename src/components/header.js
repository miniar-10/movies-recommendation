import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// import'./header.css'
import styled from'styled-components'

export default function Header(){
    const [Mobile,setMobile]=useState(false);
    return(<HEADER className="header">
        <header>
        <nav className="nav-bar">

            <h2>LOGO</h2>
                <ul className={Mobile?'list-for-mobile':'list-for-web'} onClick={()=>setMobile(false)}>
                    <Link to='/'>Home</Link>
                    <Link to='/trending'>Trending</Link>

                    <Link to='/recommended'>Recommended</Link>

                    <Link to='/upcoming'>Upcoming</Link>


                </ul>
                <button className='toggle-btn' onClick={()=>setMobile(!Mobile)}>
                    {Mobile?<i class="fa fa-times" aria-hidden="true"></i>:<i class="fa fa-bars" aria-hidden="true"></i>}
                

                </button>
                <button className='primary-btn subscribe-btn'>Subscribe now</button>
            </nav>
        </header>
    </HEADER>)
}
const HEADER=styled.div`
h2{
    display: inline-block;
    color: var(--secondary-color);
}
.nav-bar{
    height: 70px;
    /* width: 40vw; */
    background:var(--navbar-color);
    color:var(--txt-color);
    margin-top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.2em;
}
.nav-bar a::after{
    content: '';
    position: absolute;
    width: 140%;
    height: 4px;
    background-color: #f00;
    left:-110%;
    display: none;
    top:40px;
    transition:transform 1s;
}
.nav-bar a:hover::after{
     transform: translateX(65%) ; 
     /* transition-duration: 1s;
     -o-transition-duration: .8s;
     -webkit-transition-duration: .8s;
     -moz-transition-duration: .8s;


     transition-duration: 1s; */
    display: block;
}
 .list-for-web{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 60vw;
}

.toggle-btn{
   padding: 12px 40px;
    border-radius: 5px;
    font-size: 16px;
    display: none;
}

@media (max-width:865px) {
    .primary-btn{
        font-size: .9em;
    }
     .list-for-web{
    font-size: .8em; 
    }
   
}
@media (max-width:775px) {
   
     .list-for-web{
        display: none;
    }
    .subscribe-btn{
        display: none;
    }
    .toggle-btn{
        display: block;
    }
    .list-for-mobile{
        display: flex;
        margin-top: 0;
        flex-direction: column;
        justify-content: space-evenly;
        background: var(--primary-color);
        z-index: 100;
        top:0;
        left: 0;
        width: 50vw;
        height: 89vh;
        position: absolute;
        align-items: flex-start;
        padding: 0;
    }
    .list-for-mobile a{
        color: #fff;
        /* padding:2em; */
        /* height: ; */
        text-align: left;
        /* width: 50vw; */
        color: #fff;
    padding: 2em;
    text-align: left;
    width: 40vw;
    padding: 5vw;
    }  .list-for-mobile a:hover{
        background-color: #f00;
    }
    .list-for-mobile a:hover::after{
        /* color: #f00; */
        display: none;
    }
    

   
}
`