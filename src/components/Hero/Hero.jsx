import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import reactLogo from '../../images/reactjs-icon.svg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <div className="background_circle" />

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Front-end Mobile App\n & Web Developer.'} <br />
            <div className="subtitle">
              {subtitle ||
                "Hi, I'm Ridwan Ajibola. A react and react-native developer focused on building responsive cross-platform mobile applications that look the same across various devices and have buttery-smooth user experience."}
            </div>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Link to="projects" smooth duration={1000}>
            <div className="hero-cta button">
              <div className="circle-button" />
              <span className="cta-text">{cta || 'see my works'}</span>
            </div>
          </Link>
        </Fade>

        <div className="bottom-links">
          <a href="http://github.com/rajibola">
            <span>Github</span>
          </a>
          <span className="divider">/</span>
          <a href="#">
            <span>LinkedIn</span>
          </a>
        </div>
      </Container>
      <Container>
        <h1 className="logo-container">
          <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <img src={reactLogo} className="react-logo" />
          </Fade>
          <Fade top={isDesktop} bottom={isMobile} duration={1500} delay={400} distance="30px">
            <Bounce top={isDesktop} bottom={isMobile} duration={2000} delay={700} distance="30px">
              <div className="my-name">RA</div>
            </Bounce>
          </Fade>
        </h1>
      </Container>
      <Fade>
        <Link to="about">
          <div className="button vertical">
            <span className="cta-text">scroll down</span>
          </div>
        </Link>
      </Fade>
    </section>
  );
};

export default Header;
