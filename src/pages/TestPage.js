import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {testActions} from 'redux/slice/testSlice';
import postsActions from 'redux/thunkActions/PostsAction';

function TestPage() {
  const count = useSelector((state) => state.test.value);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log(post.posts);

  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(testActions.increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(testActions.decrement())}>
        Decrement
      </button>
      <span></span>
      {post.posts.map((post, idx) => (
        <div key={idx}>{post.content}</div>
      ))}
      <button onClick={() => dispatch(postsActions.getPostAPI())}>
        요청하기
      </button>
      <div>hi</div>
    </>
  );
}

export default TestPage;
