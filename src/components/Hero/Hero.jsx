import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import reactLogo from '../../images/reactjs-icon.svg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { cta } = hero;

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
                Hi, I&apos;m <b>Abdulwasiu Muiz</b> . An enthusiastic react and react-native
                developer with robust problem-solving skills, focused on building responsive
                cross-platform mobile applications that look the same across various devices and
                have buttery-smooth user experience.
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
            <a href="http://github.com/AOMuiz">
              <span>Github</span>
            </a>
            <span className="divider">/</span>
            <a href="https://linkedin.com/in/abdulmuize-abdulwasiu">
              <span>LinkedIn</span>
            </a>

            <span className="divider">/</span>
            <a href="https://drive.google.com/file/d/19Al4HvuQbTjoiRZC-msaoVX01a92BvOT/view?usp=sharing">
              <span>CV</span>
            </a>
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <h1 className="logo-container">
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <img src={reactLogo} className="react-logo" alt='logo/>
            </Fade>
            <Jump top={isDesktop} bottom={isMobile} duration={1500} delay={800} cascade>
              <div className="my-name">AOM</div>
            </Jump>
          </h1>
        </Container>
      </div>
    </section>
  );
};

export default Header;
