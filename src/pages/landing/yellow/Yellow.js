import React from "react";
import styled from "styled-components";

function Yellow() {
  return <Wrapper></Wrapper>;
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
  background-color: ${(props) => props.theme.yellow};
`;
export default Yellow;
