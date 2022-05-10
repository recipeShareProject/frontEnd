import {Avatar, Box} from '@mui/material';
import {RecipeImgGroupWrapper} from 'pages/recipe/RecipeDetail';
import {RecipeImgGroup} from 'pages/recipe/RecipeDetail';
import RecipeImg from './RecipeImg';
import styled from 'styled-components';

const RecipeReview = () => {
  return (
    <div>
      <UserProfileCard>
        <Avatar>H</Avatar>
        <Box ml={2}>
          <Nickname>닉네임</Nickname>
          <Box my={1} sx={{display: 'flex', fontSize: '0.9rem'}}>
            <ReviewState>괜찮아요</ReviewState>
            <ReviewUploadAt>n분전</ReviewUploadAt>
          </Box>
        </Box>
      </UserProfileCard>
      <div></div>
      <div>
        <RecipeImgGroupWrapper>
          <RecipeImgGroup>
            <RecipeImg width="160px" height="120px" />
            <RecipeImg width="160px" height="120px" />
            <RecipeImg width="160px" height="120px" />
            <RecipeImg width="160px" height="120px" />
            <RecipeImg width="160px" height="120px" />
          </RecipeImgGroup>
        </RecipeImgGroupWrapper>
        <p>
          숟가락을 이용해 전복 살과 껍질을 분리하고 내장도 조심스럽게 떼어
          내세요. 내장은 버리지 말고 죽이나 찌개 등에 넣어 드셔도 좋아요.
        </p>
      </div>
    </div>
  );
};

const UserProfileCard = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Nickname = styled.p`
  margin: 0;
`;

const ReviewState = styled.p`
  font-weight: bold;
  margin: 0px 1rem 0px 0px;
`;

const ReviewUploadAt = styled.p`
  color: gray;
  margin: 0;
`;
export default RecipeReview;
