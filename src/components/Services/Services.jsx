import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Services = () => {
  const { services } = useContext(PortfolioContext);
  const { servicesOne, servicesTwo, servicesThree, servicesFour } = services;

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
    <section id="services">
      <Container>
        <div className="service-wrapper">
          <Title title="Services" />
          <Row>
            <Col md={3} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <h3 style={{ fontWeight: 'bold', fontSize: '2,5rem', marginBottom: '10px' }}>
                  Cloud Economics
                </h3>
                <div className="service-wrapper__info">
                  <p className="service-wrapper__info-text" style={{ marginBottom: '30px' }}>
                    {servicesOne || ''}
                  </p>
                </div>
              </Fade>
            </Col>
            <Col md={3} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <h3 style={{ fontWeight: 'bold', fontSize: '2,5rem', marginBottom: '10px' }}>
                  Architecture Design
                </h3>
                <div className="service-wrapper__info">
                  <p className="service-wrapper__info-text" style={{ marginBottom: '30px' }}>
                    {servicesTwo || ''}
                  </p>
                </div>
              </Fade>
            </Col>
            <Col md={3} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <h3 style={{ fontWeight: 'bold', fontSize: '2,5rem', marginBottom: '10px' }}>
                  Bodyguard
                </h3>
                <div className="service-wrapper__info">
                  <p className="service-wrapper__info-text" style={{ marginBottom: '30px' }}>
                    {servicesThree || ''}
                  </p>
                </div>
              </Fade>
            </Col>
            <Col md={3} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <h3 style={{ fontWeight: 'bold', fontSize: '2,5rem', marginBottom: '10px' }}>
                  MVP
                </h3>
                <div className="service-wrapper__info">
                  <p className="service-wrapper__info-text" style={{ marginBottom: '30px' }}>
                    {servicesFour || ''}
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Services;
