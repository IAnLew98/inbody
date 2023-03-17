import { Link } from "react-router-dom";
import HeaderLogo from '../img/logo.png'
import  './NavBar.css';
import NavBtn from '../img/btn-allmenu.png'
import {BsCart} from 'react-icons/bs'
function NavBar(){
    return(
        <header>
            <div id="headerWrap">
                <h1>
                    <Link to="/"><img src={HeaderLogo }/></Link>
                </h1>
                <nav>
                    <ul>
                        <li> <Link to="/AboutUs">About Us</Link></li>
                        <li> <Link to="/Product">Product</Link></li>
                        <li> <Link to="/Technology">Technology</Link></li>
                        <li> <Link to="/Support">Support</Link></li>
                        <li> <Link to="/ContactUs">Contact us</Link></li>
                    </ul>
                </nav>
                <div>
                 <Link to="/"><img src={NavBtn }/></Link>
                 <Link to="/"><BsCart/></Link>
                </div>
            </div>
        </header>

    )
}

export default NavBar;