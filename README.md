<h1 align="center"> 👾 URL Shortener 👾 </h1>

<br>

## ✔️ Spec
- 웹 페이지 입력폼에 URL 입력 시 단축된 결과 출력
- 브라우저의 주소창에 단축 URL 입력 시 기존 URL로 리다이렉트
- 같은 URL 입력 시 동일한 결과값 도출
- 결과값은 주소를 제외하고 8글자 이내로 작성

<br>

## 📓 Skill

#### Frontend
- EJS
- CSS

#### Backend
- Node.JS
- Express

#### Server
- Ubuntu 18.04

#### Database
- MySQL
- Knex.js
<img width="563" alt="스크린샷 2021-11-04 오후 1 23 05" src="https://user-images.githubusercontent.com/74098327/140257696-677dd0b6-b7e3-4340-bf5b-59eb457eb6e3.png">

## 🖥 화면
#### 메인 화면
<img width="1266" alt="스크린샷 2021-11-04 오후 1 23 54" src="https://user-images.githubusercontent.com/74098327/140257769-d59fea98-f2e5-4035-a53d-642019acaa15.png">

#### 성공 화면
<img width="1266" alt="스크린샷 2021-11-04 오후 1 24 22" src="https://user-images.githubusercontent.com/74098327/140257812-0488d954-4342-4abc-82cd-d01e1af1ad3f.png">

#### URL 리스트 화면
<img width="1247" alt="스크린샷 2021-11-04 오후 1 28 04" src="https://user-images.githubusercontent.com/74098327/140258066-6df78f5e-95f9-466f-81d4-b1316fca6761.png">

#### 실패 화면
<img width="1274" alt="스크린샷 2021-11-04 오후 1 23 28" src="https://user-images.githubusercontent.com/74098327/140257730-d19cf5f1-f4cb-4565-b0a4-1d4aae781206.png">

<br>

## 🔁 Flow
- INPUT BOX에 URL 입력
- 해당 URL이 DB에 저장되어 있는지 체크
- 저장되어 있으면 DB에 있는 shorten_url 제공
- 처음 입력된 URL이면 URL 정규식 체크 후 DB column origin_url에 저장
- PK 값인 AUTO_INCREMENT을 가져와서 Base62 encode 후 결과 값을 DB column shorten_url에 저장
- shorten_url 링크를 클릭 하거나 브라우저에 입력하면, DB column origin_url에 접근하여 redirect

## PAGE LINK
http://13.125.160.130:8080/
