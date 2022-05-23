import {Black40, Colar100} from 'assets/colorSet';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

const PartyPost = ({
  thumnail = 'https://user-images.githubusercontent.com/51289147/169662629-ca401384-f9b4-464b-a2a1-a1a6aad119af.jpg',
  category = '나눔해요',
  title = '쭈꾸미 좋아하세요?',
  location = '카이센동',
  time = '10분 뒤까지',
}) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`detailParty/1`)}>
      <Thumnail src={thumnail}></Thumnail>
      <div>
        <Category>{category}</Category>
        <PostTitle>{title}</PostTitle>
        <StyleRow>
          <PostLocation>{location}</PostLocation>
          <Time>{time}</Time>
        </StyleRow>
      </div>
    </Card>
  );
};
export default PartyPost;
const Card = styled.div`
  display: flex;
  margin: 1rem 0;

  cursor: pointer;
`;
const Thumnail = styled.div`
  width: 6.5rem;
  height: 6.5rem;

  margin-right: 0.5rem;

  background-image: url('${(props) => (props.src ? props.src : '')}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 4px;
`;
const Category = styled.p`
  margin: 0;
  color: ${Colar100};
  font-size: 12px;
`;

const PostTitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  margin: 8px 8px 8px 0;
`;
const StyleRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const PostLocation = styled.p`
  margin: 0;
  color: black;
  font-size: 12px;
  margin-right: 8px;
`;
const Time = styled.p`
  margin: 0;
  color: ${Black40};
  font-size: 12px;
`;
