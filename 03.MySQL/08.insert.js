const mysql = require('mysql');
const fs = require('fs');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);

let conn = mysql.createConnection({
    host : config.host,
    user : config.user,
    password : config.password, // github에 올릴 때 password가 올라가기 때문에 처리해야함.
    database : config.database,
    port : config.port
});

conn.connect();

let sql = `insert into songcopy(title, lyrics) values('Dynamite', 'I came to dance-dance-dance');`;
conn.query(sql, function (error, fields) {
    if (error)
        console.log(error);
});
conn.end();