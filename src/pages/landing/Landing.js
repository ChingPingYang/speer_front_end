import React from "react";
import styled from "styled-components";
import Hero from "./heroSection/HeroContainer";

function Landing() {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 100%; */
  /* border: solid 1px blue; */
`;

export default Landing;
