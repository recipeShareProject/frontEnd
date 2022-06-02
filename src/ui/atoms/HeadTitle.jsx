import styled from 'styled-components';
const HeadTitle = ({title}) => {
  return <StyledHeadTitle>{title}</StyledHeadTitle>;
};

const StyledHeadTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
`;
export default HeadTitle;
