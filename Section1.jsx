import React from "react";
import bg from "../Assets/7.avif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../Component/Section1.css'

const Section1 = () => {
  return (
    <div className="section1" style={{ minHeight: "85vh", width: "100%", overflow: "hidden" }}>
      <Container>
        <Row className="">
          <Col md={6} xs={12} className="">
          <img
                src={bg}
                alt="#"
                className="bg mt-5"
                style={{
                  objectFit: "cover",
                width:'80%'
             
                }}
              />
          </Col>

          <Col md={6} xs={12} className="mt-5">
            <div data-aos="fade-left" data-aos-duration="3000">
              <h1 style={{ fontSize: "40px" }}>About us</h1>

              <h4 className="mt-3">
                "Embrace Wellness at Herbo Care Hospital"
              </h4>
              <p className="mt-3">
                Step into a realm where nature's healing touch meets
                compassionate care. At Herbo Care Hospital, we believe in the
                profound potential of herbal medicine to restore balance,
                rejuvenate spirits, and inspire lasting wellness. Guided by a
                philosophy rooted in holistic healing, our dedicated team of
                healers and practitioners is committed to guiding you on a path
                of vitality and vitality. Let us empower you to embrace health
                naturally and rediscover the joy of living fully. Together,
                let's embark on a journey towards a healthier, happier you at
                Herbo Care Hospital.
              </p>

              <button
                style={{ padding: "4px 30px", borderRadius: "5px" }}
                className="mt-2"
              >
                Read more
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
