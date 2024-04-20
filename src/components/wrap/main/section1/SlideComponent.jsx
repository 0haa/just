import React from 'react';
import { setCnt } from '../../../../store/cntSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function SlideComponent({슬라이드}) {
    const slideRef = React.useRef([]); // 슬라이드 선택자
    const slideWrapRef = React.useRef();

    // action 가져오기
    const cnt = useSelector((state)=>state.cntSlice.cnt); // index.js 확인

    // action 변경하기
    const dispatch = useDispatch();
    React.useEffect(()=>{
        const setId = setInterval(()=>{
            dispatch(setCnt(슬라이드.length-1)); // 카운터 프로그램 액션 호출
        },4000);
        return ()=> clearInterval(setId)
    },[dispatch, 슬라이드]); // 슬라이드가 들어오면 실행

    // cnt 증가시 선택자 slideWrapRef를 이용 애니메이션 구현
    React.useEffect(()=>{
        const n = 슬라이드.length - 3; 
        if(cnt > n){ // 처음으로 리턴
            slideWrapRef.current.style.transition = '0';
            slideWrapRef.current.style.left = `${-100 * 0}%`;
            // 비동기식 => 스타일 적용 끝나고 다음 실행
            setTimeout(()=>{
                dispatch(setCnt(1)); // 리턴 다음 1을 전달, 다음 2번째 슬라이드 이동 준비완료
            },0);
        }else{ // 슬라이드 실행
            slideWrapRef.current.style.transition = 'all 0.6s ease-in-out';
            slideWrapRef.current.style.left = `${-100 * cnt}%`;
        }

    },[cnt]); 

    return (
        <div className="slide-container">
                <div className="slide-content">
                    <ul className="slide-wrap" ref={slideWrapRef}>
                        {
                            슬라이드.length > 0 && ( // 슬라이드.length > 0면 실행해라
                                슬라이드.map((item, idx)=>{
                                    return(
                                        <li 
                                            // ref={(e)=>(slideRef.current[idx]=e)}
                                            className={`slide slide${idx+1}`} 
                                            key={`${item.제목}_${idx}`}
                                            // 인라인 스타일은 중괄호 두개
                                            style={{
                                                backgroundImage:`url(${process.env.PUBLIC_URL}/images/${item.배경이미지})`
                                                // ${process.env.PUBLIC_URL} 베이스 네임(닷홈으로 배포하면 닷홈주소, 깃헙으로 배포하면 깃헙주소가 들어감)
                                            }}
                                        >
                                            <a href="!#" title={item.제목}>
                                                <span>{item.제목}</span>
                                            </a>
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>
                </div>
            </div>
    );
};
