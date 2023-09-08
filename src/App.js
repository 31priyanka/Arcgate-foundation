import React from "react";
import data from "./constant"; // Import the data from the data.js file
import './App.css';
import Component from './components/Component';
import { galleryImages } from "./constant";
import { uitImages } from "./constant";
import { parkImages } from "./constant";
import { udaipurImages } from "./constant";
import { jalImages } from "./constant";
import { campImages } from "./constant";
import { helpImages } from "./constant";
import { functionImages } from "./constant";
import { communityImages } from "./constant";
import { placeImages } from "./constant";
import { foundationImages } from "./constant";
import { supportImages } from "./constant";
import { surgicalImages } from "./constant";
import { festivalImages } from "./constant";
// import bgImage from '../src/background.jpg';
import logo from '../src/logo.webp';
import udaipur from '../src/sheisudaipur.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

AOS.init({
  // Global settings:
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, 
  delay: 0, 
  duration: 1000, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});


function App() {
  return (
    <div className="App">
      <div className="bg-cover" >
        <img src={logo} alt="Logo" className="w-20 h-20 mx-auto my-8" />
        <p className="paragraph text-center text-white p-8">
          Arcgate Foundation, a not-for-profit initiative, focuses on improving the local community through programs in the areas of education, healthcare, sports, and rural development.
          Our mission is to support the less privileged sections of the society through various efforts that will help create a brighter future.
        </p>
      </div>

      <div className="p-8">
        {data.map((section, index) => (
          <div key={index} className="mb-8">
            {section.heading1 && <h1 className="text-2xl font-bold">{section.heading1}</h1>}
            {section.heading2 && <h3 className="text-lg font-semibold">{section.heading2}</h3>}
            <p className="text-base">{section.paragraph1}</p>
            <p className="text-base">{section.paragraph2}</p>
            <p className="text-base">{section.paragraph3}</p>
          </div>
        ))}
      </div>
      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading3 && <h3 className="text-lg font-semibold">{section.heading3}</h3>}
            <p className="text-base">{section.paragraph4}</p>
            {section.images && (
              <div data-aos="fade-up">
                <Component images ={galleryImages} />
              </div>
            )}
            {section.bulletPoints && (
              <ul>
                {section.bulletPoints.map((point, bulletIndex) => (
                  <li key={bulletIndex}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading4 && <h1 className="text-2xl font-bold">{section.heading4}</h1>}
            {section.images1 && (
              <div data-aos="fade-up">
                <Component images={uitImages} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading5 && <h1 className="text-2xl font-bold">{section.heading5}</h1>}
            {section.images2 && (
              <div data-aos="fade-up">
                <Component images={parkImages} />
              </div>
            )}
          </div>
        ))}
      </div>



      <div className="p-8">
     
      <img src={udaipur} alt="udaipur" className='udaipur-image' />
        {data.map((section, index) => (
          <div key={index}>
           {section.heading6 && <h1 className="text-2xl font-bold">{section.heading6}</h1>}
           <p className="text-base">{section.paragraph5}</p>
            {section.images3 && (
              <div data-aos="fade-up">
                <Component images={udaipurImages}  className = "images3"/>
              </div>
            )}
          </div>
        ))}
        <div className="line1"></div>
      </div>


      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
         
            {section.heading7 && <h3 className="text-lg font-semibold">{section.heading7}</h3>}
            {section.images4 && (
              <div data-aos="fade-up">
                <Component images={jalImages} />
              </div>
            )}
           
          </div>
        ))}
         <div className="line3"></div>
      </div>



      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
           
            {section.heading8 && <h3 className="text-lg font-semibold">{section.heading8}</h3>}
            <p className="text-base">{section.paragraph6}</p>
            <p className="text-base">{section.paragraph7}</p>
            <p className="text-base">{section.paragraph8}</p>
            {section.images5 && (
              <div data-aos="fade-up">
                <Component images={campImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line4"></div>
      </div>

      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
            
            {section.heading9 && <h3 className="text-lg font-semibold">{section.heading9}</h3>}
            <p className="text-base">{section.paragraph9}</p>
            <p className="text-base">{section.paragraph10}</p>
            <p className="text-base">{section.paragraph11}</p>
            {section.images6 && (
              <div data-aos="fade-up">
                <Component images={helpImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line5"></div>
      </div>


      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
           
            {section.heading10 && <h3 className="text-lg font-semibold">{section.heading10}</h3>}
            <p className="text-base">{section.paragraph12}</p>
            <p className="text-base">{section.paragraph13}</p>
            <p className="text-base">{section.paragraph14}</p>
            {section.images7 && (
              <div data-aos="fade-up">
                <Component images={functionImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line6"></div>
      </div>


      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading11 && <h3 className="text-lg font-semibold">{section.heading11}</h3>}
            <p className="text-base">{section.paragraph15}</p>
            <p className="text-base">{section.paragraph16}</p>
            <p className="text-base">{section.paragraph17}</p>
          </div>
        ))}
         <div className="line7"></div>
      </div>



      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
          
            {section.heading12 && <h3 className="text-lg font-semibold">{section.heading12}</h3>}
            <p className="text-base">{section.paragraph18}</p>
            <p className="text-base">{section.paragraph19}</p>
            <p className="text-base">{section.paragraph20}</p>
            {section.images8 && (
              <div data-aos="fade-up">
                <Component images={communityImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line8"></div>
      </div>


      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
            
            {section.heading11 && <h3 className="text-lg font-semibold">{section.heading11}</h3>}
            <p className="text-base">{section.paragraph21}</p>
            <p className="text-base">{section.paragraph22}</p>
            <p className="text-base">{section.paragraph23}</p>
            {section.images9 && (
              <div data-aos="fade-up">
                <Component images={placeImages} />
              </div>
            )}
          </div>
        ))}
         <div className="line9"></div>
      </div>


      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
          
            {section.heading14 && <h3 className="text-lg font-semibold">{section.heading14}</h3>}
            <p className="text-base">{section.paragraph24}</p>
            <p className="text-base">{section.paragraph25}</p>
            <p className="text-base">{section.paragraph26}</p>
            {section.images10 && (
              <div data-aos="fade-up">
                <Component images={foundationImages} />
              </div>
            )}
          </div>
        ))}
        <div className="line10"></div>
      </div>



      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
           
            {section.heading15 && <h3 className="text-lg font-semibold">{section.heading15}</h3>}
            <p className="text-base">{section.paragraph27}</p>
            <p className="text-base">{section.paragraph28}</p>
            <p className="text-base">{section.paragraph29}</p>
            {section.images11 && (
              <div data-aos="fade-up">
                <Component images={supportImages} />
              </div>
            )}
          </div>
        ))}
        <div className="line11"></div>
      </div>



      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
           
            {section.heading16 && <h3 className="text-lg font-semibold">{section.heading16}</h3>}
            <p className="text-base">{section.paragraph30}</p>
            <p className="text-base">{section.paragraph31}</p>
            <p className="text-base">{section.paragraph32}</p>
            {section.images12 && (
              <div data-aos="fade-up">
                <Component images={surgicalImages} />
              </div>
            )}
          </div>
        ))}
        <div className="line11"></div>
      </div>



      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
          
            {section.heading17 && <h3 className="text-lg font-semibold">{section.heading17}</h3>}
            <p className="text-base">{section.paragraph33}</p>
            <p className="text-base">{section.paragraph34}</p>
            <p className="text-base">{section.paragraph35}</p>
          </div>
        ))}
        <div className="line12"></div>
      </div>




      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}> 
            {section.heading18 && <h3 className="text-lg font-semibold">{section.heading18}</h3>}
            <p className="text-base">{section.paragraph36}</p>
            <p className="text-base">{section.paragraph37}</p>
            <p className="text-base">{section.paragraph38}</p>
          </div>
        ))}
<div className="line13"></div>
      </div>



      <div className="p-8">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading19 && <h3 className="text-lg font-semibold">{section.heading19}</h3>}
            <p className="text-base">{section.paragraph39}</p>
            <p className="text-base">{section.paragraph40}</p>
            <p className="text-base">{section.paragraph41}</p>
            <p className="text-base">{section.paragraph42}</p>
            {section.images13 && (
              <div data-aos="fade-up">
                <Component images={festivalImages} />
              </div>
            )}
          </div>
        ))}
        <div className="line14"></div>
      </div>
       <div className='footer'>
        <p className="text-base"> Copyright © 2023. All rights reserved</p>
      </div>
    </div>
  );

}

export default App;
