import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {useDispatch, useSelector} from 'react-redux';
import {imgActions} from 'redux/slice/imgSlice';

function AddImgSlider() {
  const dispatch = useDispatch();
  const fileInput = useRef('');
  const Img = useSelector((state) => state.img.completeImgs);

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

    reader.onloadend = (e) => {
      const {
        currentTarget: {result},
      } = e;
      // setImg([...Img, result]);
      const img = result;
      dispatch(imgActions.addCompleteImg({img: img, idx: idx}));
    };
  };

  return (
    <React.Fragment>
      <StyleSlider {...settings}>
        <div>
          <StyleInput
            id="0"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="0">
            <StyleImg src={Img[0]}></StyleImg>
          </label>
        </div>
        <div>
          <StyleInput
            id="1"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="1">
            <StyleImg src={Img[1]}></StyleImg>
          </label>
        </div>
        <div>
          <StyleInput
            id="2"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="2">
            <StyleImg src={Img[2]}></StyleImg>
          </label>
        </div>
        <div>
          <StyleInput
            id="3"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="3">
            <StyleImg src={Img[3]}></StyleImg>
          </label>
        </div>
        <div>
          <StyleInput
            id="4"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="4">
            <StyleImg src={Img[4]}></StyleImg>
          </label>
        </div>
      </StyleSlider>
    </React.Fragment>
  );
}

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
const StyleImg = styled.div`
  background-image: url('${(props) => (props.src ? props.src : '')}');
  height: 248px;
  background-color: gray;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyleInput = styled.input`
  display: none;
`;
export default AddImgSlider;
