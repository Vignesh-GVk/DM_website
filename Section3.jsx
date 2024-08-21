import React from "react";
import '../Component/Section3.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import banner1 from "../Assets/panchkarma.png";
// import banner2 from "../Assets/agni.png";
import banner3 from "../Assets/karma.png";

const Section3 = () => {
  return (
    <div className="section3" style={{ minHeight: "70vh", backgroundColor: "#f9f9f9" }}>
      <Container fluid>
        <h1 className="text-center ">Experince holistic healing</h1>

        <Row className="mt-4" >
          <Col md={4} xs={12}>
            <img src={banner3} alt="#" style={{ width: "100%" }} />
          </Col>
          <Col   md={8} xs={12} className="mt-5 holistic">
            <Container>
              <Row>
                <Col md={6} xs={12} className="">
                  <Container>
                    <Row>
                      <Col md={4}>
                        <img
                          className="mx-5"
                          src={banner1}
                          alt="#"
                          style={{ width: "50%" }}
                        />
                      </Col>
                      <Col md={7}>
                        <h6 className="fw-bold">AYURVEDHA</h6>
                        <p className="">
                          Step into a realm where nature's healing touch 
                        
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col md={6} xs={12} className="">
                  <Container>
                    <Row>
                      <Col md={4}>
                        <img
                          className="mx-5"
                          src={banner1}
                          alt="#"
                          style={{ width: "50%" }}
                        />
                      </Col>
                      <Col md={7}>
                        <h6 className="fw-bold">SIDHA</h6>
                        <p className="">
                        Step into a realm where nature's healing touch 
                        
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col md={6} xs={12} className="mt-4">
                  <Container>
                    <Row>
                      <Col md={4}>
                        <img
                          className="mx-5"
                          src={banner1}
                          alt="#"
                          style={{ width: "50%" }}
                        />
                      </Col>
                      <Col md={7}>
                        <h6 className="fw-bold">HOMEOPATHY</h6>
                        <p className="">
                        Step into a realm where nature's healing touch 
                        
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col md={6} xs={12} className="mt-4">
                  <Container>
                    <Row>
                      <Col md={4}>
                        <img
                          className="mx-5"
                          src={banner1}
                          alt="#"
                          style={{ width: "50%" }}
                        />
                      </Col>
                      <Col md={7}>
                        <h6 className="fw-bold">YOGA</h6>
                        <p className="">
                        Step into a realm where nature's healing touch 
                        
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col md={6} xs={12} className="mt-4">
                  <Container>
                    <Row>
                      <Col md={4}>
                        <img
                          className="mx-5"
                          src={banner1}
                          alt="#"
                          style={{ width: "50%" }}
                        />
                      </Col>
                      <Col md={7}>
                        <h5 className="fw-bold">Naturopathy</h5>
                        <p className="">
                        Step into a realm where nature's healing touch 
                        
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col md={6} xs={12} className="mt-4">
                  <Container>
                    <Row>
                      <Col md={4}>
                        <img
                          className="mx-5"
                          src={banner1}
                          alt="#"
                          style={{ width: "50%" }}
                        />
                      </Col>
                      <Col md={7}>
                        <h6 className="fw-bold">PANCHA KARMA</h6>
                        <p className="">
                        Step into a realm where nature's healing touch 
                        
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
