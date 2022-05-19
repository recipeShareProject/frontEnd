import styled from 'styled-components';
import illust from 'imgs/Illust.png';

const NotFound = ({desc}) => {
  return (
    <NotFoundWrapper>
      <NotFoundImg src={illust} alt="" />
      <p>{desc}</p>
    </NotFoundWrapper>
  );
};
const NotFoundWrapper = styled.div`
  width: 100%;
  height: 50vh;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const NotFoundImg = styled.img`
  width: 160px;
  height: 160px;
`;

export default NotFound;
