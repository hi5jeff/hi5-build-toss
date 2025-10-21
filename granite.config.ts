import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'hi5games-cat-tripletilematch', // 개발자 콘솔에 / 앱 정보 / 앱 ID 와 일치.
  brand: {
    displayName: '트리플 타일 매치 : 고양이의 보은', // 화면에 노출될 앱의 한글 이름으로 바꿔주세요.
    primaryColor: '#3182F6', // 화면에 노출될 앱의 기본 색상으로 바꿔주세요.
    icon: "https://static.toss.im/appsintoss/2281/803e01f5-fd6f-47a6-8e0e-7f29a65af2c7.png", // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요.
    bridgeColorMode: 'Inverted', // Basic, Inverted
  },
  web: {
    host: '172.30.1.72', // 로컬에서 샌드박스 앱을 연결해 테스트 하려면 설정 해야 한당.
    port: 5173,
    commands: {
      dev: 'vite --host',
      build: 'vite build',
    },
  },
  permissions: [],
  outdir: 'dist',
  webViewProps:{
    type: 'game'
  }
});
