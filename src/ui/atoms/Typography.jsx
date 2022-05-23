import styled from 'styled-components';

const Typography = ({
  color,
  fontSize,
  margin,
  fontWeight,
  onClick,
  children,
}) => {
  return (
    <StyledTypography
      color={color}
      fontSize={fontSize}
      margin={margin}
      fontWeight={fontWeight}
      onClick={onClick}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.p`
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  color: ${(props) => props.color};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
`;

export default Typography;
