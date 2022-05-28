import styled from 'styled-components';

const Typography = ({
  color,
  fontSize,
  margin,
  fontWeight,
  onClick,
  mt,
  w,
  children,
}) => {
  return (
    <StyledTypography
      mt={mt}
      color={color}
      fontSize={fontSize}
      margin={margin}
      fontWeight={fontWeight}
      w={w}
      onClick={onClick}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.p`
  margin-top: ${(props) => (props.mt ? props.mt : '0px')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  color: ${(props) => props.color};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  width: ${(props) => props.w};
`;

export default Typography;
