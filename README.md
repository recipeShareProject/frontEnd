# 레시피 검색 사이트📘
[ 노션보러가기](https://www.notion.so/674224e67a404a3ebfa15cfa42fd2857)

<br>
<br>

## 목차
 1. [팀원 소개 및 제작 기간](#팀원-소개-및-제작-기간)
 2. [사용 기술](#사용-기술)
 3. [아키텍쳐](#아키텍쳐)
 4. [협업 과정](#협업-과정)
 5. [실행 화면](#실행-화면)
 6. [dependency](#dependencies)
<br>
<br>



## 팀원 소개 및 제작 기간


- 2022년 5월 30일 ~ 
- 6인 1조 팀프로젝트
  + 프론트엔드 (React) : 홍현승,이현주
  + 백엔드 (Spring) : 한상훈, 이수민
  + 디자이너 : 김지아, 김규리
<br>
<br>


<br>

* 설명
냉장고에 있는 재료를 검색 후 일치되는 레시피 검색
재료 공유 커뮤니티

[<span style="color:red">**직접 사용하러 가기**</span>](www.happypotluck.com)


<br>
<br>

## 사용 기술


`Front-end`
- React
- Redux-toolkit


`Back-end`
-  ([Backend Repository이동]([링크](https://github.com/recipeShareProject/Hanghae-Final-6D-5))


`deploy`
- AWS S3 
- Route 53
- Amplify
- https

<br>
<br>

##  아키텍쳐
<br>

<br>

![아키텍처](https://user-images.githubusercontent.com/51289147/172575643-67c679c6-ba66-477e-b5d9-758081878d19.png)

<br>

##  협업 과정


- 전체 팁 협업 : `notion`
- 협업
	+ `Figma`를 통하여 디자이너와 협업
	+ `api명세서`를 이용하여 백엔드와 협업

- 구현   
	: 모든 작업은 다음과 같은 과정을 거쳤습니다.
	
	

<br>
<br>

<br>
<br>

##  실행 화면
### 메인화면

![메인 모바일](https://user-images.githubusercontent.com/51289147/172576635-673f082b-3db0-4ead-acdf-360156f8c647.PNG)
![메인 태블릿](https://user-images.githubusercontent.com/51289147/172576638-42a6b9da-3631-4eb3-b996-da1b5536612d.PNG)

### 로그인
![로그인](https://user-images.githubusercontent.com/51289147/172578830-907a88e8-9ac9-4841-ad5c-0556f7bf4273.PNG)

### 레시피
![레시피 모바일](https://user-images.githubusercontent.com/51289147/172576618-923980d3-3f3c-4901-a903-2b533e98d7f5.PNG)
![레시피 태블릿](https://user-images.githubusercontent.com/51289147/172576620-3537eeea-9419-415f-8f8e-13211dcc89ef.PNG)
![레시피 등록](https://user-images.githubusercontent.com/51289147/172576613-8b9f6fcc-12f6-4690-9d2e-22895c80e8ca.PNG)
![레시피 등록2](https://user-images.githubusercontent.com/51289147/172576614-dd70f279-8470-40bf-8909-a3175c190f77.PNG)

### 파티(커뮤니티)
![파티 모바일](https://user-images.githubusercontent.com/51289147/172576641-b28aa11f-a531-4b95-949e-c6c7f7c5ffe6.PNG)
![파티 태블릿](https://user-images.githubusercontent.com/51289147/172576645-f6c14dca-a91b-4175-a8be-8106316f978e.PNG)
![게시글 등록 모바일](https://user-images.githubusercontent.com/51289147/172576595-330bb1fd-c3b0-4a3a-b284-a94fad9fc8e0.PNG)
![게시글 등록 태블릿](https://user-images.githubusercontent.com/51289147/172576602-16a64d23-f72a-46e3-90cb-dd324dc0b459.PNG)
![등록 상세](https://user-images.githubusercontent.com/51289147/172576610-9b97eec4-f351-428e-9be9-c2097ffec32d.PNG)

### 마이페이지
![마이페이지 모바일](https://user-images.githubusercontent.com/51289147/172576629-497a73be-4609-4dec-a8b1-38148ee969a6.PNG)
![마이페이지 태블릿](https://user-images.githubusercontent.com/51289147/172576631-3cf3fbde-0087-4e2c-a903-b386be85d8fd.PNG)
![나의글](https://user-images.githubusercontent.com/51289147/172576606-73eb1b15-6b9b-4c02-94a3-0315f95409f0.PNG)








<br>
<br>

## dependencies

<br>

+ "@emotion/react": "^11.9.0" <br>
+  "@emotion/styled": "^11.8.1"<br>
+    "@material-ui/icons": "^4.11.3"<br>
+    "@mui/icons-material": "^5.6.2"<br>
+    "@mui/material": "^5.4.1"<br>
+    "@mui/styles": "^5.6.2"<br>
+    "@mui/x-date-pickers": "^5.0.0-alpha.2"<br>
+    "@reduxjs/toolkit": "^1.8.1"<br>
+    "@testing-library/jest-dom": "^5.14.1"<br>
+    "@testing-library/react": "^13.0.0"<br>
+    "@testing-library/user-event": "^13.2.1"<br>
+    "axios": "^0.24.0"<br>
+    "connected-react-router": "^6.8.0"<br>
+    "dayjs": "^1.11.2"<br>
+    "lodash": "^4.17.21"<br>
+    "qs": "^6.10.3"<br>
+    "react": "^18.1.0"<br>
+    "react-cookie": "^4.1.1"<br>
+    "react-cookies": "^0.1.1"<br>
+    "react-datepicker": "^4.7.0"<br>
+    "react-dom": "^18.1.0"<br>
+    "react-hook-form": "^7.30.0"<br>
+    "react-redux": "^7.2.0"<br>
+    "react-responsive": "^9.0.0-beta.8"<br>
+   "react-router": "^6.3.0"<br>
+    "react-router-dom": "^6.3.0"<br>
+    "react-scripts": "5.0.1"<br>
+    "react-slick": "^0.29.0"<br>
+    "redux": "^4.2.0"<br>
+    "redux-devtools-extension": "^2.13.8"<br>
+    "redux-logger": "^3.0.6"<br>
+    "redux-persist": "^6.0.0"<br>
+    "redux-thunk": "^2.3.0"<br>
+    "slick-carousel": "^1.8.1"<br>
+    "styled-components": "^5.3.5"<br>
+    "web-vitals": "^2.1.0"<br>



<br>



