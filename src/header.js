import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import'./header.css'

export default function Header(){
    const [Mobile,setMobile]=useState(false);
    return(<div className="header">
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
    </div>)
}