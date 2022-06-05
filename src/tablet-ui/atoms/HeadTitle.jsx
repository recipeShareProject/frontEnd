import styled from 'styled-components';
const HeadTitle = ({title, mt}) => {
  return (
    <div>
      {title.split('\n').map((v) => (
        <StyledHeadTitle mt={mt}>{v}</StyledHeadTitle>
      ))}
    </div>
  );
};

const StyledHeadTitle = styled.p`
  margin: 0;
  margin-top: ${(props) => (props.mt ? props.mt : '0')};
  font-size: 20px;
  font-weight: 600;
`;
export default HeadTitle;
