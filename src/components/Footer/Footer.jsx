import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import { Link as GatsbyLink } from 'gatsby';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  // const { footer } = useContext(PortfolioContext);
  // const { networks } = footer;
  // const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Fade delay={1000}>
        <div className="big-circle" />
      </Fade>

      <Container>
        <Fade top>
          <h2 className="together">Let's work together.</h2>
        </Fade>

        <h2 className="available">I'm available for full-time, freelance and contract work.</h2>

        <div className=" vertical">
          <Fade top delay={500}>
            <a href="mailto: rajibola1997@gmail.com">
              <GatsbyLink smooth>
                <div className="buttonTwo">
                  <div className="circle" />
                  say hello
                </div>
              </GatsbyLink>
            </a>
          </Fade>
        </div>
        <hr />

        <div className="flex">
          <span>© Ridwan Ajibola 2020</span>
          <div className="line" />
          <Fade cascade>
            <div className="social-links">
              {/* {contactData.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a

                      href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                  );
                })} */}
            </div>
          </Fade>
        </div>
      </Container>
      <div className="lined-circle">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (item) => (
            <div className="hr-line" />
          )
        )}
      </div>
    </footer>
  );
};

export default Footer;

const contactData = [
  {
    name: 'map-marker',
    label: `21 Revolution Street `,
    country: 'Paris, France',
  },
  {
    name: 'phone',
    label: '+234 810 755 2523',
  },
  {
    name: 'envelope',
    label: 'rajibola@gmail.com',
  },
];
