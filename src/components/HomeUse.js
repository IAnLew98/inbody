import Inbodyband from "../img/band-img.png"
import InbodyDial from "../img/dial-img.png"
import InbodyInLab from "../img/inlab-img.png"
import HomeImg from "../img/homeimg.jpg"
import { Link } from 'react-router-dom';
import  './HomeUse.css';

function HomeUse(){
    return(
        <>
        <article id='HomeUse'>
            <div id='HomeUseWrap'>
                <h2>Welcome to InBody Home</h2>
                <figure>
                <img src={HomeImg}/>
                <figcaption>
                    <div id='band'><Link to="/">InBody band 2</Link></div>
                    <div id='dial'><Link to="/">InBody Dial</Link></div>
                    <div id='inlab'><Link to="/">InLab</Link></div>
                </figcaption>
                </figure>
            </div>

        </article>
        <article id='HomeProduct'>
            <div id='HomeProductWrap'>
                    <figure>
                        <img src={Inbodyband} />
                        <figcaption>
                            <dl>
                                <dt>InBodyBAND2</dt>
                                <dd>All the data you need</dd>
                                <dd>The InBodyBAND2 measures your body fat, muscle mass, and body fat<br/>
                                 percentage. Knowing how much fat and muscle you have is only the beginning.<br/>
                                  With your baseline set, continuously taking the InBody Test allows you to<br/>
                                   monitor and track the changes in your body.</dd>
                                   <dd><button>Buy Now</button></dd>
                            </dl>
                        </figcaption>
                      </figure>
                      
                      <figure>
                        <img src={InbodyDial} />
                        <figcaption>
                            <dl>
                                <dt>InBody Dial</dt>
                                <dd>Get accurate and personalized results from the comfort of your home</dd>
                                <dd>InBody Dial measures full-body composition based on our professional devices.<br/>
                                 You'll get accurate and personalized results from the comfort of your home.<br/>
                                  Measurements are transferred to the InBody APP where you can monitor your<br/>
                                   progress, share your results and stay on track for your health goals.</dd>
                                   <dd><button>Buy Now</button></dd>
                            </dl>
                        </figcaption>
                      </figure>
                      
                      <figure>
                        <img src={InbodyInLab} />
                        <figcaption>
                            <dl>
                                <dt>InLab</dt>
                                <dd>A new way to measure</dd>
                                <dd>Accurately measures an individual's height using an ultrasound sensor.
Displays temperature and humidity in the surrounding nvironment.
Sleek triangular design that fits in one hand.</dd>
                                   <dd><button>Buy Now</button></dd>
                            </dl>
                        </figcaption>
                      </figure>
            </div>

        </article>
        </>
    )
}

export default HomeUse;