import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AddImgSlider({Img}) {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <StyleSlider {...settings}>
        {Img.map(
          (v, idx) =>
            v && (
              <div key={idx}>
                <StyleImg src={Img[idx]}></StyleImg>
              </div>
            ),
        )}
      </StyleSlider>
    </React.Fragment>
  );
}

const StyleSlider = styled(Slider)`
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
    color: #e5e5e5;
  }

  li.slick-active button:hover:before,
  li.slick-active button:focus:before {
    opacity: 1;
    color: black;
  }
  .slick-dots {
    bottom: 16px;
  }
  .slick-dots li button:before {
    opacity: 1;
    color: #e5e5e5;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #5c5c5c;
  }
`;

const StyleImg = styled.div`
  background-image: url('${(props) => (props.src ? props.src : '')}');
  height: 248px;
  background-color: gray;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default AddImgSlider;
