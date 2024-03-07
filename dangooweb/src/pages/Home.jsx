
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/login.css';

 
//fonts imports
import "../fonts/Flaticon.eot";
import "../fonts/Flaticon.ttf";
import "../fonts/Flaticon.woff";
import "../fonts/Flaticon.woff";
import "../fonts/fontawesome-webfont.svg";
import "../fonts/fontawesome-webfont.eot";
import "../fonts/fontawesome-webfont.ttf";
import "../fonts/fontawesome-webfont.woff";
import "../fonts/fontawesome-webfont.woff2";
import "../fonts/FontAwesome.otf";
import "../fonts/gijgo-material.ttf";
import "../fonts/gijgo-material.woff";
import "../fonts/themify.svg";
import "../fonts/themify.eot";
import "../fonts/themify.ttf";
import "../fonts/themify.woff";
import IM1 from "../img/icon/left_1.svg";
import IM2 from "../img/icon/play.svg"
import about from "../img/about.png";
import i1 from "../img/team/chefs_1.png"
import i2 from "../img/team/chefs_2.png"
import i3 from "../img/team/chefs_3.png"




function Home(){

    return (
        <section className="about_part about_bg">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-4 col-lg-5 offset-lg-1">
                            <div className="about_img">
                                <img src={about} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-8 col-lg-4">
                            <div className="about_text">
                                <h5>Our History</h5>
                                <h2>Savor the Moment, Taste the Difference!</h2>
                                <h4>Every Bite Tells a Delicious Story!</h4>
                                <p>Our journey began with a passion for exceptional food and genuine hospitality.
                                    Inspired by our love for flavors from around the world, we set out to create a dining destination where every dish tells a story and every guest feels like family.</p>
    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      );

}

export default Home;