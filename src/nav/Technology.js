import  './Technology.css';
function Technology(){
    return(
    <article id="TechnologyBox">
    
        <div id="TechnologyWrap">  
            <h2>InBody Technology</h2>
            <div id='BIA'>
                <div>
                <h4>What is BIA?</h4>
                <p>InBody utilizes Bioelectrical Impedance Analysis (BIA) technology to measure human body composition. BIA is a technology that quantitatively measures body composition through impedance that occurs when an electric current flows through the human body.
BIA, which was first used in the late 1960's, is a method of measuring body water by sending an alternating current through the human body and obtaining an impedance index based on the fact that the human body is made of water that conducts electricity well and the resistance varies depending on the amount of water.</p>
                <p>Until the late 1980s, the BIA method was a whole-body impedance measurement method with single low frequency. This method gave inaccurate results so the results had to be compensated through empirical estimation. However, the formulas with empirical estimation was only accurate for those within the study group, and those outside of the group had a low accuracy. Therefore the formula could not be used universally and was not developed for clinical use in hospitals.
Nevertheless, technological limitations for measuring bioelectric impedance were overcome and fundamental BIA technology were developed. Leading to development of the multi-frequency and segmental impedance measurement, Body composition analysis was able to become more precise without using empirical estimations and by only using impedance.</p>
            </div></div>
            <div>
                <h4></h4>
            <ul>
                <li>
                    <div id='water'></div>
                     <p>
Body water makes up the most out of the body components and is distributed throughout all the cells and body fluids in our body. Body water conveys nutrition, body waste, and serves as the main substance of blood, playing the pivotal role of biological route within the human body and mediating different chemical reactions.</p>
                </li>
                <li>
                    <div id='protein'></div>
                     <p>Protein is a major component of body tissues such as bones, skin and hair as well as muscles. Protein deficiency may threaten health because the body does not function properly, and it can interrupt the growth of children.</p>
                </li>
                <li>
                    <div id='mineral'></div>
                     <p>Minerals are essential nutrients for maintaining life and health. Minerals make up different substances within the human body and regulate physiological phenomena. Lack of minerals can lead to risks such as poor growth and osteoporosis.</p>
                </li>
                <li>
                    <div id='fat'></div>
                     <p>Body fat is one of the components that make up the human body and is a warehouse that stores energy. The amount of body fat may cause obesity and metabolic syndromes. Severe lack of body fat may cause a decrease in immunity level and imbalance in hormones, so it is important to maintain a proper level of body fat.</p>
                </li>
            </ul></div>
        </div>
    </article>)
}

export default Technology;