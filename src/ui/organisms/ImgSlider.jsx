import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {Black10} from 'assets/colorSet';

import Image from 'ui/atoms/Image';
const AddImgSlider = ({Img}) => {
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
              <Image
                key={idx}
                src={Img[idx]}
                height="248px"
                radius="8px"></Image>
            ),
        )}
      </StyleSlider>
    </React.Fragment>
  );
};

const StyleSlider = styled(Slider)`
  .slick-dots li {
    margin: 0;
  }
  .slick-dots li button:before {
    font-family: none;
    font-size: 25px;
  }

  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
    color: #f6f2f0;
  }

  li.slick-active button:hover:before,
  li.slick-active button:focus:before {
    opacity: 1;
    color: #f6f2f0;
  }
  .slick-dots {
    bottom: 16px;
  }
  .slick-dots li button:before {
    opacity: 1;
    color: #f6f2f0;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #f17751;
  }
`;

export default AddImgSlider;
