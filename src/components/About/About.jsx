import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import { Link } from 'react-scroll';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="My Skills" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={1500} distance="30px">
              <div className="js-container">
                <div className="js">JS</div>
              </div>
            </Fade>
          </Col>

          <Col md={6} sm={12}>
            {skillsData.map(({ name, percent }) => {
              return <ListComponent name={name} percent={percent} />;
            })}
          </Col>
        </Row>

        <div className=" vertical">
          <Fade right delay={500}>
            <Link to="projects" smooth>
              <div className="buttonTwo">scroll down</div>
            </Link>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default About;

const ListComponent = ({ name, percent }) => {
  return (
    <Fade left cascade delay={400}>
      <div style={{ alignItems: `center`, height: `5rem` }}>
        <div className="list-name">
          <div>{name}</div>
        </div>
      </div>
    </Fade>
  );
};

const skillsData = [
  { name: 'JavaScript', percent: 75 },
  { name: 'React-Native', percent: 90 },
  { name: 'React', percent: 85 },
  { name: 'Gatsby', percent: 60 },
  { name: 'Unit Testing', percent: 55 },
  { name: 'HTML', percent: 80 },
  { name: 'CSS', percent: 95 },
];
