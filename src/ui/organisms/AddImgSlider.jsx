import React, {useRef} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {useDispatch, useSelector} from 'react-redux';
import {imgActions} from 'redux/slices/imgSlice';

import Image from 'ui/atoms/Image';
import EmptyImage from 'ui/atoms/EmptyImage';

const AddImgSlider = () => {
  const dispatch = useDispatch();
  const fileInput = useRef('');
  const Imgs = useSelector((state) => state.img.completeImgs);

  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //파일선택
  const selectFile = (e) => {
    const {
      target: {files},
    } = e;

    const imageFile = files[0];
    const reader = new FileReader();
    const idx = e.target.id;

    reader.readAsDataURL(imageFile);
    dispatch(imgActions.addSendCompleteImg({img: imageFile, idx: idx}));
    reader.onloadend = (e) => {
      const {
        currentTarget: {result},
      } = e;
      const img = result;
      dispatch(imgActions.addCompleteImg({img: img, idx: idx}));
    };
  };

  return (
    <React.Fragment>
      <StyleSlider {...settings}>
        {Imgs.map((v, idx) => (
          <React.Fragment key={idx}>
            <StyleInput
              id={idx}
              type="file"
              onChange={selectFile}
              ref={fileInput}></StyleInput>
            <label htmlFor={idx}>
              {Imgs[idx] ? (
                <Image src={Imgs[idx]} height="248px" radius="8px"></Image>
              ) : (
                <EmptyImage />
              )}
            </label>
          </React.Fragment>
        ))}
      </StyleSlider>
    </React.Fragment>
  );
};

const StyleSlider = styled(Slider)`
  position: none;
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

const StyleInput = styled.input`
  display: none;
`;

export default AddImgSlider;
