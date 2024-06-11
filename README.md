1. 상태관리
```text
(1) react-native : ^0.74.1
(2) yarn : ^4.2.2
(3) nvm : ^1.1.12
(4) node : ^20.11.1 // >= ^18
(5) npm : ^10.2.4
```

2. 로컬 사용방법
```text
(1) npm install or yarn
(2) device manager를 통해 device를 로컬에서 실행시키거나, 실제 디바이스를 컴퓨터에 직접 연결시키기
(3) yarn(npx) react-native run-android(run-ios)
```

3. 사용시 주의사항
```text
(1) 공통 스타일을 위해 nativewind 라이브러리를 사용한다. className 형식으로 스타일을 작성한다. 
    App.js 내 HomeStack으로 분기되는 컴포넌트에 대하여 최상단의 View 컴포넌트 내에 className="text-sans"를 반드시 추가한다. 
```