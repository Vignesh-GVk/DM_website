import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Foot from "./Foot";
import Section5 from "./Section5";

const LandPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Foot />
    </div>
  );
};

export default LandPage;
