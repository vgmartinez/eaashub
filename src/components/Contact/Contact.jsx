/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/"
            >
              <p>
                <label>Your Name</label>
              </p>
              <p>
                <label>
                  <input type="text" name="name" style={{ width: '300px' }} />
                </label>
              </p>
              <p>
                <label>Your Email</label>
              </p>
              <p>
                <label>
                  <input type="email" name="email" style={{ width: '300px' }} />
                </label>
              </p>
              <p>
                <label>Message</label>
              </p>
              <p>
                <label>
                  <textarea name="message" style={{ width: '300px' }} rows="6" />
                </label>
              </p>
              <p>
                <button className="cta-btn" type="submit">
                  Let's Talk
                </button>
              </p>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
