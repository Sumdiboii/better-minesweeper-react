import React from 'react';
import './testimonials-page.css'; // We'll style it separately
import Stars from '../components/loader-components/stars';
import BackFP from '../components/freeplay components/backFP';
import InfiniScrollerSP from '../components/home-access-components/testimonial-slider';
import MessageBox from '../components/home-access-components/message-box';

const TestimonialsPage = () => {
  return (
    <div className="tms-box">
      <Stars /> 
      <div className="main-cont1-tms">
        <div className="top-cont1-tms">
          <div className="back-btn-wrapper-tms">
          <BackFP />
          </div>
          <img src='assets/tms.png'></img></div>
        <div className="bottom-cont1-tms">
            <div className="leftcontbox-tms">
              <div className="pic-box"><img src='assets/ghiblisumdiboii.png'></img></div>
              <div className="socials-box-sp">
  <a
    href="https://www.linkedin.com/in/SumedhPimplikar"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-link"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a
    href="https://wa.me/YOUR-NUMBER"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-link"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
  <a
    href="https://your-portfolio.com"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-link"
  >
    <i className="fas fa-user-circle"></i>
  </a>
</div>

              </div>
              <div className="midcontbox-tms">
                <div className="midcontbox-tms-top"><img src='assets/drop.png'></img></div>
                <div className="midcontbox-tms-bottom"><MessageBox /></div>
              </div>
              <div className="rightcontbox-tms"><InfiniScrollerSP /></div>
              
            
            
        </div>
    </div>
    </div>
  );
};

export default TestimonialsPage;
