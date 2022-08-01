// /*create인지 update인지를 구별해주는 전역변수*/
// var selectedRow = null;

// function onFormSubmit() {
//     /*
//     입력처리(isValid가 true일때만 입력)
//     */
//     if(validate()) {
//         var formData = readFormData();
//         /*selectedRow로 create인지 update인지를 구분(update시 selectedRow를 인자로 받으므로)*/
//         if(selectedRow == null) {
//             /*create는 새로운 row를 생성*/
//             insertNewRecord(formData);
//         }
//         else {
//             /*update는 selcted된 row를 수정*/
//             updateRecord(formData);
//         }
//         /*입력창 비우고 selectedRow 비우기*/
//         resetForm();
//     }
// }

// function readFormData() {
//     /*
//     html textbox와 연결해 입력된 데이터들을 read하고 return
//     */
//     var formData = {};
//     formData["writer"] = document.getElementById("writer").value;
//     formData["title"] = document.getElementById("title").value;
//     formData["content"] = document.getElementById("content").value;
//     return formData;
// }

// function insertNewRecord(data) {
//     /*
//     게시글 리스트(setList) body에 입력한 데이터 삽입
//     */
//     var table = document.getElementById("setList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.writer;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.title;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.content;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = getToday();
//     cell4 = newRow.insertCell(4);
//     cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                        <a onClick="onDelete(this)">Delete</a>`;
// }

// function resetForm() {
//     /*
//     submit 후 입력창 비우기 + selectedRow 초기화
//     */
//     document.getElementById("writer").value ="";
//     document.getElementById("title").value ="";
//     document.getElementById("content").value ="";
//     selectedRow = null;
// }

// function onEdit(td) {
//      /*
//     td태그의 부모들 = 선택 된 행의 내용정보를 얻어와 입력창에 대입 
//      */
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("writer").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("title").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("content").value = selectedRow.cells[2].innerHTML;
// }

// function updateRecord(formData) {
//     /*
//     update시 내용 수정
//     */
//     selectedRow.cells[0].innerHTML = formData.writer;
//     selectedRow.cells[1].innerHTML = formData.title;
//     selectedRow.cells[2].innerHTML = formData.content;
// }

// function onDelete(td) {
//     /*
//     해당 로우 삭제 후 resetForm
//     */
//     if(confirm('정말로 삭제하시겠습니까?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("setList").deleteRow(row.rowIndex);
//         resetForm();
//     }    
// }

// function validate() {
//     /*
//     writer(필수)가 빈칸이면 채워야된다는 메시지 출력과 함께 false를 반환.
//     */
//     isValid = true;
//     if (document.getElementById("writer").value == "") {
//         isValid = false;
//         document.getElementById("writerValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("writerValidationError").classList.contains("hide")) {
//             document.getElementById("writerValidationError").classList.add("hide")
//         }
//     }
//     return isValid;
// }

// function getToday() {
//     /*오늘 날짜 return*/
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = ("0" + (1 + date.getMonth())).slice(-2);
//     var day = ("0" + date.getDate()).slice(-2);
//     return year + "-" + month + "-" + day;
// }

// const moment = require("moment");
// console.log("today", moment().format("YYYY-MM-DD"));

/* nodemon 실행 커맨드 = npx nodemon crud.js */

var express = require("express");
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');
const { copyFileSync } = require("fs");
var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'simplecrud'
})

con.connect(function (err) {
    if(err) throw err;
    console.log('Connected')

    const sql = 'SELECT * FROM users'
    con.query(sql, function(err, result, field) {
        if(err) throw err;
        console.log(result);
    })
})

app.listen(3000, function() {
    console.log("start! express server on port 3000");
  });

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + "/public/main.html"));
})
// app.post('/', function(req, res) {
//     const sql = "INSERT INTO users SET ?"

//     con.query(sql, req.body, function(err, result, field) {
//         if (err) throw err;
//         console.log(result);
//         res.send('등록이 완료되었습니다.');
//     })
//     res.send(req.body);
// })

//localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
// app.get('/main', function(req,res) {
//     res.sendFile(__dirname + "/public/main.html")
// })

app.use(express.static('public'));

// /* GET home page */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express'});
// });

// router.get('/api/get/demo', function(req, res) {
//     res.status(200).json({
//         "message" : "call get api demo"
//     });
// });

// router.post('/api/post/demo', function(req, res) {
//     res.status(200).json({
//         "message" : "call post api demo"
//     });
// });

// module.exports = app;