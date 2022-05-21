import {Black40, Colar100} from 'assets/colorSet';
import {useNavigate} from 'react-router';
import styled from 'styled-components';

const PartyPost = () => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/detailParty/1`)}>
      <Thumnail src="https://i.pinimg.com/564x/bc/9a/f4/bc9af4c2074cd1e679031a593d1e5b8d.jpg"></Thumnail>
      <div>
        <Category>나눔해요</Category>
        <PostTitle>게시글 제목</PostTitle>
        <StyleRow>
          <PostLocation>ㅇㅇ동</PostLocation>
          <Time>n분 뒤 까지</Time>
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
