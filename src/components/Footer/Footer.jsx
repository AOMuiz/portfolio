import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import { Link as GatsbyLink } from 'gatsby';

const Footer = () => {
  // const { footer } = useContext(PortfolioContext);
  // const { networks } = footer;
  // const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Fade delay={500}>
        <div className="big-circle" />
      </Fade>

      <Container>
        <Fade top>
          <h2 className="together">Let&apos;s work together.</h2>
        </Fade>

        <h2 className="available">
          I&apos;m available for full-time, freelance and contract work.
        </h2>

        <div className=" vertical">
          <Fade top delay={400}>
            <a href="mailto: abdulwasiumuiz@gmail.com">
              <GatsbyLink smooth>
                <div className="buttonTwo">
                  <div className="circle" />
                  say hello
                </div>
              </GatsbyLink>
            </a>
          </Fade>
        </div>

        <div className="flex">
          <span>© Abdulwasiu Mui&lsquo;z 2020</span>
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

              <a href={'https://github.com/AOMuiz'} rel="noopener noreferrer" target="_blank">
                <i className={`fa fa-${'github' || 'refresh'} fa-inverse`} />
              </a>
              <a
                href={'https://linkedin.com/mwlite/in/abdulmuize-abdulwasiu'}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className={`fa fa-${'linkedin' || 'refresh'} fa-inverse`} />
              </a>
            </div>
          </Fade>
        </div>
      </Container>
      <Roll cascade>
        <div className="lined-circle">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (_, i) => (
              <div className="hr-line" key={i} />
            )
          )}
        </div>
      </Roll>
    </footer>
  );
};

export default Footer;
