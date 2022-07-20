import React from "react";
import styled from'styled-components'
// import './Footer.css'
export default function Footer(){
     return<FOOTER class="footer">
     <div class="container">
         <div class="row">
             <div class="footer-col">
                 <h4>company</h4>
                 <ul>
                     <li><a href="#">about us</a></li>
                     <li><a href="#">our services</a></li>
                     <li><a href="#">privacy policy</a></li>
                     <li><a href="#"> program</a></li>
                 </ul>
             </div>
             <div class="footer-col">
                 <h4>get help</h4>
                 <ul>
                     <li><a href="#">Cinema</a></li>
                     <li><a href="#">TV shows</a></li>

                     <li><a href="#">Upcoming</a></li>
                     <li><a href="#">People</a></li>

                     <li><a href="#">More</a></li>

                    
                 </ul>
             </div>
             <div class="footer-col">
                 <h4>Find your favourite</h4>
                 <ul>
                     <li><a href="#">Koorean</a></li>
                     <li><a href="#">Turkish</a></li>
                     <li><a href="#">Indian</a></li>
                     <li><a href="#">Egyptien</a></li>
                 </ul>
             </div>
             <div class="footer-col">
                 <h4>follow us</h4>
                 <div class="social-links">
                     <a href="#"><i class="fa fa-facebook-f"></i></a>
                     <a href="#"><i class="fa fa-twitter"></i></a>
                     <a href="#"><i class="fa fa-instagram"></i></a>
                     <a href="#"><i class="fa fa-linkedin"></i></a>
                 </div>
             </div>
         </div>
     </div>
</FOOTER>

}
const FOOTER=styled.footer`
	margin:0;
	padding:0;
	box-sizing: border-box;
	line-height: 1.5;
    text-align: left;
    background-color: #24262b;
    padding: 70px 0;
    margin-top: 15vh;


.container{
	max-width: 1170px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}

.footer-col{
   width: 22%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #f00;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul{
    padding:0;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}



.footer {
}
`