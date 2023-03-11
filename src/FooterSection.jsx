import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function FooterSection(){
    return(<section id="section_4">
    <div className="footer">
      <div className="footer_info">
        <h1 className="footer_Cake_Land">Cake Land</h1>
        <p className="footer_Cake_Land_Paragraph">
          We serve and take all type of cake orders. You personalized cake of
          your own wish. We have the best chef in the city working for us and
          happy serving you.
        </p>
        <h3 className="footer_Cake_Land_info">Contact</h3>
        <p className="footer_Cake_Land_info">ashish@gmail.com</p>
        <p className="footer_Cake_Land_info">8494980638</p>
      </div>

      <div className="footer_order">
        <h1 className="footer_order_hour">Open Hours</h1>
        <p className="footer_order_hour_info">
          Monday &emsp;&emsp; 9:00-7:00
        </p>
        <p className="footer_order_hour_info">
          Tuesday &emsp;&emsp; 9:00-7:00
        </p>
        <p className="footer_order_hour_info">wednesday &emsp; 9:00-7:00</p>
        <p className="footer_order_hour_info">
          Thursday &emsp;&nbsp;&nbsp;&nbsp; 9:00-7:00
        </p>
        <p className="footer_order_hour_info">
          Friday &emsp;&emsp;&emsp; 9:00-7:00
        </p>
        <p className="footer_order_hour_info">
          Saturday &emsp;&emsp; 9:00-7:00
        </p>
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
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </div>
  </section>);
}

export default FooterSection;
    