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
    
(2) 이미지 폼은 png 파일을 사용한다. svg 파일을 사용하려면 컴포넌트화 하여 사용해야하기 때문이다.
    모든 이미지 파일은 root/src/assets/img/~~ 폴더 내에 작성한다.
    초기 config 작성에 의해 아래의 사용법과 같이 경로 규칙을 지켜서 작성한다.
        
```
```html
<Image
    source={require('@assets/inner_logo.png')}
/>
```

