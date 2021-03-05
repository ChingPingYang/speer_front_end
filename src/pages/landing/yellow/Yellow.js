import React from "react";
import styled from "styled-components";
import imageUrl from "../../../styles/images/yellow/Image4.png";

function Yellow({ coordinate }, ref) {
  return (
    <Wrapper>
      <Image ref={ref} coordinate={coordinate}></Image>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  /* padding: 10px; */
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.yellow};
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${imageUrl});
  background-position: center;
  background-size: cover;
  clip-path: ${(props) =>
    `circle(150px at ${props.coordinate.x}px ${props.coordinate.y}px)`};
`;

export default React.forwardRef(Yellow);
