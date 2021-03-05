import React from "react";
import styled from "styled-components";

function Red() {
  return <Wrapper id="perks"></Wrapper>;
}

const Wrapper = styled.section`
  /* border: solid 1px red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10px;
  height: 100vh;
  width: 100%;
`;
export default Red;
