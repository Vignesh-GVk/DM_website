import React from "react";
import '../Component/Foot.css'
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import banner from "../Assets/banner-logo.png";
import Container from "react-bootstrap/esm/Container";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Foot = () => {
  return (
    <div className=" ">
      <div style={{ backgroundColor: "black" }}></div>
      <Container>
        <Row className="mt-5">
          <Col md={3} xs={12} className="topic mt-3 ">
            <img src={banner} alt="#" style={{ width: "100px" }} />
            <h3  style={{ fontFamily: "fantasy" }}>Herbocare</h3>


            <h6 className="mt-3">Follow Us</h6>

            <div className=" " style={{color:"black"}}>
              <a href="home">
                <FaFacebook
                  className="icons facebook mx-1 "
                
                />
              </a>
              <a href="home">
                <FaTwitter className="icons twitter  mx-1  " />
              </a>
              <a href="home">
                <FaInstagram className="icons instagram mx-1 " />
              </a>
              <a href="home">
                <FaLinkedinIn className="icons linkdin mx-1" />
              </a>
            </div>
          </Col>

          <Col md={3} sm={3} className="contact  mt-4">
            <h4 style={{fontFamily:'initial'}}> ContactUs</h4>
            <div className="mt-4" style={{ lineHeight: "30px" }}>
              <p>9 AM to 9 PM</p>
              <p>
              
                <b>Phone:</b> +91 67832046384
              </p>
              <p>
           
                <b> Email:</b> cf@gmail.com
              </p>
            </div>
            <div
              className=" mt-3"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            ></div>
          </Col>

          <Col className="text-start links  mt-4" md={3} sm={3}>
            <h4 className="text-start" style={{ textAlign: "left" }}>
              Useful Links
            </h4>

            <div
              className="text-start mt-4 link text-light"
              style={{
                listStyleType: "none",
                textDecorationLine: "none",
                lineHeight: "35px",
                textAlign: "left",
              }}
            >
              <address
                className="mt-4 h6 text-dark"
                style={{ lineHeight: "32px" }}
              >
                Home <br></br>
                About <br></br>
                Branches<br/>
                Doctors
              </address>
              {/* <link to='/' className='h6' style={{ color: "black" }}> Home</link> <br></br>
                            <link to='/about' className='h6' style={{ color: "black" }}> About</link>  <br></br>
                            <link to='/course' className='h6' style={{ color: "black" }}> Course</link>  <br></br> */}
            </div>
          </Col>
          <Col
            className="text-start address  mt-4"
            md={3}
            Container
            style={{ textAlign: "left" }}
          >
            <h4> Address</h4>
            <div>
              <address className="mt-4 h6" style={{ lineHeight: "32px" }}>
                No 123, <br></br>
                Kodambakkam <br></br>
                chennai <br></br>
                TamilNadu 600000.
              </address>
            </div>
          </Col>
        </Row>
        {/* <div className='arr'>
                    <a href='#banner'><img src={arrow} alt='#' className='bg-dark' style={{ width: '40px', color: 'whitesmoke', marginLeft: "1180px" }} /></a>
                </div> */}
      </Container>

      <div className="text-center rights bg-light text-dark ">
        <p className=" mt-5"> © Copyright All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Foot;
