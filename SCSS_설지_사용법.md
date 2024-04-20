# SASS 설치
```node
1. npm i sass

2. npm i sass-loader

npm i sass sass-loader << 한번에 설치

```

# 변수 사용법
```scss
    /* 변수 선언 */
    $url: 'http://192.168.136.93:3000'; // 절대주소에서는 public 삭제
    $url3: '../../../../public'; // 상대주소에서는 public 필수

    /* 변수 사용  #{변수이름} */
    &:nth-child(1) a {
        background-image: url(#{$url}/images/image2.gif);
    }
```