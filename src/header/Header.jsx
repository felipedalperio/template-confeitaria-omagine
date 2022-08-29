import "./header.css";
import logo from '../img/wallpaper_header.png';

export default function header() {
      return (
            <div className="header" id="header" >
                  <a href="#posts" >
                        <div className="header-img" 
                                                src={logo}
                                                alt=""
                                    />
                  </a>
            </div>
      
           
      )
}
