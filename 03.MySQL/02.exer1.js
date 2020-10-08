const mysql = require('mysql');
const fs = require('fs');
let info = fs.readFileSync('./mysql.json', 'utf8');
let connInfo = JSON.parse(info);

let conn = mysql.createConnection({
    host : connInfo.host,
    user : connInfo.user,
    password : connInfo.password, // github에 올릴 때 password가 올라가기 때문에 처리해야함.
    database : connInfo.database,
    port : connInfo.port
});

conn.connect();

let sql = `SELECT l.name, DATE_FORMAT(l.debut,'%Y-%m-%d') AS debutDate, r.title
FROM girl_group AS l #left
 JOIN song AS r  #right 
  ON l.hit_song_id = r._id
   WHERE debut 
   BETWEEN '2009-0101' AND '2009-12-31';`;
conn.query(sql, function (error, rows, fields) {
    if (error)
        console.log(error);
        for (let row of rows){
            console.log(row.NAME, row.debutDate);         
        }
});
conn.end();