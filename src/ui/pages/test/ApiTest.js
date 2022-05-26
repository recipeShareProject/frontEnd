import React from 'react';
import styled from 'styled-components';
import recipeApi from 'api/recipeApi';
import postApi from 'api/postApi';
import userApi from 'api/userApi';
import {timeForToday} from 'common/presenters/timeForToday';

import {imgActions} from 'redux/slices/imgSlice';
import {useDispatch, useSelector} from 'react-redux';
import AddImgSlider from 'ui/organisms/AddImgSlider';
const ApiTest = () => {
  const dispatch = useDispatch();
  const Imgs = useSelector((state) => state.img.completeImgs);
  const sendImgs = useSelector((state) => state.img.sendCompleteImgs);
  const fileInput = React.useRef('');
  const [img, setImg] = React.useState();
  const [sendImg, setSendImg] = React.useState();
  React.useEffect(() => {
    return () => {
      dispatch(imgActions.setCompleteImg());
      dispatch(imgActions.setSendCompleteImg());
    };
  }, [dispatch]);
  //파일선택
  const selectFile = (e) => {
    const {
      target: {files},
    } = e;

    const imageFile = files[0];
    const reader = new FileReader();
    setSendImg(imageFile);
    reader.readAsDataURL(imageFile);

    reader.onloadend = (e) => {
      const {
        currentTarget: {result},
      } = e;
      // setImg([...Img, result]);
      const img = result;
      setImg(img);
    };
  };
  // -----------------------------------레시피------------------------
  //홈목록
  const getHome = async () => {
    const a = await recipeApi.getHomeAxios();
    console.log(a);
  };
  //레시피 검색
  const searchRecipe = async () => {
    const data = {
      order: 'view',
      search: '김치',
      filter: {
        category: '한식',
        include: [],
        exclude: [],
      },
    };

    const a = await recipeApi.getSearchResultAxios(data);
    console.log(a);
  };

  //레시피 추가
  const addRecipe = async () => {
    const data = {
      title: '김치찌개',
      category: '한식',
      quantity: '1인분',
      cookTime: '20분',
      ingredient: {김치: '200g', 고기: '200g'},
      process: ['김치를 넣는다', '고기를 넣는다', '끓인다.'],
      processImages: sendImgs,
      completeImages: sendImgs,
      user: {nickname: '수민짱'},
    };
    console.log(data);
    const a = await recipeApi.addRecipeAxios(data);
    console.log(a);
  };

  //레시피 한개 조회
  const getRecipe = async () => {
    const a = await recipeApi.getRecipeAxios(4);
    console.log(a);
  };

  //레시피 삭제
  const delRecipe = async () => {
    const a = await recipeApi.delRecipeAxios(1);
    console.log(a);
  };

  //레시피 수정
  const patchRecipe = async () => {
    const data = {
      title: '김치찌개 수정',
      category: '한식',
      quantity: '1인분',
      cookTime: '20분',
      ingredient: {김치: '200g', 고기: '200g'},
      process: ['김치를 넣는다', '고기를 넣는다', '끓인다.'],
      processImages: sendImg,
      completeImages: sendImg,
      user: {nickname: '수민짱'},
    };
    const a = await recipeApi.patchRecipeAxios(1, data);
    console.log(a);
  };

  //리뷰 작성
  const writeReview = async () => {
    const data = {
      comment: '김치찌개 수정',
      like: '괜찮아요',
      picture: Imgs,
      user: {nickname: '수민짱'},
    };
    const a = await recipeApi.writeReviewAxios(1, data);
    console.log(a);
  };

  //리뷰 삭제
  const delReview = async () => {
    const a = await recipeApi.writeReviewAxios(1);
    console.log(a);
  };

  //리뷰 수정
  const patchReview = async () => {
    const data = {
      comment: '김치찌개 수정',
      like: '한식',
      picture: Imgs,
      user: {nickname: '수민짱'},
    };
    const a = await recipeApi.patchReviewAxios(1, data);
    console.log(a);
  };

  //북마크 추가
  const addBookMark = async () => {
    const data = {
      boardId: 1,
    };
    const a = await recipeApi.addBookMarkAxios(data);
    console.log(a);
  };
  //북마크 삭제
  const delBookMark = async () => {
    const data = {
      boardId: 1,
    };
    const a = await recipeApi.delBookMarkAxios(data);
    console.log(a);
  };
  // -----------------------------------파티------------------------
  //게시글 목록 조회
  const getPosts = async () => {
    const res = await postApi.getPostsAxios();
    console.log(res);
  };

  //게시글 작성
  const addPost = async () => {
    const date = new Date();

    const data = {
      title: '게시글제목',
      category: '나눔해요',
      images: sendImg,
      content: '나눔하는 내용입니다.',
      // tags: ['재료', '뭘까', '태그'],
      expiredAt: date,
      // location: '중동',
      // latitude: 35.1631,
      // longitude: 129.1636,
    };
    console.log(data);
    const res = await postApi.writePostAxios(data);
    console.log(res);
  };

  //게시글 한개 조회
  const getPost = async () => {
    const res = await postApi.getPostAxios(5);

    const time = timeForToday(res.data.expiredAt, 'party');
    console.log(res);
  };

  //게시글 삭제
  const delPost = async () => {
    const res = await postApi.delPostAxios(1);
    console.log(res);
  };

  //게시글 수정
  const patchPost = async () => {
    console.log(Imgs);
    const date = new Date();
    const data = {
      title: '게시글제목 수정',
      category: '나눔해요',
      images: Imgs,
      content: '수정 나눔하는 내용입니다.',
      tags: ['재료', '뭘까', '태그'],
      expiredAt: date,
    };
    const res = await postApi.patchPostAxios(1, data);
    console.log(res);
  };

  //나눔완료
  const patchPostState = async () => {
    const data = {
      category: '나눔완료',
    };
    const res = await postApi.patchPostStateAxios(1, data);
    console.log(res);
  };

  //댓글작성
  const writeComment = async () => {
    const data = {
      comment: '댓글작성완료!',
    };
    const res = await postApi.writeCommentAxios(1, data);
    console.log(res);
  };

  //대댓글작성
  const writeReply = async () => {
    const data = {
      comment: '댓글작성완료!',
      parent: 1,
    };
    const res = await postApi.writeReplyAxios(1, 1, data);
    console.log(res);
  };

  //댓글삭제
  const delComment = async () => {
    const res = await postApi.delCommentAxios(1);
    console.log(res);
  };

  //댓글 수정
  const patchComment = async () => {
    const data = {
      comment: '댓글수정완료!',
    };
    const res = await postApi.patchCommentAxios(1, data);
    console.log(res);
  };

  // -----------------------------회원------------------------

  //회원 가입
  const signup = async () => {
    const data = {
      profileImage: sendImg,
      nickname: '닉네임으로가입',
    };
    const res = await userApi.signupAxios(data);
    console.log(res);
  };

  //닉네임수정
  const patchMyInfo = async () => {
    const data = {
      profileImage: sendImg,
      nickname: '닉네임수정',
    };
    const res = await userApi.patchMyInfoAxios(data);
    console.log(res);
  };

  //닉네임 중복확인
  const home = async () => {
    const data = {
      location: '중동',
      latitude: 35.1631,
      longitude: 129.1636,
    };
    const res = await userApi.homeAxios(data);
    console.log(res);
  };
  //위치확인
  const checkNickname = async () => {
    const data = {
      nickname: '닉네임으로가입',
    };
    const res = await userApi.checkNicknameAxios(data);
    console.log(res);
  };

  //나의 레시피글 보기
  const getMyBoard = async () => {
    const res = await userApi.getMyBoardAxios();
    console.log(res);
  };
  //나의 파티글 보기
  const getMyPost = async () => {
    const res = await userApi.getMyPostAxios();
    console.log(res);
  };
  //나의 댓글 보기
  const getMyComment = async () => {
    const res = await userApi.getMyCommentAxios();
    console.log(res);
  };

  return (
    <React.Fragment>
      <StyleDiv>
        <input type="file" ref={fileInput} onChange={selectFile} />
        <StyleImg
          src="https://potluck-test.s3.ap-northeast-2.amazonaws.com/posts/9d04075b-456f-43b7-a0dc-0444463055b0%EA%B9%80%EC%A7%80%EC%9B%90.jpg"
          alt="preview"
        />
      </StyleDiv>
      <AddImgSlider />

      <h2>레시피</h2>
      <Button onClick={getHome}>레시피 홈목록</Button>
      <Button onClick={searchRecipe}>레시피 검색 </Button>
      <Button onClick={addRecipe}>레시피 추가</Button>
      <Button onClick={getRecipe}>레시피 조회(상세)</Button>
      <Button onClick={delRecipe}>레시피 삭제</Button>
      <Button onClick={patchRecipe}>레시피 수정</Button>
      <Button onClick={writeReview}>리뷰 작성</Button>
      <Button onClick={delReview}>리뷰 삭제</Button>
      <Button onClick={patchReview}>리뷰 수정</Button>

      <h2>커뮤니티</h2>
      <Button onClick={getPosts}>게시글 전체목록</Button>
      <Button onClick={addPost}>게시글 추가 </Button>
      <Button onClick={getPost}>게시글 조회(상세) </Button>
      <Button onClick={delPost}>게시글 삭제</Button>
      <Button onClick={patchPost}>게시글 수정</Button>
      <Button onClick={patchPostState}>나눔완료</Button>
      <Button onClick={writeComment}>댓글 작성</Button>
      <Button onClick={writeReply}>대댓글 작성</Button>
      <Button onClick={delComment}>댓글 삭제</Button>
      <Button onClick={patchComment}>댓글 수정</Button>

      <h2>북마크</h2>
      <Button onClick={addBookMark}>북마크 추가</Button>
      <Button onClick={delBookMark}>북마크 삭제</Button>

      <h2>회원정보</h2>
      <Button onClick={signup}>회원가입정보입력 </Button>
      <Button onClick={patchMyInfo}>회원정보변경 </Button>
      <Button onClick={checkNickname}>닉네임 중복체크 </Button>
      <Button onClick={home}>내 위치보내기 </Button>
      <Button onClick={getMyBoard}>내 레시피글 </Button>
      <Button onClick={getMyPost}>내 파티글 </Button>
      <Button onClick={getMyComment}>내 댓글</Button>

      <Button>로그인</Button>
      <Button>로그아웃</Button>
    </React.Fragment>
  );
};
const StyleDiv = styled.div``;

const StyleImg = styled.img`
  width: 200px;
  height: 200px;
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 0.5rem;
`;
export default ApiTest;
