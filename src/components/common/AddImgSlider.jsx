import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {useDispatch, useSelector} from 'react-redux';
import {imgActions} from 'redux/slice/imgSlice';

import {Black10} from 'assets/colorSet';
import EmptyPictureIcon from 'common/icons/EmptyPictureIcon';
const AddImgSlider = () => {
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
            {Img[0] ? (
              <StyleImg src={Img[0]}></StyleImg>
            ) : (
              <EmptyImg>
                <EmptyImgWrapper>
                  <EmptyPictureIcon />
                  <p>사진을 추가해주세요</p>
                </EmptyImgWrapper>
              </EmptyImg>
            )}
          </label>
        </div>
        <div>
          <StyleInput
            id="1"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="1">
            {Img[1] ? (
              <StyleImg src={Img[1]}></StyleImg>
            ) : (
              <EmptyImg>
                <EmptyImgWrapper>
                  <EmptyPictureIcon />
                  <p>사진을 추가해주세요</p>
                </EmptyImgWrapper>
              </EmptyImg>
            )}
          </label>
        </div>
        <div>
          <StyleInput
            id="2"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="2">
            {Img[2] ? (
              <StyleImg src={Img[2]}></StyleImg>
            ) : (
              <EmptyImg>
                <EmptyImgWrapper>
                  <EmptyPictureIcon />
                  <p>사진을 추가해주세요</p>
                </EmptyImgWrapper>
              </EmptyImg>
            )}
          </label>
        </div>
        <div>
          <StyleInput
            id="3"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="3">
            {Img[3] ? (
              <StyleImg src={Img[3]}></StyleImg>
            ) : (
              <EmptyImg>
                <EmptyImgWrapper>
                  <EmptyPictureIcon />
                  <p>사진을 추가해주세요</p>
                </EmptyImgWrapper>
              </EmptyImg>
            )}
          </label>
        </div>
        <div>
          <StyleInput
            id="4"
            type="file"
            onChange={selectFile}
            ref={fileInput}></StyleInput>
          <label htmlFor="4">
            {Img[4] ? (
              <StyleImg src={Img[4]}></StyleImg>
            ) : (
              <EmptyImg>
                <EmptyImgWrapper>
                  <EmptyPictureIcon />
                  <p>사진을 추가해주세요</p>
                </EmptyImgWrapper>
              </EmptyImg>
            )}
          </label>
        </div>
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
const StyleImg = styled.div`
  background-image: url('${(props) => (props.src ? props.src : '')}');
  height: 248px;
  background-color: ${Black10};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyleInput = styled.input`
  display: none;
`;
const EmptyImgWrapper = styled.div`
  height: 248px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EmptyImg = styled.div`
  height: 248px;
  width: 100%;
  background-color: ${Black10};

  p {
    margin: 0;
    color: white;
    margin: 7px;
  }
`;
export default AddImgSlider;
