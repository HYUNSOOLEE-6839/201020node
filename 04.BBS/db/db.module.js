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
            let conn = this.getConnection();
    let sql = ``;
    conn.query(sql, (error, rows, fields) =>{
        if(error)
            console.log(error);
        callback(rows);
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
            let sql = `insert into users(uid, pwd, uname, regDate) values(?, ?, ?, ?);`;
            let conn = this.getConnection();
            conn.query(sql, params, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        }
    };
        /* deleteSong : function(sid, callback){
            let sql = `delete from songcopy where sid =?`;
            let conn = this.getConnection();
            conn.query(sql, sid, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        },
        getSong: function(sid, callback){
            let sql = `SELECT * from songcopy WHERE sid=?;`
            let conn = this.getConnection();
            conn.query(sql, sid, function(error, rows, fields){
                if(error)
                console.log(error);
                callback(rows[0]);      // 주의할 것 - [0]으로 부를지, 그냥 rows로 부를지
            });
            conn.end();   
        },
        updateSong : function(params, callback){
            let sql = `update songcopy set title=?, lyrics=? where sid =?`;
            let conn = this.getConnection();
            conn.query(sql, params, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        } */