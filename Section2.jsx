import React from "react";
import banner from "../Assets/ayurvedha.avif";
import logo from "../Assets/panchkarma.png";
import Container from "react-bootstrap/Container";
import '../Component/Section2.css'

const Section2 = () => {
  return (
    <div className="section2" style={{ minHeight: "120vh" }}>
      <div style={{ position: "relative", top: "0", left: "0", right: "0",zIndex:'-999' }}>
        <img className="healing1" src={banner} alt="" style={{zIndex:'100', width: "100%",height:'110vh', objectFit:'cover',filter:"blur(1px)",maskImage:'-moz-initial'}} />
    
      <div className="mx-auto w-100" style={{ position: "absolute",top:"100px" }}>
        <Container>
          <h1 className="text-center">Holistic Healing</h1>
          <div className="d-flex healing" style={{}}>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} className="" />
              <div style={{}}>
                <h3 className="mt-3">Title</h3>

                <p className="mt-2">
                  Step into a realm where nature's healing touch meets
                </p>
              </div>
            </div>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} />
              <h3 className="mt-3">Title</h3>

              <p className="mt-2">
                Step into a realm where nature's healing touch meets
              </p>
            </div>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} />
              <h3 className="mt-3">Title</h3>

              <p className="mt-2">
                Step into a realm where nature's healing touch meets
              </p>
            </div>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} />
              <h3 className="mt-3">Title</h3>

              <p className="mt-2">
                Step into a realm where nature's healing touch meets
              </p>
            </div>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} />
              <h3 className="mt-3">Title</h3>

              <p className="mt-2">
                Step into a realm where nature's healing touch meets
              </p>
            </div>
          </div>
          <div className="d-flex healing">
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} className="" />
              <div style={{}}>
                <h3 className="mt-3">Title</h3>

                <p className="mt-2">
                  Step into a realm where nature's healing touch meets
                </p>
              </div>
            </div>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} />
              <h3 className="mt-3">Title</h3>

              <p className="mt-2">
                Step into a realm where nature's healing touch meets
              </p>
            </div>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} />
              <h3 className="mt-3">Title</h3>

              <p className="mt-2">
                Step into a realm where nature's healing touch meets
              </p>
            </div>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }} />
              <h3 className="mt-3">Title</h3>

              <p className="mt-2">
                Step into a realm where nature's healing touch meets
              </p>
            </div>
            <div
              style={{
                border: "solid 1px",
                margin: "20px",
                padding: "10px 10px 0px 10px",
                borderRadius: "5px",
              }}
            >
              <img src={logo} alt="#" style={{ width: "40%" }}  />
              <h3 className="mt-3">Title</h3>

              <p className="mt-2">
                Step into a realm where nature's healing touch meets
              </p>
            </div>
          </div>
        </Container>
      </div>
      </div>
    </div>
  );
};

export default Section2;
