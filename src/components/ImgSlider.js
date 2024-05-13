import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const Carousel = styled(Slider)`
      margin-top: 20px;

    ul li button {
      &:before {
        font-size: 10px;
        color: rgb(150, 158, 171);
      }
    }
    .slick-next{
      padding-left: 2px;
    }
    .slick-next, .slick-prev{
      transform: scaleX(1.5) scaleY(6);
      opacity: 0;
      &:before{
        color: #ffffff30;
      }
    }
    li.slick-active{
      color: white;
    }
      li.slick-active button:before {
        color: white;
      }
        .slick-list {
          overflow: visible;
        }
        button {
          opacity: 1; 
          z-index: 1;
          &:hover{
            opacity: 1;
          }
        }
  `
  const Wrap = styled.div`
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
      border: 4px solid transparent;
      transition-duration: 300ms;

      &:hover{
        border: 4px solid rgb(249, 249, 249, 0.8);

      }
    }
  `
  
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg"/>
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg"/>
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg"/>
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg"/>
      </Wrap>
    </Carousel>
  );
};
export default ImgSlider;
