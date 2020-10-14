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
                console.log('mysql connection error : ' + err);
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
        /* getJoinLists: function(callback){
            let conn = this.getConnection();
            let sql = `
                SELECT * from users03
                    `;
    conn.query(sql, (error, rows, fields) =>{
        if(error)
            console.log(error);
        callback(rows);
    });
    conn.end();
        }, */
        registerUser : function(params, callback){
            let sql = `insert into users(uid, pwd, uname, tel, email) values(?, ?, ?, ?, ?);`;
            let conn = this.getConnection();
            conn.query(sql, params, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        }
    };
        /* deleteUser : function(uid, callback){
            let sql = `delete from users where sid =?`;
            let conn = this.getConnection();
            conn.query(sql, uid, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        },
        getUser: function(uid, callback){
            let sql = `SELECT * from users WHERE uid=?;`
            let conn = this.getConnection();
            conn.query(sql, uid, function(error, rows, fields){
                if(error)
                console.log(error);
                callback(rows[0]);      // 주의할 것 - [0]으로 부를지, 그냥 rows로 부를지
            });
            conn.end();   
        },
        updateUser : function(params, callback){
            let sql = `update users set email=?, tel=?, pwd=? where uid=?`;
            let conn = this.getConnection();
            conn.query(sql, params, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        } */