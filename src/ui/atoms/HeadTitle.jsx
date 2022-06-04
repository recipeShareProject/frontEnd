import styled from 'styled-components';
const HeadTitle = ({title, mt}) => {
  return <StyledHeadTitle mt={mt}>{title}</StyledHeadTitle>;
};

const StyledHeadTitle = styled.p`
  margin: 0;
  margin-top: ${(props) => (props.mt ? props.mt : '16px')};
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
`;
export default HeadTitle;
