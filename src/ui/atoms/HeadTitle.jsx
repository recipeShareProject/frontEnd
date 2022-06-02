import styled from 'styled-components';
const HeadTitle = ({title, mt}) => {
  return <StyledHeadTitle mt={mt}>{title}</StyledHeadTitle>;
};

const StyledHeadTitle = styled.p`
  margin-top: ${(props) => (props.mt ? props.mt : '16px')};
  font-size: 20px;
  font-weight: 600;
`;
export default HeadTitle;
