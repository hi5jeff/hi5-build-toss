# 1. npm install 통해 관련 node 패키지 설치해준다.
```
npm install
```
# 2. granite.config.ts 정보 수정. 
```
  appName: 'hi5games-cat-tripletilematch', // 개발자 콘솔에 / 앱 정보 / 앱 ID 와 일치.
  brand: {
    displayName: '트리플 타일 매치 : 고양이의 보은', // 화면에 노출될 앱의 한글 이름으로 바꿔주세요.
    primaryColor: '#3182F6', // 화면에 노출될 앱의 기본 색상으로 바꿔주세요.
    icon: "https://static.toss.im/appsintoss/2281/803e01f5-fd6f-47a6-8e0e-7f29a65af2c7.png", // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요.
    bridgeColorMode: 'basic',
  }
```

# 3. 게임 빌드 파일 전부를 ./public 폴더에 복사해 둔다. 
```
./public/HI5SDK.js 파일은 지우면 안됨. 
```

# 4. ./index.html 수정.