import { sliderClasses } from '@mui/material';
import './Home.css'
import { useEffect } from "react";
import Products from '../Products/product';
const Home = () => {
    useEffect(()=>Slider(0),[]);
    return(
        <>
         <div className="Home">
            <div className="homeContainer">
             <div className="homeSliderContainer">
              <div className="homeSlide">
              <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg" alt=""/>
              </div>

              <div className="homeSlide">
              <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/oneplus/LgHeroo/LG_Homepage_DesktopHeroTemplate_3000x1200._CB600727069_.jpg" alt=""/>
              </div>

              <div className="homeSlide">
              <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/HipHopIndia/GW_Hero_PC/GOVO_updated/3000x1200_Hip-Hop-India_V3._CB600429310_.jpg" alt=""/>
              </div>

              <div className="homeSlide">
              <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungAseries/A34/GW/D74950250_IN_WLME_SamsungA_GalaxyA54-5G-_-A34-5G_New_Launch_tallhero_3000x1200._CB603275931_.jpg" alt=""/>
              </div>
             </div>

             {/*Home row*/};
             <div className="HomeRow">
             <Products 
             title="Vivo Y56" 
             price={200000} 
             image="https://m.media-amazon.com/images/I/41xnfQ6+TCL._AC%20
             _SY200_.jpg"
             />
             <Products 
             title="IQOO Z7S" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/41bLD50sZSL._AC_SY200_.jpg"
             />
              <Products 
             title="Apple 13" 
             price={2000} 
             image="https://m.media-amazon.com/images/I/41kP-qu5D+L._AC_UF226,226_FMjpg_.jpg"
             />
              <Products 
             title="Vivo Y56" 
             price={250000} 
             image="https://m.media-amazon.com/images/I/41OTV3--tOL._AC_SR400,600_.jpg"
             />
              <Products 
             title="POCO" 
             price={100000} 
             image="https://m.media-amazon.com/images/I/51sus6a8D+L._AC_UF226,226_FMjpg_.jpg"
             />
             </div>
             {/* second row*/}
             <div className="HomeRow">
             <Products 
             title="Vivo Y59" 
             price={200000} 
             image="https://m.media-amazon.com/images/I/41xnfQ6+TCL._AC%20
             _SY200_.jpg"
             />

             <Products 
             title="Apple Airpodes" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/31Ri-FAMBUL._AC_SY200_.jpg"
             />
             
              
             </div>
             {/*third row*/}
             <div className="HomeRow">
             <Products 
             title="Black Tee" 
             price={2800} 
             image="https://m.media-amazon.com/images/I/71XzkX0cibL._AC_SY200_.jpg"
             />
             <Products 
             title="Leo" 
             price={1500} 
             image="https://m.media-amazon.com/images/I/61QyQ3kotPL._AC_SY200_.jpg"
             />
             <Products 
             title="O-Size" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/61gb68vvjkL._AC_SY200_.jpg"
             />
             <Products 
             title="Blue-Tee" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/61EoGCAOV+L._AC_SY200_.jpg"
             />
             </div>
             {/*fourth row*/}
             <div className="HomeRow">
             <Products 
             title="Vivo Y56" 
             price={200000} 
             image="https://m.media-amazon.com/images/I/71NZuTjNqCL._AC_SY120_.jpg"
             />

             <Products 
             title="Apple Airpodes" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/81dzUeK50bL._AC_SY200_.jpg"
             />
             <Products 
             title="Apple Airpodes" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/51MTW5OKkUS._AC_SY200_.jpg"
             />
             <Products 
             title="Apple Airpodes" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SY200_.jpg"
             />
             <Products 
             title="Leather Shoes" 
             price={1700} 
             image="https://m.media-amazon.com/images/I/51kdwtY1KvL._AC_SY200_.jpg"
             />
             

              
             </div>
            </div>
         </div>
        </>
    );
};


//for the slider
function Slider(Counter){
    const slides=document.querySelectorAll(".homeImg");
    slides.forEach((slide,index) => {
        if(index!==Counter){
            slide.style.visibility='hidden';
            slide.classList.add('image-$(index)');
        }
    });
    moveCarousal(Counter,slides,slides.length)
    
}

function moveCarousal(Counter,slides,len){
if(slides){
    if(Counter>=len-1)Counter=0;
    else Counter+=1;

    slides.forEach((slide,index)=>{
        if(index === Counter){
          slide.style.visibility='visible';
        }else{
            slide.style.visibility='hidden';
          }
    });
}
setTimeout(() => {
    moveCarousal(Counter,slides,len);
}, 4000);


}

export default Home;