import React from 'react';
import styled from 'styled-components';
import recipeApi from 'api/recipeApi';
function ApiTest() {
  const [imgs, setImgs] = React.useState([]);
  return (
    <>
      <input type="file"></input>
      <h2>레시피</h2>
      <Button
        onClick={async () => {
          const a = await recipeApi.test();
          console.log(a);
        }}>
        레시피 홈목록
      </Button>
      <Button>레시피 검색 </Button>
      <Button>레시피 추가 </Button>
      <Button
        onClick={async () => {
          const a = await recipeApi.getRecipe();
          console.log(a);
        }}>
        레시피 조회(상세)
      </Button>
      <Button>레시피 삭제</Button>
      <Button>레시피 수정</Button>
      <Button>리뷰 작성</Button>
      <Button>리뷰 삭제</Button>
      <Button>리뷰 수정</Button>
      <h2>북마크</h2>
      <Button>북마크 추가</Button>
      <Button>북마크 삭제</Button>
      <h2>커뮤니티</h2>
      <Button>게시글 전체목록 </Button>
      <Button>게시글 추가 </Button>
      <Button>게시글 조회(상세) </Button>
      <Button>게시글 삭제</Button>
      <Button>게시글 수정</Button>
      <Button>나눔완료</Button>
      <Button>댓글 작성</Button>
      <Button>대댓글 작성</Button>
      <Button>댓글 삭제</Button>
      <Button>댓글 수정</Button>
      <h2>회원정보</h2>
      <Button>회원정보변경 </Button>
      <Button>닉네임 중복체크 </Button>
      <Button>내 위치보내기 </Button>
      <Button>로그아웃</Button>
      <Button>내 레시피글 </Button>
      <Button>내 파티글 </Button>
      <Button>내 댓글</Button>
    </>
  );
}

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 0.5rem;
`;
export default ApiTest;
