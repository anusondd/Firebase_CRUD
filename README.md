
### วิธีการติดตั้งโปรเจคลงเครื่อง:

เมื่อทำการ Clone โปรเจคลงเครื่องแล้ว
อันดับแรกต้องติดตั้ง NodeJS 
หลังจากนั้นทำการติดตั้ง Ionic และ cordova โดย Command Prompt 
```
$ npm install -g ionic cordova
```
จากนั้นเข้าไปยัง Folder โปรเจค แล้วใช้ Command Prompt 
```
$ npm install 
```
เมื่อเสร็จแล้วทำการรัน โดยใช้ Command Prompt 
```
$ ionic serve
```
หรือหากต้องการสร้างเป็น Android สามารถใช้ Command Prompt รันโค้ดดังนี้
```
$ npm install promise-polyfill --save-exact
$ ionic cordova build android
```
เมื่อเสร็จแล้วเข้าไปที่ Folder    :โปรเจค\platforms\android\build\outputs\apk
แล้วนำ ไฟล์ .apk ไปติดตั้งบน Android ได้เลย
