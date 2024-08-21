import React from "react";
import vid from "../Assets/home.mp4";
import call from "../Assets/call.webp";

import Container from "react-bootstrap/Container";
import banner from "../Assets/WEB ICONS-06.png";
import '../Component/Banner.css'

// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banners"
      style={{
        minHeight: "160vh",
        position: "relative",
      overflow:'hidden',
        top: "0",
        left: "0",
        color: "white",
      }}
    >
      <div
        className="videos"
        style={{
          position: "absolute",
          top: "0",
          zIndexz: "-10",
          left: "0",
          right: "0",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            filter: "blur(4px)",
            width: "100%",
            zIndex: "-999",
            minHeight: "125vh",
            objectFit: "cover"
          }}
        >
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div
        style={{
          zIndex: "5",
          position: "absolute",
          top: "250px",
          margin: "auto",
          width: "100%",
          borderRadius: "0px 100px 10px 0px",
        }}
      >
        <Container>
          <h6 className="mx-5" style={{}}>
            Welcome to Ayurvedha World !
          </h6>

          <h1 className="mt-2" style={{ fontSize: "70px" }}>
            Admist yourself <br /> into the world of <br /> <b>Ayurvedha</b>
          </h1>

          <button
            className="mt-3 calling"
            style={{
              padding: "4px 25px",
              borderRadius: "5px",
              fontFamily: "poppins",
            }}
          >
            Appointment
          </button>
        </Container>
       
      </div>


      <div className="banner1 text-center"
        style={{
          zIndex: "10",
          position: "absolute",
          bottom:'88px',
          margin: "auto",
          width: "100%",
          color:"black"
          
          
        }}
      >
        <Container  style={{
          
          borderRadius:'10px',
          boxShadow:'1px 1px 10px 1px gray',
          backgroundColor:'white',
        }}>
          <div className="banner ">
          <div>
          <img src={banner} alt="@" style={{width:'70%'}}/>
          <h5>Herbal</h5>

          </div>
          <div>
          <img src={banner} alt="@" style={{width:'70%'}}/>
          <h5>Herbal</h5>
          </div>
          <div>
          <img src={banner} alt="@" style={{width:'70%'}}/>
          <h5>Herbal</h5>
          </div>
          <div>
          <img src={banner} alt="@" style={{width:'70%'}}/>
          <h5>Herbal</h5>
          </div>
          <div>
          <img src={banner} alt="@" style={{width:'70%'}}/>
          <h5>Herbal</h5>
          </div>
          <div>
          <img src={banner} alt="@" style={{width:'70%'}}/>
          <h5>Herbal</h5>
          </div>
          </div>

          
      
        </Container>
       
      </div>
      <div style={{}}>
        <img src={call} alt="#" className="call" style={{borderRadius:'100px',width:'6%',position:'fixed',top:'550px',right:"0",translate:'-50% -50%',zIndex:'20'}} />
      </div>
      
    </div>
  );
};

export default Banner;
