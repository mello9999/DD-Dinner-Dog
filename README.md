# DD-Dinner-Dog
โปรเจ็คนี้เป็นส่วนหนึ่งของรายวิชา __CPE327 Software Engineering__ 

# Project Description 
:guide_dog: DD Dinner Dog เป็นระบบหาเพื่อนและหาคู่ให้กับสุนัข โดย DD Dinner Dog ถูกสร้างในรูปแบบ
Web Application ซึ่งทุกคนที่เป็นเจ้าของสุนัขและเลี้ยงสุนัขสามารถเข้าไปใช้งานได้ง่ายและสะดวก เจ้าของ
สุนัขที่ต้องการให้สุนัขมีเพื่อนเล่น และต้องการให้สุนัขได้สนุกสนานกับสุนัขตัวอื่น หรือแม้กระทั่งต้องการให้
สุนัขของตนมีคู่และผสมพันธุ์ในช่วงเป็นสัตว์ สามารถหาเพื่อนให้สุนัขได้ในทั้งระยะใกล้และไกลขึ้นอยู่กับการ
กำหนดระยะทางในระบบ  

#### Proposal Project
> DD Dinner Dog เป็นแอพพลิเคชั่นที่เหมาะสำหรับคนเลี้ยงสุนัข โดยมีขอบเขตของการทำงาน 
> และ วัตถุประสงค์ดังนี้ 
> 1. เพื่อตอบสนองคนเลี้ยงสุนัขที่มีความกังวลว่าสุนัขของตนจะเหงาและอยากมีเพื่อน
> 2. เพื่อเป็นตัวกลางในการจับคู่ให้สุนัข
> 3. ผู้ใช้งานสามารถกำหนดลักษณะของสุนัขที่อยากเลือกได้

# Product Perspective
:wolf: DD Dinner Dog เป็น Application ที่หาคู่ให้กับสุนัขจะมีผู้ใช้อยู่ 2 ประเภทคือ USER ที่เป็นเจ้าของสุนัข 
เเละ สัตวแพทย์ที่จะให้คำปรึกษากับเจ้าของสุนัข ซึ่งเจ้าของสุนัขสามารถหาเพื่อนหรือหาคู่ให้กับสุนัขได้ 

:dog: User จะสามารถเลือกตำเเหน่งที่อยู่บริเวณใกล้เคียงกันได้ หรือ พันธุ์สุนัขที่สนใจได้ตามใจเจ้าของสุนัข โดยการหาเพื่อนและหาคู่ให้สุนัขบนแอพพลิเคชั่นนี้มีระบบการทำงาน คือ 
> 1. ผู้ใช้งานสามารถปัดหน้าจอ like หรือ nope สุนัขที่ระบบสุ่มมาให้ในระยะทางที่กำหนด หรือจะ ปัดเเบบ super like ได้ 
> 2. ผู้ใช้สามารถเลือกที่จะเป็นสมาชิก premium ได้ โดยสมาชิก premium สามารถดูได้ว่าใครปัดเลือกและไม่เลือกสุนัขของเรา รวมถึงสามารถทำการสุ่มสุนัขใหม่
> 3. เมื่อผู้ใช้งานปัดเลือกตรงกัน ก็จะสามารถใช้งานช่องแชทเพื่อติดต่อแลกเปลี่ยนข้อมูลสุนัขผ่านทางข้อความ โทรด้วยเสียง และ วิดีโอคอล ก่อนการนำสุนัขมานัดเจอกันได้ 
> 4. เจ้าของสุนัขสามารถรายงานเจ้าของสุนัขคนอื่นที่ก่อกวนได้ 
> 5. เจ้าของสุนัขสามารถเเชท เพื่อติดต่อกับสัตวเเพทย์ได้ตลอดเวลา 

:dog::heart::dog2: 

# Work Planner
- [x] Get Requirement specification :heavy_check_mark:
- [x] Design Mock up :heavy_check_mark:
- [ ] Implement 5 module up :o:
  - [ ] 1. login  
      - [ ] 1. User
      - [ ] 2. Vet
  - [ ] 2. register 
      - [ ] 1. User
      - [ ] 2. Vet 
  - [ ] 3. Swipe page 
  - [ ] 4. Chat 'User' page 
  - [ ] 5. Chat 'Vet' page  
  - [ ] 6. Premium page
  - [ ] 7. Profile page 
      - [ ] 1. User
      - [ ] 2. Vet  
  - [ ] 8. Setting page 
      - [ ] 1. User 
      - [ ] 2. Vet 
- [ ] Tester :o:
  - [ ] 1. login 
      - [ ] 1. User
      - [ ] 2. Vet
  - [ ] 2. register 
      - [ ] 1. User
      - [ ] 2. Vet 
  - [ ] 3. Swipe page
  - [ ] 4. Chat 'User' page 
  - [ ] 5. Chat 'Vet' page  
  - [ ] 6. Premium page
  - [ ] 7. Profile page 
      - [ ] 1. User
      - [ ] 2. Vet  
  - [ ] 8. Setting page 
      - [ ] 1. User 
      - [ ] 2. Vet 
  
# Installing
### backend 
#### Install __npm__
```
$ npm install 
```
#### Install __sequelize-cli__ เพื่อการเชื่อมต่อกับ database 
```
$ npm install -g sequelize-cli
```
#### Create Database 
```
$ sequelize-cli db:create
```
#### run 
```
$ node index.js
```
### frontend
#### Install __npm__
```
$ npm install
```
#### run 
```
$ npm start
```
 
# Running the tests 
เวลา run program ต้อง run ทั้ง 2 ส่วนพร้อมกัน
###  backend
#### run
```
$ node index.js
```
###  frontend
#### run 
```
$ npm start
```
  
# Deployment  
<p align = 'center'> ...coming soon... </p>
  
# Built With 
<p align = 'center'> ...coming soon... </p>
  
# Versioning 
<p align = 'center'> ...coming soon... </p>
  
# Authors
Member in team : 'Cap Moo Developer Team' :dog:
> * :woman: Ms.Nasiree Suchartsunthorn 60070501095
> * :woman: Ms.Natchariya Wongamnuayporn 61070507204
> * :man: Mr.Natchapol Patamawisut 61070507205
> * :woman: Ms.Thanaporn Cheentada 61070507209
> * :man: Ms.Rungwigrai Payakkanuwat 61070507219

# Acknowledgements
 <p align = 'center'> ...coming soon... </p>
