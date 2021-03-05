import React from "react";
import styled from "styled-components";
import Hero from "./heroSection/HeroContainer";
import Red from "./red/RedContainer";
import Yellow from "./yellow/YellowContainer";

function Landing() {
  return (
    <Wrapper>
      <Hero />
      <Red />
      <Yellow />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  margin: 0px;
  padding: 0px; */
`;

export default Landing;
