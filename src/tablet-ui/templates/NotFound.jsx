import styled from 'styled-components';
import illust from 'assets/imgs/Illust.png';
import Image from 'ui/atoms/Image';

const NotFound = ({desc}) => {
  return (
    <NotFoundWrapper>
      <Image src={illust} alt="" width="240px" height="240px" />
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

export default NotFound;
