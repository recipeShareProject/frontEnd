import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {imgActions} from 'redux/slices/imgSlice';

import Image from 'tablet-ui/atoms/Image';
import EmptyImage from 'tablet-ui/atoms/EmptyImage';
const AddImgSlider = () => {
  const dispatch = useDispatch();
  const fileInput = React.useRef('');
  const Imgs = useSelector((state) => state.img.completeImgs);

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
    <BannerImgGroupWrapper>
      <BannerImgGroup>
        {Imgs.map((v, idx) => (
          <React.Fragment key={idx}>
            <StyleInput
              id={idx}
              type="file"
              onChange={selectFile}
              ref={fileInput}></StyleInput>
            <label htmlFor={idx}>
              {Imgs[idx] ? (
                <Image
                  src={Imgs[idx]}
                  width="310px"
                  height="235px"
                  radius="8px"></Image>
              ) : (
                <EmptyImage />
              )}
            </label>
          </React.Fragment>
        ))}
      </BannerImgGroup>
    </BannerImgGroupWrapper>
  );
};

const BannerImgGroupWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;
const BannerImgGroup = styled.div`
  display: flex;

  & > label:nth-child(n) {
    margin-right: 20px;
    margin-bottom: 0.5rem;
  }
`;
const StyleInput = styled.input`
  display: none;
`;

export default AddImgSlider;
