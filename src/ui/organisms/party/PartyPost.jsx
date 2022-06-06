import {Black40, Colar100} from 'assets/colorSet';
import {useNavigate} from 'react-router';
import Wrapper from 'ui/atoms/Wrapper';
import Image from 'ui/atoms/Image';
import Typography from 'ui/atoms/Typography';

import defaultImg from 'assets/imgs/defaultImg.png';
const PartyPost = ({
  thumnail = defaultImg,
  category,
  title,
  address,
  time,
  id,
}) => {
  const navigate = useNavigate();
  const moveDetailPage = () => {
    navigate(`/party/detailParty/${id}`);
  };
  if (category === '나눔완료') {
    return (
      <Wrapper display="flex" margin="1rem 0" disabled={true}>
        <Image
          width="6.5rem"
          height="6.5rem"
          src={thumnail}
          radius="4px"
          margin="0 8px 0 0 "></Image>
        <Wrapper>
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
    );
  }
  return (
    <Wrapper display="flex" margin="1rem 0" _onClick={moveDetailPage}>
      <Image
        width="6.5rem"
        height="6.5rem"
        src={thumnail}
        radius="4px"
        margin="0 8px 0 0 "></Image>
      <Wrapper>
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
  );
};
export default PartyPost;
