import bgImage from '../src/background.jpg';
import logo from '../src/logo.webp';
import Paragraph from './components/Paragraph';
import './App.css';
import Component from './components/Component';
import udaipur from '../src/sheisudaipur.webp';

function App() {

  const galleryImages = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
  ];

  const uitImages = [
    '/images/uit1.jpg',
    '/images/uit2.jpg',
    '/images/uit3.jpg',
  ];

  const parkImages = [
    '/images/it_park1.jpg',
    '/images/it_park2.jpg',
    '/images/it_park3.jpg',
    '/images/it_park4.jpg',
    '/images/it_park5.jpg',
    '/images/it_park6.jpg',
    '/images/it_park7.jpg',
    '/images/it_park8.jpg',
    '/images/it_park9.jpg',
  ];
  const udaipurImages = [
    '/images/uda1.jpg',
    '/images/uda2.jpg',
    '/images/uda3.jpg',
    '/images/uda4.jpg',
    '/images/uda5.jpg',
    '/images/uda6.jpg',
    '/images/uda7.jpg',
    '/images/uda8.jpg',
    '/images/uda9.jpg',
    '/images/uda10.jpg',
    '/images/uda11.jpg',
  ];

  const jalImages = [
    '/images/water-supply01.jpg',
    '/images/water-supply02.jpg',
    '/images/water-supply03.jpg',
    '/images/water-supply04.jpg',
    '/images/water-supply05.jpg',
  ];

  const campImages = [
    '/images/01.jpg',
    '/images/02.jpg',
    '/images/03.jpg',
    '/images/04.jpg',
    '/images/05.jpg',
    '/images/06.jpg',
    '/images/07.jpg',
    '/images/08.jpg',
    '/images/09.jpg',
  ];

  const helpImages = [
    '/images/01 (1).jpg',
    '/images/02 (1).jpg',
    '/images/03 (1).jpg',
    '/images/04 (1).jpg',
    '/images/05 (1).jpg',
    '/images/06 (1).jpg',
    '/images/07 (1).jpg',
    '/images/08 (1).jpg',
    '/images/09 (1).jpg',
  ];

  const saveImages = [
    '/images/01 (2).jpg',
    '/images/02 (2).jpg',
    '/images/03 (2).jpg',
  ];


  const functionImages = [
    '/images/hello1.jpg',
    '/images/hello2.jpg',
    '/images/hello3.jpg',
    '/images/hello4.jpg',
    '/images/hello5.jpg',
    '/images/hello6.jpg',
  ];


  const communityImages = [
    '/images/community1.jpg',
    '/images/community2.jpg',
    '/images/community3.jpg',
    '/images/community4.jpg',
    '/images/community5.jpg',
    '/images/community6.jpg',
    '/images/community7.jpg',
    '/images/community8.jpg',
    '/images/community9.jpg',
  ];

  const placeImages = [
    '/images/place1.jpg',
    '/images/place2.jpg',
  ];


  const foundationImages = [
    '/images/foundation1.jpg',
    '/images/foundation2.jpg',
    '/images/foundation3.jpg',
    '/images/foundation4.jpg',
    '/images/foundation5.jpg',
    '/images/foundation6.jpg',
    '/images/foundation7.jpg',
    '/images/foundation8.jpg',
    '/images/foundation9.jpg',
  ];

  const supportImages = [
    '/images/support1.jpg',
    '/images/support2.jpg',
    '/images/support3.jpg',
    '/images/support4.jpg',
    '/images/support5.jpg',
    '/images/support6.jpg',
  ];


  const surgicalImages = [
    '/images/surgical1.jpg',
    '/images/surgical2.jpg',
  ];


  const festivalImages = [
    '/images/festival1.jpg',
    '/images/festival2.jpg',
    '/images/festival3.jpg',
    '/images/festival4.jpg',
    '/images/festival5.jpg',
    '/images/festival6.jpg',
  ];

  return (
    <div className="ArcgateApp">
        
      <div className='header'>
        <img src={bgImage} alt="bgImage" className='bg-image' />
        <img src={logo} alt="Logo" className='logo-image' />
        <p className='para'>Arcgate Foundation, a not-for-profit initiative, focuses on improving the local community through programs in the areas of education, healthcare, sports and rural development.
          Our mission is to support the less privileged sections of the society through various efforts that will help create a brighter future.</p></div>
      <div className='content'>
        <Paragraph heading="Our Work" />
        <Paragraph heading3="Infrastructure Development - Enriching public spaces" />
        <div class="line"></div>
          <Paragraph paragraph="At Arcgate Foundation, we believe in giving back to the community that supports us.
          That's why we adopted roundabouts in our city, to beautify the streets and improve the traffic flow." />
        <Paragraph paragraph="Roundabouts are not only aesthetically pleasing,
          but also safer and more efficient than traditional intersections.
          They reduce collisions, emissions, and delays, and enhance the quality of life for everyone.
          By adopting roundabouts, we are contributing to the environmental sustainability and social well-being of our city." />
        <Paragraph paragraph="We are proud to be part of this initiative and to make our city a better place to live and work.
          We hope that our efforts will inspire others to join us in making a positive difference in our community.
          Together, we can create a more beautiful and livable city for ourselves and future generations." />
        <h2 className='ayu-heading'>Ayurvedic College Circle</h2>
        <p className='ayu-para'>Udaipur symbolises an important city of India at the crossroads of growing urbanism and traditional sensibilities, a place where culture meets tourism and 'Atithi Devo Bhavo' is epitomized. It reflects the modern ideas of the new India while retaining its heritage and values.</p>

       <Component images={galleryImages} />
        <ul className='bulleted-list'>
          <li>This traffic circle is located at an important junction of the city with a great visual interaction with the locals and tourists alike.</li>
          <li>This urban intervention takes cues from the daily lives of the residents of Udaipur, while showcasing their spirited and modern approach to life. It lends to the viewer a symbolic and striking visual landscape of this idea of a new Udaipur.</li>
          <li>Each of the portal frames indicates a stage in our lives and the series of these frames placed one behind the other shows how our life moves and how experiences in our life teach us various virtues. The words written on some of the portals outline the specific words that come to mind while we take on the journey of life. These words enable us to grow as a human being during our lifetime.</li>
          <li>The gaps in the various frames shows that our lives are pervious and open to influences from outside forces. It is important to make appropriate choices during our lives.</li>
        </ul>
           <h2 className='uit-heading'>UIT Circle</h2>
        <Component images={uitImages} />
        <h2 className='uit-heading'>I.T Park</h2>
        <Paragraph paragraph="At Arcgate Foundation, we believe in giving back to the community that supports us.
          That's why we adopted roundabouts in our city, to beautify the streets and improve the traffic flow." />
        <Paragraph paragraph="Roundabouts are not only aesthetically pleasing,
          but also safer and more efficient than traditional intersections.
          They reduce collisions, emissions, and delays, and enhance the quality of life for everyone.
          By adopting roundabouts, we are contributing to the environmental sustainability and social well-being of our city." />
        <Paragraph paragraph="We are proud to be part of this initiative and to make our city a better place to live and work.
          We hope that our efforts will inspire others to join us in making a positive difference in our community.
          Together, we can create a more beautiful and livable city for ourselves and future generations." />
        <Component images={parkImages} />
        
      </div>
      <div className='section'>
        <img src={udaipur} alt="udaipur" className='udaipur-image' />
        <h1>#SheIsUdaipur</h1>
        <div class="lines"></div>
        <p>We believe in increasing awareness to advance the safety, financial independence, education and empowerment of women in Udaipur. #SheIsUdaipur is an initiative to empower women to share their stories. When women share their stories of personal triumph, they often have the potential to give hope, to inspire and to help change lives. Visit sheisudaipur.org to read interesting stories of the top 100 #SheIsUdaipur 2019 winners.</p>
        <Component images={udaipurImages} className="uadImage" />
      </div>

      <div className='section1'>
        <h1>'Jal Seva' Campaign - Drinking Water Supply to Areas of Crisis in Rural Rajasthan</h1>
        <div class="line1"></div>
        <Component images={jalImages} />
      </div>

      <div className='section-heading'><h1>Free dental camp for specially-abled children to promote healthy smiles</h1></div>
      <div class="line2"></div>
      <div className='section2'>
        <p> At Arcgate Foundation, we care about the oral health and well-being of our community. That's why we supported a free dental camp in collaboration with the Udaipur Dental Clinic for specially-abled children and those who need extra help.</p>
        <p>The camp provided dental check-ups, treatments, and education to hundreds of children who otherwise would not have access to quality dental care.</p>
        <p>We are proud to be part of this initiative and to make our city a better place to live and work. We hope that our efforts will inspire others to join us in making a positive difference in our community. Together, we can create a more beautiful and livable city for ourselves and future generations.</p>
        <Component images={campImages} className="campImage" />
      </div>

      <div className='section3'>
        <h1>Helping save newborn lives with advanced NICU equipment</h1>
        <div class="line3"></div>
        <Paragraph paragraph="Arcgate Foundation donated several advanced NICU machines to Bhandari Children Hospital in Udaipur, a leading facility for neonatal care in the region. NICU machines are essential equipment for the survival and well-being of premature and critically ill newborns. They include neonatal incubators and ventilators." />
        <Paragraph paragraph="These machines help regulate the temperature, oxygen level, breathing, feeding and infection control of the babies in the NICU. With these machines, the hospital can provide better care and outcomes for the most vulnerable patients." />
        <Paragraph paragraph="We are honored to support Bhandari Children Hospital in their mission to save lives and improve the health of newborns. We believe that every child deserves a chance to grow and thrive. We hope that our contribution will make a difference in the lives of many children, families and communities." />
        <Component images={helpImages} />
      </div>

      <div className='section-heading'><h1>Supporting the Hindustan Scouts & Guides in their quest for excellence</h1></div>
      <div class="line4"></div>
      <div className='section2'>
        <p> At Arcgate Foundation, we value the spirit of adventure and service that the Hindustan Scouts & Guides embody. That's why we are proud to support this organization, which has been nurturing the youth of India since 1951..</p>
        <p>The Hindustan Scouts & Guides offer various programs and activities that help young people develop their physical, mental, and social skills, as well as their sense of responsibility and citizenship.</p>
        <p>They also encourage them to explore nature, culture, and heritage, and to contribute to the welfare of society. We are honored to be part of their mission and to help them shape the future leaders of India..</p>
        <Component images={saveImages} className="campImage" />
      </div>


      <div className='section4'>
        <h1>Celebrating the legacy of music maestro Pt. Chatur Lal with Smritiyaan</h1>
        <div class="line5"></div>
        <Paragraph paragraph="We are passionate about preserving and promoting the rich heritage of Indian Classical Music. That's why Arcgate Foundation is proud to support Smritiyaan, a concert dedicated to the memory and achievements of Pt. Chatur Lal, the legendary tabla maestro who introduced Indian percussion to the world." />
        <Paragraph paragraph="Smritiyaan featured some of the finest artists of Indian Classical Music, who paid tribute to Pt. Chatur Lal's musical genius and innovation. The concert showcased the diversity and beauty of Indian Classical Music, and inspired the next generation of musicians and listeners." />
        <Paragraph paragraph="We are honored to be part of this initiative and to celebrate the legacy of Pt. Chatur Lal with Smritiyaan. We hope that our support will help preserve and promote the rich tradition of Indian Classical Music and its eminent exponents." />
        <Component images={functionImages} />

      </div>

      <div className='sections-heading'><h1>Supporting the spirit of sportsmanship with the All India Master (Veteran) National Badminton Championships 2022-2023</h1></div>
      <div class="line6"></div>
     <div className='section5'>
        <p> Arcgate Foundation believes in supporting the sports community and encouraging healthy and active lifestyles. We are honored to have sponsored the All India Master (Veteran) National Badminton Championships 2022-2023, a prestigious tournament that showcases the talent and passion of veteran badminton players from across the country.</p>
        <p>The tournament was held from January 17th to January 23rd, 2023, and featured some of the best players in various age categories.</p>
        <p>We supported the tournament's by contributing towards lodging, boarding, prize money, shuttlecocks, tent/other infrastructure, and also motivated the players and organizers with our presence and appreciation. We are honored to be part of this initiative and to support the spirit of sportsmanship with the All India Master (Veteran) National Badminton Championships 2022-2023..</p>
      </div>


      <div className='section4'>
        <h1>Giving back to the community with government school building project</h1>
        <div class="line7"></div>
        <Paragraph paragraph=" Arcgate Foundation took up a project to repair and beautify the school building of Government Senior Secondary School Sisarma, Udaipur." />
        <Paragraph paragraph="We fixed structural damages, painted walls with bright and cheerful colors, installed new furniture and equipment, and landscaped the school grounds. We undertook this project as a way of fulfilling our social obligations and commitments to support education and student safety in the community, as well as to improve the appearance and functionality of the school premises." />
        <Paragraph paragraph=" The school staff and students were very happy and thankful for our generous contribution, which has made their learning environment better and more attractive. We are proud to share our values and expertise with the community and hope to inspire more students to pursue careers in technology and innovation." />
        <Component images={communityImages} />

      </div>


      <div className='sections-heading'><h1>Helping upgrade the Gram Panchayat Office for Sisarma Village</h1></div>
      <div class="line8"></div>
      <div className='section6'>
        <p> We believe in supporting rural development and governance initiatives that can improve the lives and livelihoods of millions of people in India. That's why we decided to take up a rewarding project to repair and renovate the Gram Panchayat office for Sisarma village in Udaipur, Rajasthan.</p>
        <p>We upgraded and expanded the existing building with all the necessary facilities and amenities for the village administration and the public. We did this project to support the region's development goals and to demonstrate our commitment to social responsibility.</p>
        <p>The village leaders and residents were very happy and thankful for our generous contribution, which has made their quality of life and civic engagement better. They appreciated our efforts to provide them with a modern and comfortable space for conducting their affairs and accessing various government schemes and services. We are proud to share our values and expertise with the rural community and hope to empower more villagers to access digital services and opportunities that can enhance their well-being and prosperity.</p>
        <Component images={placeImages} />
      </div>


      <div className='section4'>
        <h1>Supporting Usanas Foundation’s efforts to promote geopolitics dialogue</h1>
        <div class="line9"></div>
        <Paragraph paragraph=" We are honored to support Usanas Foundation's flagship event, the Maharana Pratap Annual Geopolitics Dialogue 2023 (MPAGD). Usanas Foundation is a geopolitics and security affairs organization based out of Udaipur, India. It is an emerging think tank, started with the motivation and the idea of bringing International Relations, Diplomacy, and National Security discourse beyond the national capital to the small cities of India. It was a privilege for us at Arcgate Foundation to be part of such a remarkable gathering, and partner with an esteemed organization." />
        <Paragraph paragraph="It was an enlightening and stimulating experience, where experts and stakeholders from various fields explored India's role in the changing world order. Some of the eminent speakers included H.E. Mrs. Kolinda Grabar Kitarovic, former President of Croatia; H.E Amb. Naor Gilon Ambassador of Israel to India, Sri Lanka, and Bhutan; H.E. Amb. Dimitrios Ioannou, Ambassador of Greece to India; and H.E Amb. Mohammed Maliki, Ambassador of the Kingdom of Morocco to India." />
        <Paragraph paragraph="They discussed the security, economic and diplomatic roadmap for India to navigate through the geopolitical shifts and transformations and reclaim its leadership role in the new world order. The insights from the event were invaluable and eye-opening, and they reinforced our belief in the importance of dialogues on pressing geopolitical issues. " />
        <Paragraph paragraph=" By facilitating discussions among distinguished delegates from diverse backgrounds, MPAGD 2023 has immense potential in shaping India's strategic, intelligence, and foreign policy discourse." />
        <Paragraph paragraph=" Events like MPAGD are making significant progress in bringing together experts, policymakers, and thought leaders to address the geopolitical challenges of our time. One of these challenges is how to leverage the potential of emerging technologies and innovation for sustainable development. India is known as the IT powerhouse of the world, which has given the country a distinctive identity. Under the leadership of PM Modi, there has been a stronger focus on economic development and a vision of making India a $5 trillion economy by 2025. We believe that by supporting such events, we contribute to the development of a more informed, inclusive, and collaborative global community." />
        <Paragraph paragraph=" We are proud to see the impact of our support in fostering meaningful discussions, promoting networking opportunities, and elevating the visibility of important issues in the public sphere." />
        <Paragraph paragraph=" We are delighted to be associated with Usanas Foundation and commend its commitment to promoting critical thinking, analysis, and the exploration of India's rich historical legacy in the context of contemporary geopolitics." />
        <Component images={foundationImages} />

      </div>

      <div className='section7-heading'><h1>Supporting Vidya Bhawan Society's Mission of Empowering Students Through Education</h1></div>
      <div class="line10"></div>
      <div className='section7'>
        <p> We are proud to support Vidya Bhawan Society and their invaluable work in empowering students through education. We are particularly thankful for the opportunity to assist them during the lockdown by supporting their CSR funds.</p>
        <p>At Arcgate Foundation, we strongly believe in the power of education. We share Vidya Bhawan Society's vision of providing equal opportunities to students, especially those from modest backgrounds, to unlock their potential and shape their futures. Education empowers individuals to overcome barriers, break cycles of poverty, and contribute positively to society.</p>
        <p>We understand the impact of the lockdown caused by the recent pandemic on educational institutions and students. We supported Vidya Bhawan Society's CSR funds to ensure that deserving students do not face any loss or interruption in their education. We know that access to quality education is crucial for their growth and prospects, and we are proud to be part of making that possible.</p>
        <p>The pandemic presented unprecedented challenges, affecting communities and organizations worldwide. However, it has also shown the importance of collaboration, compassion, and collective action. By joining hands with Vidya Bhawan Society, we have contributed to their noble and inspiring mission of empowering students and promoting education as a catalyst for change.</p>
        <p>We believe that supporting organizations like Vidya Bhawan Society is not only a responsibility but also a privilege. We are committed to making a meaningful and positive impact in society. By investing in education, we invest in the future of our communities, fostering a brighter and more inclusive world for generations to come.</p>
        <p>We appreciate and admire Vidya Bhawan Society for the vital work they do and for giving us the opportunity to be part of their journey. We are proud and honored to support Vidya Bhawan Society's vision of empowering students through education, and we remain committed to making a positive and lasting impact in our shared pursuit of a brighter future.</p>
        <Component images={supportImages} />
      </div>

      <div className='section8'>
        <h1>Supporting a Surgical Camp for the Underprivileged</h1>
        <div class="line11"></div>
        <Paragraph paragraph=" We had the privilege to support a surgical camp that catered to the medical needs of underprivileged individuals at Ram Van Kutir. In the face of the daunting challenges presented by the Covid-19 pandemic, the camp successfully provided vital medical assistance to the patients, who were carefully chosen after rigorous testing and stringent precautions. The camp strictly adhered to the guidelines issued by the authorities, ensuring the utmost safety and well-being of all involved." />
        <Paragraph paragraph="Our deepest appreciation and utmost admiration goes out to Dr. J.K. Chhaparwal and his team of remarkable doctors, whose visit to Ram Van Kutir was marked by their extraordinary dedication, expertise, and empathy. Their noble work has had a profound positive impact on the lives of countless individuals, who now have renewed hope for a brighter future." />
        <Paragraph paragraph="We take great pride in our support and sponsorship of this surgical camp and extend our wholehearted commendation to Ram Van Kutir and the exceptional team led by Dr. J.K. Chhaparwal. By working together, we will persist in creating a positive impact on people's lives, aiming for a society where every individual can thrive. " />
        <Component images={surgicalImages} />
      </div>

      <div className='sections-heading'><h1>Provided support to Sisarma Government Hospital</h1></div>
      <div class="line12"></div>
      <div className='section5'>
        <p> We helped install new gates at the Sisarma Government Hospital, a facility that serves the less privileged.</p>
        <p>The new gates will help create a safe and welcoming environment for patients, their families, and the hardworking healthcare professionals at Sisarma Government Hospital. We believe that everyone deserves access to quality healthcare, no matter their socio-economic background.</p>
        <p>We hope to support the hospital's mission of providing excellent and compassionate healthcare services to the less fortunate.</p>
      </div>


      <div className='section9'>
        <h1>Building Chess Champions - Supporting the Udaipur District Chess Association</h1>
        <div class="line13"></div>
        <Paragraph paragraph="We are delighted to announce our support and sponsorship for the Udaipur District Chess Association, a non-profit organization that promotes the game of chess and its educational benefits. Chess is a game that challenges the mind, develops logical thinking, and fosters creativity. It also teaches valuable life skills such as patience, concentration, and sportsmanship." />
        <Paragraph paragraph="The Udaipur District Chess Association organizes various chess events and activities for players of all ages and levels. They also provide coaching, training, and mentoring for aspiring chess players. They aim to create a vibrant chess community that nurtures talent and passion for the game." />
        <Paragraph paragraph="We are proud to be part of this initiative and to contribute to the growth and development of chess in Udaipur district. We believe that chess is not only a game, but also a way of life that can enrich and empower everyone. We hope that our support will help the Udaipur District Chess Association achieve its vision and mission of spreading the joy of chess. " />
      </div>

      <div className='sectionss-heading'><h1>Supporting Udaipur Tales International Storytelling Festival</h1></div>
      <div class="line14"></div>
      <div className='sections'>
        <p> We value storytelling and its power to inspire and connect people and cultures. We are honored to support the Udaipur Tales International Storytelling Festival, a three-day event that celebrates the art and impact of storytelling.</p>
        <p>The festival featured storytellers from across the globe, who shared their stories of adventure, romance, mystery, and more. The festival also showcased folk-art performances, fusion musical forms, and an exclusive children's segment. Some of the highlights of the festival were the stories by renowned actor Vinay Pathak, cinestar Sushmita Mukherjee, and Sufi singers Roohani Sisters..</p>
        <p>By supporting this festival, we actively participated in the preservation and promotion of storytelling as an art form. We were proud to be part of an event that encouraged storytellers to share their unique tales, preserving cultural heritage and passing down wisdom to future generations.</p>
        <p>We are dedicated to supporting initiatives that strengthen communities, inspire creativity, and spread joy. Through our support, we hope to motivate individuals to explore the world of storytelling, unleash their own creative potential, and discover the transformative power of narratives.</p>
        <p>Udaipur Tales International Storytelling Festival is giving a platform for storytellers to excel and for enriching our world with their wonderful tales.</p>
        <Component images={festivalImages} />
      </div>

      {/* <div class="boxAnimation animated" style="transition-delay:100ms;-webkit-transition-delay:100ms">
      <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
      <div class="swiper-wrapper" id="swiper-wrapper-ff1961035b0a7e06b" aria-live="polite" style="transition-duration: 0ms;">
      <div class="swiper-slide swiper-slide-prev" role="group" aria-label="1 / 3" style="width: 375.333px;">
      <div style="background-image:url(/images/foundation/large/uit01.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;height:251px;width:360px;overflow:hidden;border-radius:10px;margin-left:auto;margin-right:auto">
      <a data-fancybox="uit-circle" href="/images/foundation/large/uit01.jpg">
      <img alt="Arcgate Foundation" loading="lazy" width="2000" height="2000" decoding="async" data-nimg="1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit01.jpg&amp;w=2048&amp;q=75 1x, /_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit01.jpg&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit01.jpg&amp;w=3840&amp;q=75"/></a></div>
      </div><div class="swiper-slide swiper-slide-active" role="group" aria-label="2 / 3" style="width: 375.333px;">
      <div style="background-image:url(/images/foundation/large/uit02.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;height:251px;width:360px;overflow:hidden;border-radius:10px;margin-left:auto;margin-right:auto">
      <a data-fancybox="uit-circle" href="/images/foundation/large/uit02.jpg">
      <img alt="Arcgate Foundation" loading="lazy" width="2000" height="2000" decoding="async" data-nimg="1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit02.jpg&amp;w=2048&amp;q=75 1x, /_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit02.jpg&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit02.jpg&amp;w=3840&amp;q=75"/></a></div></div>
      <div class="swiper-slide swiper-slide-next" role="group" aria-label="3 / 3" style="width: 375.333px;">
      <div style="background-image:url(/images/foundation/large/uit03.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;height:251px;width:360px;overflow:hidden;border-radius:10px;margin-left:auto;margin-right:auto">
      <a data-fancybox="uit-circle" href="/images/foundation/large/uit03.jpg">
      <img alt="Arcgate Foundation" loading="lazy" width="2000" height="2000" decoding="async" data-nimg="1" style="color:transparent" srcset="/_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit03.jpg&amp;w=2048&amp;q=75 1x, /_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit03.jpg&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Ffoundation%2Flarge%2Fuit03.jpg&amp;w=3840&amp;q=75"/></a></div></div></div>
      <div class="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-ff1961035b0a7e06b" aria-disabled="true"></div>
      <div class="swiper-button-next swiper-button-disabled" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-ff1961035b0a7e06b" aria-disabled="true"></div>
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span>
      <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
      <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span></div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div></div> */}

<div className='footer'>
  <p> Copyright © 2023. All rights reserved</p>
</div>
    </div>
  );

}

export default App;


















