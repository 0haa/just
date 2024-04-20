import React from 'react';
// 수정(변이)요청 => useDispatch
import { useDispatch, useSelector } from 'react-redux';
import { popupAction } from '../../store/popupSlice';
import './scss/PopupComponent.scss'

export default function PopupComponent (){
    const title = useSelector((state)=>state.popupSlice.title)
    const dispatch = useDispatch();

    const onClickPopupClose=(e)=>{
        e.preventDefault();
        dispatch(popupAction({show:false})); // 디스패치(팝업 닫기(액션전달값 payload))
    }

    return (
        <div id="popup" className="popup">
            <div className="container">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="content">
                    <ul>
                        <li>오랜만에 찾아온 세일 안내!</li>
                        <li>JUST 쇼핑몰이 제안하는 유니크한 시즌별 패션 트렌드를 즐겨보세요.</li>
                        <li>오랜만에 찾아온 휴면고객이라면, 지금 바로 로그인 하고 적립금 1,000원을 받으세요! </li>
                    </ul>
                </div>
                <div className="button-box">
                    <button onClick={onClickPopupClose} className="close-btn" title="닫기">닫기</button>
                </div>
            </div>
        </div>
    );
};
