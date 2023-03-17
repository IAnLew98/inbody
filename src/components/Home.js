import  './Home.css';
import { Link } from 'react-router-dom';
function Home(){
    const $counter = document.querySelector(".count");

// 목표수치
    return(
        <>
        <article id='box01' >
            <div id="box01Wrap">
                <div id='homeVideo'>
                <figure>
                <video src='/video/InBody.mp4' loop autoPlay muted />
                <figcaption>
                    <dl>
                        <dt>Global Standard</dt>
                        <dd>Using InBody, hundreds of papers have been published and are currently being
                            <br />used in various studies as a global standard ofbody composition analysis
                        </dd>
                        <dd><button>more</button></dd>
                    </dl>
                </figcaption>
                </figure>
                </div>
            </div>
        </article>
        <article id='box02' >
            <div id="box02Wrap">
               
            </div>
        </article>
        
        <article id='box03'>
            <h2>Products of InBody</h2>
            <p>InBody is Achieving Sustainable Growth in the World.</p>
            <div id='box03Wrap'>
                
                <div id='MainInBody'>
                    <div><Link to="./"></Link></div>                  
                    <dl id='InBodyDl'>
                        <dt><Link to="./">InBody</Link></dt>
                        <dd>The standard of body<br/> bomposition analyzer</dd>
                        <dd></dd>
                    </dl>
                </div>
                <div id='MainBWA'>
                    <div id='BWADiv'><Link to="./"></Link></div>
                    <dl id='BWADl'>
                        <dt><Link to="./">BWA</Link></dt>
                        <dd>Body Water analyzer</dd>
                        <dd></dd>
                    </dl>
                </div>
                <div id='MainHomeUse'>
                    <div><Link to="./HomeUse"></Link></div>
                    <dl id='HomeUseDl'>
                        <dt><Link to="./HomeUse">HomeUse</Link></dt>
                        <dd>health begin at home,<br/>HomeUse</dd>
                        <dd></dd>
                    </dl>
                </div>
             
            </div>

        </article>
        

        
        <article id='box04'>
            <h2>Global Network</h2> 
            <div id='box04Wrap'>
                <h3>InBody Overview</h3>
                <ul>
                    <li>
                     <dl>
                        <dt><strong >9</strong><br/>
                    
                        </dt>
                        <dd className='lineDd'>Subsidiary</dd>
                      </dl>
                     </li>
                    <li>
                     <dl>
                        <dt>
                            <strong >109</strong><br/>
                        <small>Countries</small></dt>
                        <dd> Exporting</dd>
                      </dl>
                     </li>
                    <li>
                     <dl>
                        <dt><strong >70</strong><br/>
                        <small>%</small></dt>
                        <dd>Exports</dd>
                      </dl>
                     </li>
                    <li>
                     <dl>
                        <dt><strong >56</strong><br/></dt>

                        <dd className='lineDd'>Distributors</dd>
                      </dl>
                     </li>
                </ul>
            </div>

        </article>
        <article id='box05'>     
            <div id='box05Wrap'> 
            <div id='box05Map'>
               <div id='UK'>InBody UK<div></div></div>
               <div id='GERMANY'>InBody GERMANY<div></div></div>
               <div id='EUROPE'>InBody EUROPE<div></div></div>
               <div id='KOREA'>InBody KOREA Head Office<div></div></div>
               <div id='JAPAN'><div></div>InBody JAPAN</div>
               <div id='CHINA'>InBody CHINA<div></div></div>
               <div id='INDIA'>InBody INDIA<div></div></div>
               <div id='ASIA'><div></div>InBody ASIA</div>
               <div id='USA'>InBody USA<div></div></div>
               <div id='MEXICO'>InBody MEXICO<div></div></div>
              <p>InBody Exporting Countries as of June 2022</p>
            </div>
            </div>

        </article>
        </>
    )
}

export default Home;