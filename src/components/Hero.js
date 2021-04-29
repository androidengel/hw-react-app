import React from "react";
import styled from "styled-components";

const HeroStyles = styled.div`
  min-height: 20rem;
  text-align: center;
  padding-top: 4rem;
  & h1 {
    font-size: 4.8rem;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
`;

const Hero = () => (
  <HeroStyles>
    <h1>Link Shrtnr</h1>
    <p>Enter your URL below to recieve a shortened version</p>
  </HeroStyles>
);

export default Hero;
