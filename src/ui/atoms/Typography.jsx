import styled from 'styled-components';

const Typography = ({
  color,
  fontSize,
  margin,
  fontWeight,
  onClick,
  mt,
  w,
  align,
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
      onClick={onClick}
      align={align}>
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
  text-align: ${(props) => props.align};
`;

export default Typography;
