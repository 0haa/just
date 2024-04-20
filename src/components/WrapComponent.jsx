import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import PopupComponent from './wrap/PopupComponent';
import { useSelector } from 'react-redux'; // 상태관리 가져온다
import './scss/WrapComponent.scss'
import SignUpComponent from './wrap/sub/SignUpComponent';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';

export default function WrapComponent(){

    // store > reducer에서 상태관리 변수 가져오기
    const show = useSelector((state)=>state.popupSlice.show); 

    return (
        <div id="wrap">
            <HashRouter>
                {/* 항상 노출되어야 하는것들은 BrowserRouter 바로 아래에 위치한다 */}
                <Routes>
                    <Route path='/' element={<HeaderComponent />}>
                        <Route index element={<MainComponent/>} />
                        <Route path='/index' element={<MainComponent/>} />
                        <Route path='/signup' element={<SignUpComponent />} />
                        <Route />
                    </Route>
                </Routes>
                <FooterComponent />
                {show && <PopupComponent/>}
            </HashRouter>
        </div>
    );
};
