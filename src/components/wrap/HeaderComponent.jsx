import React from 'react';
import './scss/HeaderComponent.scss'
import { Outlet, Link } from 'react-router-dom';

export default function HeaderComponent (){
    const [sub1, setSub1] = React.useState(false);
    const [sub2, setSub2] = React.useState(false);
    const [sub3, setSub3] = React.useState(false);
    const [sub4, setSub4] = React.useState(false);

    // sub1 open
    const onMouseEnterSub1Show = (e)=>{setSub1(true)}
    // sub1 close
    const onMouseLeaveSub1Hide = (e)=>{setSub1(false)}
    const onMouseEnterSub2Show = (e)=>{setSub2(true)}
    const onMouseLeaveSub2Hide = (e)=>{setSub2(false)}
    const onMouseEnterSub3Show =(e)=>{setSub3(true)}
    const onMouseLeaveSub3Hide =(e)=>{setSub3(false)}
    const onMouseEnterSub4Show =(e)=>{setSub4(true)}
    const onMouseLeaveSub4Hide =(e)=>{setSub4(false)}

    // 3항 연산자 (조건 ? 참 : 거짓)  || `백틱 ${삼항연산자}`
    // 탬플릿 리터럴(백틱으로 문자+스크립트 같이 사용)
    // console.log(`main-btn${sub1 ? " on" : ""}`) 

    return (
        <>
            <header id="header">
            <div className="left">
                <h1><Link to="/" title="JUST 쇼핑몰"><span>JUST</span> <span>쇼핑몰</span></Link></h1>
            </div>
            <div className="right">
                <aside id="aside">
                    <Link to="/signup">회원가입</Link>
                    <i>|</i>
                    <Link to="#">로그인</Link>
                    <i>|</i>
                    <Link to="#">공지사항</Link>
                </aside>
                <nav id="nav">
                    <ul>
                        <li className="col" onMouseLeave={onMouseLeaveSub1Hide}>
                            <a href="!#" onMouseEnter={onMouseEnterSub1Show} className={`main-btn${sub1 ? " on" : ""}`} title="탑">탑</a>
                            {
                                sub1 && (
                                <div className="sub sub1">
                                <div className="sub-container">
                                    <ul>
                                        <li> {/* 1열 */}
                                            <ul>
                                                <li><a href="!#" title="블라우스">블라우스</a></li>
                                                <li><a href="!#" title="티">티</a></li>
                                                <li><a href="!#" title="셔츠">셔츠</a></li>
                                                <li><a href="!#" title="니트">니트</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 2열 */}
                                            <ul>
                                                <li><a href="!#" title="자켓">자켓</a></li>
                                                <li><a href="!#" title="코트">코트</a></li>
                                                <li><a href="!#" title="가디건">가디건</a></li>
                                                <li><a href="!#" title="머플러">머플러</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 3열 */}
                                            <ul>
                                                <li><a href="!#" title="청바지">청바지</a></li>
                                                <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                <li><a href="!#" title="긴바지">긴바지</a></li>
                                                <li><a href="!#" title="레깅스">레깅스</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 4열 */}
                                            <ul>
                                                <li><a href="!#" title="귀고리">귀고리</a></li>
                                                <li><a href="!#" title="목걸이">목걸이</a></li>
                                                <li><a href="!#" title="반지">반지</a></li>
                                                <li><a href="!#" title="팔찌">팔찌</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                )
                            }
                        </li>
                        <li className="col" onMouseLeave={onMouseLeaveSub2Hide}>
                            <a href="!#" onMouseEnter={onMouseEnterSub2Show} className={`main-btn${sub2 ? " on" : ""}`} title="아우터">아우터</a>
                            {
                                sub2 && (
                                <div className="sub sub2">
                                <div className="sub-container">
                                    <ul>
                                        <li> {/* 1열 */}
                                            <ul>
                                                <li><a href="!#" title="블라우스">블라우스</a></li>
                                                <li><a href="!#" title="티">티</a></li>
                                                <li><a href="!#" title="셔츠">셔츠</a></li>
                                                <li><a href="!#" title="니트">니트</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 2열 */}
                                            <ul>
                                                <li><a href="!#" title="자켓">자켓</a></li>
                                                <li><a href="!#" title="코트">코트</a></li>
                                                <li><a href="!#" title="가디건">가디건</a></li>
                                                <li><a href="!#" title="머플러">머플러</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 3열 */}
                                            <ul>
                                                <li><a href="!#" title="청바지">청바지</a></li>
                                                <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                <li><a href="!#" title="긴바지">긴바지</a></li>
                                                <li><a href="!#" title="레깅스">레깅스</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 4열 */}
                                            <ul>
                                                <li><a href="!#" title="귀고리">귀고리</a></li>
                                                <li><a href="!#" title="목걸이">목걸이</a></li>
                                                <li><a href="!#" title="반지">반지</a></li>
                                                <li><a href="!#" title="팔찌">팔찌</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                )
                            }                        
                        </li>
                        <li className="col" onMouseLeave={onMouseLeaveSub3Hide}>
                            <a href="!#" onMouseEnter={onMouseEnterSub3Show} className={`main-btn${sub3 ? " on" : ""}`} title="팬츠">팬츠</a>
                            {
                                sub3 && (
                                <div className="sub sub3">
                                <div className="sub-container">
                                    <ul>
                                        <li> {/* 1열 */}
                                            <ul>
                                                <li><a href="!#" title="블라우스">블라우스</a></li>
                                                <li><a href="!#" title="티">티</a></li>
                                                <li><a href="!#" title="셔츠">셔츠</a></li>
                                                <li><a href="!#" title="니트">니트</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 2열 */}
                                            <ul>
                                                <li><a href="!#" title="자켓">자켓</a></li>
                                                <li><a href="!#" title="코트">코트</a></li>
                                                <li><a href="!#" title="가디건">가디건</a></li>
                                                <li><a href="!#" title="머플러">머플러</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 3열 */}
                                            <ul>
                                                <li><a href="!#" title="청바지">청바지</a></li>
                                                <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                <li><a href="!#" title="긴바지">긴바지</a></li>
                                                <li><a href="!#" title="레깅스">레깅스</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 4열 */}
                                            <ul>
                                                <li><a href="!#" title="귀고리">귀고리</a></li>
                                                <li><a href="!#" title="목걸이">목걸이</a></li>
                                                <li><a href="!#" title="반지">반지</a></li>
                                                <li><a href="!#" title="팔찌">팔찌</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                )
                            }                         
                        </li>
                        <li className="col" onMouseLeave={onMouseLeaveSub4Hide}>
                            <a href="!#" onMouseEnter={onMouseEnterSub4Show} className={`main-btn${sub4 ? " on" : ""}`} title="악세서리">악세서리</a>
                            {   
                                sub4 && (
                                <div className="sub sub4">
                                <div className="sub-container">
                                    <ul>
                                        <li> {/* 1열 */}
                                            <ul>
                                                <li><a href="!#" title="블라우스">블라우스</a></li>
                                                <li><a href="!#" title="티">티</a></li>
                                                <li><a href="!#" title="셔츠">셔츠</a></li>
                                                <li><a href="!#" title="니트">니트</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 2열 */}
                                            <ul>
                                                <li><a href="!#" title="자켓">자켓</a></li>
                                                <li><a href="!#" title="코트">코트</a></li>
                                                <li><a href="!#" title="가디건">가디건</a></li>
                                                <li><a href="!#" title="머플러">머플러</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 3열 */}
                                            <ul>
                                                <li><a href="!#" title="청바지">청바지</a></li>
                                                <li><a href="!#" title="짧은바지">짧은바지</a></li>
                                                <li><a href="!#" title="긴바지">긴바지</a></li>
                                                <li><a href="!#" title="레깅스">레깅스</a></li>
                                            </ul>
                                        </li>
                                        <li> {/* 4열 */}
                                            <ul>
                                                <li><a href="!#" title="귀고리">귀고리</a></li>
                                                <li><a href="!#" title="목걸이">목걸이</a></li>
                                                <li><a href="!#" title="반지">반지</a></li>
                                                <li><a href="!#" title="팔찌">팔찌</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                </div>  
                                )
                            }                       
                        </li>
                    </ul>
                </nav>
            </div>
            </header>
            <Outlet />
        </>
    );
};
