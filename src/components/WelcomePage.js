import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        
        <img
          className="main-img"
          src="https://i.ya-webdesign.com/images/morty-drunk-png-2.png"
          alt="rick"
        />
        <div className = "welcome-div">      
         <Link to = "/characters"> 
          <img className = "linkPic" src ="https://i.ya-webdesign.com/images/morty-png-12.png"/>
        </Link>
         <h1 >Click on the picture of evil morty to see more characters</h1>
        </div>
      </header>
    </section>
  );
}
