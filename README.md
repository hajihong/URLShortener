<h1 align="center"> ๐พ URL Shortener ๐พ </h1>

<br>

## โ๏ธ Spec
- ์น ํ์ด์ง ์๋ ฅํผ์ URL ์๋ ฅ ์ ๋จ์ถ๋ ๊ฒฐ๊ณผ ์ถ๋ ฅ
- ๋ธ๋ผ์ฐ์ ์ ์ฃผ์์ฐฝ์ ๋จ์ถ URL ์๋ ฅ ์ ๊ธฐ์กด URL๋ก ๋ฆฌ๋ค์ด๋ ํธ
- ๊ฐ์ URL ์๋ ฅ ์ ๋์ผํ ๊ฒฐ๊ณผ๊ฐ ๋์ถ
- ๊ฒฐ๊ณผ๊ฐ์ ์ฃผ์๋ฅผ ์ ์ธํ๊ณ  8๊ธ์ ์ด๋ด๋ก ์์ฑ

<br>

## ๐ Skill

#### Frontend
- EJS
- CSS

#### Backend
- Node.JS
- Express
- MVC Pattern (Model: url ์ถ๊ฐ ๋ฐ shorten url ์ถ๋ ฅ, View: EJS๋ก ์ฒ๋ฆฌ, Controller: ๋ชจ๋ธ์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ ๋ทฐ ejs์ render) 

#### Server
- Ubuntu 18.04

#### Database
- MySQL
- Knex.js
<img width="563" alt="แแณแแณแแตแซแแฃแบ 2021-11-04 แแฉแแฎ 1 23 05" src="https://user-images.githubusercontent.com/74098327/140257696-677dd0b6-b7e3-4340-bf5b-59eb457eb6e3.png">

## ๐ฅ ํ๋ฉด
#### ๋ฉ์ธ ํ๋ฉด
<img width="1266" alt="แแณแแณแแตแซแแฃแบ 2021-11-04 แแฉแแฎ 1 23 54" src="https://user-images.githubusercontent.com/74098327/140257769-d59fea98-f2e5-4035-a53d-642019acaa15.png">

#### ์ฑ๊ณต ํ๋ฉด
<img width="1266" alt="แแณแแณแแตแซแแฃแบ 2021-11-04 แแฉแแฎ 1 24 22" src="https://user-images.githubusercontent.com/74098327/140257812-0488d954-4342-4abc-82cd-d01e1af1ad3f.png">

#### URL ๋ฆฌ์คํธ ํ๋ฉด
<img width="1247" alt="แแณแแณแแตแซแแฃแบ 2021-11-04 แแฉแแฎ 1 28 04" src="https://user-images.githubusercontent.com/74098327/140258066-6df78f5e-95f9-466f-81d4-b1316fca6761.png">

#### ์คํจ ํ๋ฉด
<img width="1274" alt="แแณแแณแแตแซแแฃแบ 2021-11-04 แแฉแแฎ 1 23 28" src="https://user-images.githubusercontent.com/74098327/140257730-d19cf5f1-f4cb-4565-b0a4-1d4aae781206.png">

<br>

## ๐ Flow
- INPUT BOX์ URL ์๋ ฅ
- ํด๋น URL์ด DB์ ์ ์ฅ๋์ด ์๋์ง ์ฒดํฌ
- ์ ์ฅ๋์ด ์์ผ๋ฉด DB์ ์๋ shorten_url ์ ๊ณต
- ์ฒ์ ์๋ ฅ๋ URL์ด๋ฉด URL ์ ๊ท์ ์ฒดํฌ ํ DB column origin_url์ ์ ์ฅ
- PK ๊ฐ์ธ AUTO_INCREMENT์ ๊ฐ์ ธ์์ Base62 encode ํ ๊ฒฐ๊ณผ ๊ฐ์ DB column shorten_url์ ์ ์ฅ
- shorten_url ๋งํฌ๋ฅผ ํด๋ฆญ ํ๊ฑฐ๋ ๋ธ๋ผ์ฐ์ ์ ์๋ ฅํ๋ฉด, DB column origin_url์ ์ ๊ทผํ์ฌ redirect

<br>

## ์๋ฒ ์์ฑ
- AWS EC2 Ubuntu 18.04 ์์ฑ
- ftp-simple๋ก ์๊ฒฉ ์๋ฒ ์ฐ๋ํ์ฌ ๊ฐ๋ฐ
- ๋งํฌ http://13.125.160.130:8080/

<br>

## ๊ฐ์  ์ฌํญ
- [ ] URL ์ ํจ์ฑ ๊ฒ์ฌ ์ถ๊ฐ (https or http๊ฐ ์์ด๋ true๋ก ๋์ค๊ฒ)
- [ ] DB์ origin_url ์ ์ฅ ์ http(s):// ์ ๊ฑฐ
- [ ] ๋ฆฌ๋ค์ด๋ ํธ ์คํจํ์ ๋์ ๋ํ ์๋ฌ ์ฒ๋ฆฌ
