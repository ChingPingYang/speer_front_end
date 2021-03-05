import React from "react";
import styled from "styled-components";

function Perks() {
  return <Wrapper id="perks"></Wrapper>;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10px;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.black};
`;

export default Perks;
