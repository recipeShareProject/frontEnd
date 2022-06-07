import {Black40, Colar100} from 'assets/colorSet';
import {useNavigate} from 'react-router';
import Wrapper from 'tablet-ui/atoms/Wrapper';
import Image from 'tablet-ui/atoms/Image';
import Typography from 'tablet-ui/atoms/Typography';
import {useDispatch} from 'react-redux';
import {getPost} from 'redux/slices/postSlice';
import defaultImg from 'assets/imgs/defaultImg.png';
const PartyPost = ({
  thumnail = defaultImg,
  category,
  title,
  address,
  time,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveDetailPage = () => {
    dispatch(getPost(id));
    navigate(`detailParty/${id}`);
  };
  if (category === '나눔완료') {
    return (
      <Wrapper display="flex" direction="column" disabled="true">
        <Wrapper width="200px" height="218px">
          <Image
            width="200px"
            height="151px"
            src={thumnail}
            radius="4px"
            margin="0 8px 0 0 "
          />
          <Wrapper margin="8px  0 0 0">
            <Typography color={Colar100} fontSize="12px">
              {category}
            </Typography>
            <Typography fontWeight="bold" fontSize="1rem">
              {title}
            </Typography>
            <Wrapper display="flex">
              <Typography fontSize="12px" margin="0 8px 0 0">
                {address}
              </Typography>
              <Typography color={Black40} fontSize="12px">
                {time}
              </Typography>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  } else if (category === '댓글') {
    return (
      <Wrapper display="flex" direction="column">
        <Wrapper width="200px" height="218px">
          <Image
            width="200px"
            height="151px"
            src={thumnail}
            radius="4px"
            margin="0 8px 0 0 "
          />
          <Wrapper margin="8px  0 0 0">
            <Typography color={Colar100} fontSize="12px">
              {category}
            </Typography>
            <Typography fontWeight="bold" fontSize="1rem">
              {title}
            </Typography>
            <Wrapper display="flex">
              <Typography fontSize="12px" margin="0 8px 0 0">
                {address}
              </Typography>
              <Typography color={Black40} fontSize="12px">
                {time}
              </Typography>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper display="flex" direction="column" _onClick={moveDetailPage}>
      <Wrapper width="200px" height="218px">
        <Image
          width="200px"
          height="151px"
          src={thumnail}
          radius="4px"
          margin="0 8px 0 0 "
        />
        <Wrapper margin="8px  0 0 0">
          <Typography color={Colar100} fontSize="12px">
            {category}
          </Typography>
          <Typography fontWeight="bold" fontSize="1rem">
            {title}
          </Typography>
          <Wrapper display="flex">
            <Typography fontSize="12px" margin="0 8px 0 0">
              {address}
            </Typography>
            <Typography color={Black40} fontSize="12px">
              {time}
            </Typography>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
export default PartyPost;
