import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './components/WrapComponent';
// 리덕스 사용시 필수
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// 가져오기
import popupSlice from './store/popupSlice';
import cntSlice from './store/cntSlice';

const store = configureStore({
  reducer: {
    popupSlice,
    cntSlice
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // store를 객체로 내려보냄
  // 이 안에 있는 모든 컴포넌트가 store를 사용할 수 있음
  <Provider store={store}>
    <WrapComponent />
  </Provider>
);
