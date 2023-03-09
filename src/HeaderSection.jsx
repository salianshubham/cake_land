import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
function HeadingSection(){
    return     <section>
    <div className="front_Page">
      <div className="front_Page1">
        <header>
          <h2 class="logo">CAKE LAND</h2>
          <nav class="navigation">
            <a href="#section_2" >Home</a>
            <a href="#section_2">Menu</a>
            <a href="#section_3">Images</a>
            <a href="#section_4">Contact</a>
          </nav>
        </header>
        <nav class="navigation_menuBar">
            <li><a href="#section_1" >Home</a></li>
            <li><a href="#section_2">Menu</a></li>
            <li><a href="#section_3">Images</a></li>
            <li><a href="#section_4">Contact</a></li>
          </nav>
          <FontAwesomeIcon icon={faBars} className="menuBar"/>
      </div>
     
    </div>
  </section>;
}

export default HeadingSection;