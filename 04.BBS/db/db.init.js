const fs = require('fs');
const mysql = require('mysql');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);

module.exports = {
    getConnection : function(){
        let conn = mysql.createConnection({
            host : config.host,
            user : config.user,
            password : config.password, // github에 올릴 때 password가 올라가기 때문에 처리해야함.
            database : config.database,
            port : config.port
        });
        conn.connect(function(error) {
            if(error) 
                console.log('mysql connection error : ' +error);
            });
            return conn;
        },
        getAllLists: function(callback){
    let sql = `CREATE TABLE if not exists users(
        uid VARCHAR(20) NOT NULL PRIMARY KEY,
        pwd CHAR(44) NOT null,
        uname VARCHAR(20) NOT null,
        tel varchar(20),
        email varchar(40),
        regDate DATETIME DEFAULT CURRENT_TIMESTAMP,
        isDeleted INT DEFAULT 0 
        );
    `;
    let conn = this.getConnection();
    conn.query(sql, (error, fields) =>{
        if(error)
            console.log(error);
    });
    conn.end();
        },

        getAllList:    function(callback) {
            let conn = this.getConnection();
            let sql = `SELECT bid, title, uid, date_format(modTime, '%Y-%m-%d %T') AS modTime, viewCount FROM bbs WHERE isDeleted=0 ORDER BY bid DESC LIMIT 10`;
            conn.query(sql, (error, rows, fields) => {
                if (error)
                    console.log(error);
                callback(rows);
            });
            conn.end();
        },

        registerUser : function(params, callback){
            let sql = `insert into users(uid, pwd, uname, tel, email) values(?, ?, ?, ?, ?);`;
            let conn = this.getConnection();
            conn.query(sql, params, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        },
    
        getUserInfo :    function(uid, callback) {
            let conn = this.getConnection();
            let sql = `select * from users where uid like ?;`;
            conn.query(sql, uid, (error, results, fields) => {
                if (error)
                    console.log(error);
                    callback(results[0]);   // 주의할 것
                });
                conn.end();
            },
            getWrite:    function(params, callback) {
                let conn = this.getConnection();
                let sql = `insert into bbs(title, uid, content) VALUES(?, ?, ?);`;
                conn.query(sql, params, (error, rows, fields) => {
                    if (error)
                        console.log(error);
                    callback(rows);
                });
                conn.end();
            }
}

            /* deleteUser : function(uid, callback){
                let sql = `delete from users where sid =?`;
                let conn = this.getConnection();
                conn.query(sql, uid, function(error, fields){
                    if(error)
                    console.log(error);
                    callback();
                });
                conn.end();   
            }, */
            /* updateUser : function(params, callback){
                let sql = `update users set email=?, tel=?, pwd=? where uid=?`;
            let conn = this.getConnection();
            conn.query(sql, params, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        } */