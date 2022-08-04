var express = require("express");
var mysql = require('mysql');
var path = require('path');
/* post 메소드 처리할때 req.body의 내용이 undefined 되는걸 방지 */
var bodyParser = require('body-parser');
/* HTML과 똑같은 사용법인데 <% ---- %> 를 사용해 서버의 데이터 사용과 코드사용 가능*/
var ejs = require('ejs');
const { copyFileSync } = require("fs");
let cors = require('cors');
let http = require('http');
var app = express();
var router = express.Router();

/* app ejs 연결 및 경로설정 */
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* 디비연결 */
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'simplecrud'
})

/* 서버연결 */
app.listen(3000, function() {
    console.log("start! express server on port 3000");
  });

/* 테이블조회 */
con.connect(function (err) {
    if(err) throw err;
    console.log('Connected')

    const sql = 'SELECT * FROM users'
    con.query(sql, function(err, result, field) {
        if(err) throw err;
    })
})

/* 테이블조회 -> 브라우저 표시 */
app.get('/', function(req, res) {
    const sql = "SELECT * FROM users";
    con.query(sql, function(err, result, fields) {
        if(err) throw err;
        res.render('index', { users: result });
    })
})

/* 테이블의 데이터 삭제 */
app.get('/delete/:name', function(req, res) {
    const sql = "DELETE FROM users WHERE name = ?";

    con.query(sql,[req.params.name], function(err, result, fields) {
        if(err) throw err;
        console.log(result);
        res.redirect("/");
    })
})

/* 선택된 데이터와 업데이트화면 출력 */
app.get('/update/:name', function(req, res) {
    const sql = "SELECT * FROM users WHERE name = ?";

    con.query(sql,[req.params.name], function(err, result, fields) {
        if(err) throw err;
        res.render('edit', {users : result});
    });
});

/* 업데이트 쿼리 전송 */
app.post('/update/:name', function(req, res) {
    const sql = "UPDATE users SET ? WHERE name = '" + req.params.name + "'";
    
    con.query(sql, req.body, function(err, result, fields) {
        if(err) throw err;
        res.redirect("/");
    });
});

/* 게시글 작성 시 쿼리 전송 */
app.post('/', function(req, res) {
    const sql = "INSERT INTO users SET ?"

    con.query(sql, req.body, function(err, result, field) {
        if(err) throw err;
        res.redirect('/');
    })
})