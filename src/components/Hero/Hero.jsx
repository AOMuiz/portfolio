import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
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
      <div>
        <Container>
          <div className="background_circle" />

          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              react-native & react{'\n'}Developer. <br />
              <div className="subtitle">
                Hi, I'm Ridwan Ajibola. A react and react-native developer focused on building
                responsive cross-platform mobile applications that look the same across various
                devices and have buttery-smooth user experience.
              </div>
            </h1>

            {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px"> */}
            <Link to="projects" smooth duration={1000}>
              <div className="hero-cta button">
                <div className="circle-button" />
                <span className="cta-text">{cta || 'see my works'}</span>
              </div>
            </Link>
            {/* </Fade> */}
          </Fade>

          <div className="bottom-links">
            <a href="http://github.com/rajibola">
              <span>Github</span>
            </a>
            <span className="divider">/</span>
            <a href="https://linkedin.com/mwlite/in/ridwan-ajibola-a10616191">
              <span>LinkedIn</span>
            </a>

            <span className="divider">/</span>
            <a href="https://https://docs.google.com/document/d/1fBn2vGhPgkVmyYUSFGTnM4IbBk1GfyyV">
              <span>CV</span>
            </a>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <h1 className="logo-container">
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <img src={reactLogo} className="react-logo" />
            </Fade>
            <Jump top={isDesktop} bottom={isMobile} duration={1500} delay={800} cascade>
              <div className="my-name">RA</div>
            </Jump>
          </h1>
        </Container>
      </div>
      <div className=" vertical">
        <Fade right delay={1000}>
          <Link to="about" smooth>
            <div className="buttonTwo">my skills</div>
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Header;
