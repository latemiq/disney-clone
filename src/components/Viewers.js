import React from "react";
import styled from "styled-components";

const Container = styled.div`  
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img` 
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-out;
  z-index: 1;
  &:hover {
    transform: scale(1.05);
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }
`;

function Viewers() {
  return (
    <Container>
      <Wrap>
        <Image
          src="/images/viewers-disney.png"
          alt="Viewers Disney"
        />
        <Video
          src="/videos/1564674844-disney.mp4"
          autoPlay
          loop
          muted
        />
      </Wrap>
      <Wrap>
        <Image
          src="/images/viewers-pixar.png"
          alt="Viewers Pixar"
        />
        <Video
          src="/videos/1564676714-pixar.mp4"
          autoPlay
          loop
          muted
        />
      </Wrap>
      <Wrap>
        <Image
          src="/images/viewers-marvel.png"
          alt="Viewers Marvel"
          autoPlay
          loop
          muted
        />
         <Video
          src="/videos/1564676115-marvel.mp4"
          autoPlay
          loop
          muted
          />
      </Wrap>
      <Wrap>
        <Image
          src="/images/viewers-starwars.png"
          alt="Viewers Star Wars"
        />
        <Video
          src="/videos/1608229455-star-wars.mp4"
          autoPlay
          loop
          muted
        />
      </Wrap>
      <Wrap>
        <Image
          src="/images/viewers-national.png"
          alt="Viewers National Geographic"
        />
        <Video
          src="/videos/1564676296-national-geographic.mp4"
          autoPlay
          loop
          muted
        />
      </Wrap>
    </Container>
  );
}

export default Viewers;