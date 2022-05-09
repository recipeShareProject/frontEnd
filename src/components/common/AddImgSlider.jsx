import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AddImgSlider() {
  const fileInput = useRef('');
  const [Img, setImg] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setactiveSlide2] = useState(0);
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (current, next) => setActiveSlide({activeSlide: next}),
    afterChange: (current) => setactiveSlide2({activeSlide2: current}),
  };
  //파일선택
  const selectFile = (e) => {
    const {
      target: {files},
    } = e;

    const imageFile = files[0];
    const reader = new FileReader();

    reader.readAsDataURL(imageFile);

    reader.onloadend = (e) => {
      const {
        currentTarget: {result},
      } = e;
      setImg([...Img, result]);
    };
  };
  return (
    <StyleSlider {...settings}>
      <div>
        <StyleImg src={Img[0]}></StyleImg>
      </div>
      <div>
        <StyleImg src={Img[1]}></StyleImg>
      </div>
      <div>
        <img src={Img[2]} alt="profile"></img>
      </div>
      <div>
        <img src={Img[3]} alt="profile"></img>
      </div>
      <div>
        <img src={Img[4]} alt="profile"></img>
      </div>
    </StyleSlider>

    //    <input type="file" onChange={selectFile} ref={fileInput}></input>
  );
}

const StyleSlider = styled(Slider)`
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 0.25;
    color: black;
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
export default AddImgSlider;
