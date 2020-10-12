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
    let sql = `SELECT sid, NAME, DATE_FORMAT(debut, '%Y-%m-%e') AS debut, hit_song_id FROM girlgroup ORDER BY sid DESC LIMIT 11`;
    conn.query(sql, (error, rows, fields) =>{
        if(error)
            console.log(error);
        callback(rows);
    });
    conn.end();
        },
        insertGroup : function(params, callback){
            let sql = `insert into girlgroup(NAME, debut, hit_song_id) values(?, ?, ?);`;
            let conn = this.getConnection();
            conn.query(sql, params, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        },
        deleteGroup : function(sid, callback){
            let sql = `delete from girlgroup where sid=?`;
            let conn = this.getConnection();
            conn.query(sql, sid, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        },
        getGroup: function(sid, callback){
            let sql = `SELECT * from girlgroup WHERE sid=?;`
            let conn = this.getConnection();
            conn.query(sql, sid, function(error, rows, fields){
                if(error)
                    console.log(error);
                callback(rows[0]);      // 주의할 것 - [0]으로 부를지, 그냥 rows로 부를지
            });
            conn.end();   
        },
        updateGroup : function(params, callback){
            let sql = `update girlgroup set sid=?, NAME=?, debut=?, hit_song_id=? where sid =?`;
            let conn = this.getConnection();
            conn.query(sql, params, function(error, fields){
                if(error)
                console.log(error);
                callback();
            });
            conn.end();   
        }
}