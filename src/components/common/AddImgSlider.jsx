import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AddImgSlider() {
  const fileInput = useRef('');
  const [Img, setImg] = useState([]);

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
    const targetId = e.target.id;

    reader.readAsDataURL(imageFile);

    reader.onloadend = (e) => {
      const {
        currentTarget: {result},
      } = e;
      setImg([...Img, result]);
      // setImg(Img.map((value, index) => (index === targetId ? result : value)));
      const a = Img.map((value, index) =>
        index.toString() === targetId ? 'result' : 'value',
      );
      console.log(a);
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
  background-image: url('${(props) => props.src}');
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
