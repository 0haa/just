# axios 설치

```js
npm i axios
```

1. 사용시 임포트

```js
import axios from 'axios';
```
2. 컴포넌트 탬플릿 완성 되면 실행
    React.useEffect();


# 데이터(Date) => axios, fatch
// 자바스크립트 기반 
- JSON
- XML
- TXT
- CSV
sql 오라클 등은 json으로 변형해서 써야함

```js

            <li><a href="!#" onClick={onClickPopupOpen} className="popup-btn" title="9월 just 쇼핑몰 세일 안내!">9월 just 쇼핑몰 세일 안내!</a><span>2018-09-03</span></li>
            <li><a href="!#" title="불편한 경험은 저희에게도 알려주세요.">불편한 경험은 저희에게도 알려주세요.</a><span>2018-09-02</span></li>
            <li><a href="!#" title="카카오톡 친구 추가하고 할인쿠폰 받아 가세요.">카카오톡 친구 추가하고 할인쿠폰 받아 가세요.</a><span>2018-09-01</span></li>
            <li><a href="!#" title="다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요?">다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요?</a><span>2018-08-31</span></li>
            <li><a href="!#" title="just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다!">just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다!</a><span>2018-08-30</span></li>


    <ul>
        <li><a href="!#" title="청바지, 블라우스, 파우치 홍보 여성 모델 이미지"><img src="./images/k1.webp" alt="청바지, 블라우스, 파우치 홍보 여성 모델 이미지"/></a></li>
        <li><a href="!#" title="청바지, 크로스백, 썬글라스, 수영복 홍보 이미지"><img src="./images/k2.jpg" alt="청바지, 크로스백, 썬글라스, 수영복 홍보 이미지"/></a></li>
        <li><a href="!#" title="노란 원피스 입은 모델 이미지"><img src="./images/k3.jpg" alt="노란 원피스 입은 모델 이미지"/></a></li>
    </ul>
```
[public]
    [data]
        notice.json => 공지사항 목록(게시글, 날짜)
        gallery.json => 갤러리 목록(타이틀, 이미지(img src))
        category.json => 메인메뉴, 서브메뉴
        slide.json => 슬라이드(타이틀, 이미지(background-image(url)))
    
notice.json
- 시작은 {}로
- 문자열은 "겹따옴표 사용"
9월 just 쇼핑몰 세일 안내! 2018-09-03
불편한 경험은 저희에게도 알려주세요. 2018-09-02
카카오톡 친구 추가하고 할인쿠폰 받아 가세요. 2018-09-01
다른곳에선 못보는~ 매력발산 아이템들 구경해 보실래요? 2018-08-31
just 쇼핑몰을 친구에게 추천하면 할인쿠폰을 드립니다! 2018-08-30

```js

    // 공지사항이 props로 전달받았을 때 실행 => useEffect()
    React.useEffect(()=>{
        console.log(공지사항)
    },[공지사항]); //공지사항이 들어왔다면~

```


# 객체(Object) 키(keys) 속성 확인 후 상태변수 저장
```JS

    // ['공지사항', '갤러리'].includes(포함되어있니)('공지사항')
    console.log(Object.keys(res.data))
    console.log(Object.keys(res.data).includes('공지사항'))
    console.log(Object.keys(res.data).includes('갤러리'))

    const n = Object.keys(res.data).includes('공지사항');
    const g = Object.keys(res.data).includes('공지사항');
    if(n === true && g === true){
        setState({
            ...state,
            공지사항: res.data.공지사항,
            갤러리: res.data.갤러리
        })
    }

```