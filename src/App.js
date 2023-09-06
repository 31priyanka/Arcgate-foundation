import React from "react";
import data from "./constant.js"; // Import the data from the data.js file
import './App.css';
import Component from './components/Component';
import { Imageone } from "./constant";
import { Imagetwo } from "./constant";
import { Imagethree } from "./constant";
import { Imagefour } from "./constant";
import { Imagefive } from "./constant";
import { Imagesix } from "./constant";
import { Imageseven } from "./constant";
import { Imageeight } from "./constant";
import { Imagenine } from "./constant";
import { Imageten } from "./constant";
import { Image_eleven } from "./constant";
import { Image_twelve } from "./constant";
import { Image_thirteen } from "./constant";
import { Image_fourteen } from "./constant";
import { Image_fifteen } from "./constant";
import sheisudaipur from "./sheisudaipur.webp"
import bgImage from '../src/background.jpg';
import logo from '../src/logo.webp';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles// ..
AOS.init();


// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={bgImage} alt="bgImage" className='bg-image' />
        <img src={logo} alt="Logo" className='logo-image' />
        <p className='para'>Arcgate Foundation, a not-for-profit initiative, focuses on improving the local community through programs in the areas of education, healthcare, sports and rural development.
          Our mission is to support the less privileged sections of the society through various efforts that will help create a brighter future.</p>
      </div>

      <div className="section1">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading1 && <h1>{section.heading1}</h1>}
            {section.heading2 && <h3>{section.heading2}</h3>}
            <p>{section.paragraph1}</p>
            <p>{section.paragraph2}</p>
            <p>{section.paragraph3}</p>
          </div>
        ))}
      </div>

      <div className="ayurvediv">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading3 && <h3>{section.heading3}</h3>}
            <p>{section.paragraph4}</p>
            {section.images && (
              <div data-aos="fade-up">
                <Component images={Imageone} />
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

      <div className="section2">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading4 && <h1>{section.heading4}</h1>}
            {section.images1 && (
              <div data-aos="fade-up">
                <Component images={Imagetwo} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section3">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading5 && <h1>{section.heading5}</h1>}
            <p>{section.paragraph5}</p>
            <p>{section.paragraph6}</p>
            <p>{section.paragraph7}</p>
            <p>{section.paragraph8}</p>
            {section.images2 && (
              <div data-aos="fade-up">
                <Component images={Imagethree} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section4">
        <img src={sheisudaipur} alt="udaipur" className='udaipur-image' />
        {data.map((section, index) => (
          <div key={index}>
            {section.heading6 && <h1>{section.heading6}</h1>}
            <p>{section.paragraph9}</p>
            <p>{section.paragraph10}</p>
            <p>{section.paragraph11}</p>
            <p>{section.paragraph12}</p>
            {section.images5 && (

              <div data-aos="fade-up">
                <Component images={Imagefour} />

              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section5">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading7 && <h1>{section.heading7}</h1>}
            {section.images6 && (
              <div data-aos="fade-up">
                <Component images={Imagefive} />
              </div>
            )}
          </div>
        ))}
      </div>


      <div className="section6">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading8 && <h1>{section.heading8}</h1>}
            <p>{section.paragraph13}</p>
            <p>{section.paragraph14}</p>
            <p>{section.paragraph15}</p>
            {section.images7 && (
              <div data-aos="fade-up">
                <Component images={Imagesix} />
              </div>
            )}
          </div>
        ))}
      </div>


      <div className="section7">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading9 && <h1>{section.heading9}</h1>}
            <p>{section.paragraph16}</p>
            <p>{section.paragraph17}</p>
            <p>{section.paragraph18}</p>
            {section.images8 && (
              <div data-aos="fade-up">
                <Component images={Imageseven} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section8">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading10 && <h1>{section.heading10}</h1>}
            <p>{section.paragraph19}</p>
            <p>{section.paragraph20}</p>
            <p>{section.paragraph21}</p>
            {section.images9 && (
              <div data-aos="fade-up">
                <Component images={Imageeight} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section9">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading11 && <h1>{section.heading11}</h1>}
            <p>{section.paragraph22}</p>
            <p>{section.paragraph23}</p>
            <p>{section.paragraph24}</p>
            {section.images10 && (
              <div data-aos="fade-up">
                <Component images={Imagenine} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section9">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading11 && <h1>{section.heading11}</h1>}
            <p>{section.paragraph22}</p>
            <p>{section.paragraph23}</p>
            <p>{section.paragraph24}</p>
            {section.images10 && (
              <div data-aos="fade-up">
                <Component images={Imagenine} />
              </div>
            )}
          </div>
        ))}
      </div>


      <div className="section9">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading12 && <h1>{section.heading12}</h1>}
            <p>{section.paragraph25}</p>
            <p>{section.paragraph26}</p>
            <p>{section.paragraph27}</p>
          </div>
        ))}
      </div>

      <div className="section10">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading13 && <h1>{section.heading13}</h1>}
            <p>{section.paragraph28}</p>
            <p>{section.paragraph29}</p>
            <p>{section.paragraph30}</p>
            {section.images11 && (
              <div data-aos="fade-up">
                <Component images={Imageten} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section11">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading14 && <h1>{section.heading14}</h1>}
            <p>{section.paragraph31}</p>
            <p>{section.paragraph32}</p>
            <p>{section.paragraph33}</p>
            {section.images12 && (
              <div data-aos="fade-up">
                <Component images={Image_eleven} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section12">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading15 && <h1>{section.heading15}</h1>}
            <p>{section.paragraph34}</p>
            <p>{section.paragraph35}</p>
            <p>{section.paragraph36}</p>
            <p>{section.paragraph37}</p>
            <p>{section.paragraph38}</p>
            {section.images13 && (
              <div data-aos="fade-up">
                <Component images={Image_twelve} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section13">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading16 && <h1>{section.heading16}</h1>}
            <p>{section.paragraph39}</p>
            <p>{section.paragraph40}</p>
            <p>{section.paragraph41}</p>
            {section.images14 && (
              <div data-aos="fade-up">
                <Component images={Image_thirteen} />
              </div>
            )}
          </div>
        ))}
      </div>


      <div className="section14">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading17 && <h1>{section.heading17}</h1>}
            <p>{section.paragraph42}</p>
            <p>{section.paragraph43}</p>
            <p>{section.paragraph44}</p>
          </div>
        ))}
      </div>

      <div className="section15">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading18 && <h1>{section.heading18}</h1>}
            <p>{section.paragraph45}</p>
            <p>{section.paragraph46}</p>
            <p>{section.paragraph47}</p>
          </div>
        ))}
      </div>

      <div className="section16">
        {data.map((section, index) => (
          <div key={index}>
            {section.heading19 && <h1>{section.heading19}</h1>}
            <p>{section.paragraph48}</p>
            <p>{section.paragraph49}</p>
            <p>{section.paragraph50}</p>
            <p>{section.paragraph51}</p>
            {section.images15 && (
              <div data-aos="fade-up">
                <Component images={Image_fifteen} />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );

}

export default App;













