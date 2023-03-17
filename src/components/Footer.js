import  './Footer.css';
import { Link } from 'react-router-dom';
import FooterLogo from '../img/logo_b.png'
import Youtube from '../img/social-youtube.png'
import Insta from '../img/social-insta.png'
import Facebook from '../img/social-facebook.png'
function Footer(){
    return(
        <footer>
            <div id="footerWrap">
                <h1><Link to="/"><img src={FooterLogo }/></Link></h1>
                <div id="footerInfo">
                <p id="info">InBody Co., Ltd. InBody Bldg, 625, Eonju-ro, Gangnam-gu, Seoul, 06106 Korea
                    <br/>
                    TEL : <span>+82-2-501-3939</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    FAX : <span>+82-2-578-2716</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Email : info@inbody.com</p>
                    <p id="small">Copyright&copy; 2021 by InBody Co.,Ltd. All rights reserved.</p>

                    <div id="privacyUrl">
					<Link to="/PrivacyPolicy">Privacy Policy</Link>
                    </div>
				</div>
                <ul>
                    <li><Link to="https://www.youtube.com/channel/UCZVTRLldG5TLwNMqIKCqy8w" target="blank"><img src={Youtube } /></Link></li>
                    <li><Link to="https://www.instagram.com/inbody_official/" target="_blank"><img src={Insta } /></Link></li>
                    <li><Link to="https://www.facebook.com/myinbody/" target="_blank"><img src={Facebook } /></Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;