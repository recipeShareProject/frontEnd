import {Box} from '@mui/system';
import styled from 'styled-components';
import React, {forwardRef, useRef} from 'react';
import {useDispatch} from 'react-redux';
import Image from 'ui/atoms/Image';
import EmptyImage from 'ui/atoms/EmptyImage';
import {useState} from 'react';
import {imgActions} from 'redux/slices/imgSlice';

const AddImgFileInput = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [imgThumbnail, setImgThumbnail] = useState({
    img: null,
    idx: null,
  });

  const selectFile = (e) => {
    const {
      target: {files},
    } = e;
    const imageFile = files[0];
    const reader = new FileReader();
    const idx = e.target.id;

    reader.readAsDataURL(imageFile);
    dispatch(imgActions.addProcessImgsImg({img: imageFile, idx: props.idx}));
    reader.onloadend = (e) => {
      const {
        currentTarget: {result},
      } = e;
      const img = result;
      setImgThumbnail({
        img: img,
        idx: idx,
      });
      //   dispatch(imgActions.addCompleteImg({img: img, idx: idx}));
    };
  };

  return (
    <Box>
      <StyleInput
        id={props.idx}
        type="file"
        onChange={selectFile}
        ref={ref}></StyleInput>
      <label htmlFor={props.idx}>
        {imgThumbnail.img ? (
          <Image src={imgThumbnail.img} height="248px" radius="8px"></Image>
        ) : (
          <EmptyImage />
        )}
      </label>
    </Box>
  );
});

export default AddImgFileInput;
const StyleInput = styled.input`
  display: none;
`;
