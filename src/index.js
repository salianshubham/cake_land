import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

ReactDOM.render(
  <>
    <section>
      <div className="front_Page">
        <div className="front_Page1">
          <header>
            <h2 class="logo">CAKE LAND</h2>
            <nav class="navigation">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </nav>
          </header>
        </div>
      </div>
    </section>

    {/* middle page */}

    <section id="services">
      <h1 className="Speciality">Speciality</h1>
      <h1 className="our_menu">Our Menu</h1>

      <div className="cake_type">
        <h1>Premium Cakes</h1>
        <h1>Wedding Cakes</h1>
        <h1>Cakes</h1>
      </div>

      <div className="card1">
        <div className="cake_card1">
          <div className="cake_card1Cake_cardimage1"></div>
          <h1 className="cake_card1Cake_cardName1">GREEN APPLE</h1>
        </div>

        <div className="cake_card2">
          <div className="cake_card2Cake_cardimage2"></div>
          <h1 className="cake_card2Cake_cardName2">GREEN APPLE</h1>
        </div>
        <div className="cake_card3">
          <div className="cake_card3Cake_cardimage3"></div>
          <h1 className="cake_card3Cake_cardName3">GREEN APPLE</h1>
        </div>
      </div>
      {/* ****************2nd row******************  */}
      <div className="card2">
        <div className="card2Cake_Card1">
          <div className="card2Cake_Card1cake_cardimage2"></div>
          <h1 className="card2Cake_Card1cake_cardname2">GREEN APPLE</h1>
        </div>

        <div className="card2Cake_Card2">
          <div className="card2Cake_Card2cake_cardimage2"></div>
          <h1 className="card2Cake_Card2cake_cardname2">GREEN APPLE</h1>
        </div>
        <div className="card2Cake_Card3">
          <div className="card2Cake_Card3cake_cardimage3"></div>
          <h1 className="card2Cake_Card3cake_cardname3">GREEN APPLE</h1>
        </div>
      </div>

      {/* ****************3rd row******************  */}
      <div className="card3">
        <div className="card3Cake_Card1">
          <div className="card3Cake_Card1cake_cardimage1"></div>
          <h1 className="card3Cake_Card1cake_cardname1">GREEN APPLE</h1>
        </div>

        <div className="card3Cake_Card2">
          <div className="card3Cake_Card2cake_cardimage2"></div>
          <h1 className="card3Cake_Card2cake_cardname2">GREEN APPLE</h1>
        </div>
        <div className="card3Cake_Card3">
          <div className="card3Cake_Card3cake_cardimage3"></div>
          <h1 className="card3Cake_Card3cake_cardname3">GREEN APPLE</h1>
        </div>
      </div>
    </section>

    <section id="services">
      <h1 className="our_menu">Our Hot Picked Cakes</h1>
      <div className="Our_Hot_Picked_Cakes">
        <div className="Our_Hot_Picked_Cakescake_div">
          <div className="Our_Hot_Picked_image1"></div>
          <div className="Our_Hot_Picked_image2"></div>
          <div className="Our_Hot_Picked_image3"></div>
          <div className="Our_Hot_Picked_image4"></div>
          <div className="Our_Hot_Picked_image5"></div>
        </div>
      </div>
    </section>
    {/********************* last page*********************** */}
    <section id="services">
      <div className="footer">
        <div className="footer_info">
          <h1 className="footer_Cake_Land">Cake Land</h1>
          <p className="footer_Cake_Land_Paragraph">
            We serve and take all type of cake orders. You personalized cake of
            your own wish. We have the best chef in the city working for us and
            happy serving you.
          </p>
          <h3 className="footer_Cake_Land">Contact</h3>
          <p className="footer_Cake_Land">ashish@gmail.com</p>
          <p className="footer_Cake_Land">8494980638</p>
        </div>

        <div className="footer_order">
          <h1 className="footer_order_hour">Open Hours</h1>
          <p className="footer_order_hour">Monday &emsp;&emsp; 9:00-7:00</p>
          <p className="footer_order_hour">Tuesday &emsp;&emsp; 9:00-7:00</p>
          <p className="footer_order_hour">wednesday &emsp; 9:00-7:00</p>
          <p className="footer_order_hour">
            Thursday &emsp;&nbsp;&nbsp;&nbsp; 9:00-7:00
          </p>
          <p className="footer_order_hour">
            Friday &emsp;&emsp;&emsp; 9:00-7:00
          </p>
          <p className="footer_order_hour">Saturday &emsp;&emsp; 9:00-7:00</p>
          
        </div>

        <div className="footer_Instagram">
          <h1 className="footer_Cake_Land">Instagram</h1>
          <div className="footer_image">
            <diV className="footer_Instagram_Image1"></diV>
            <div className="footer_Instagram_Image2"></div>
            <diV className="footer_Instagram_Image3"></diV>
            <div className="footer_Instagram_Image4"></div>
          </div>
          <div className="FontAwesomeIcon">
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faWhatsapp}/>
          </div>
          
        </div>
      </div>
    </section>
  </>,
  document.getElementById("root")
);
