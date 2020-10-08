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

let sql = `SELECT continent, count(NAME) AS COUNT , round(SUM(gnp)) AS sumContinentGnp, round(AVG(gnp)) AS avgContinentGnp FROM country
GROUP BY continent
ORDER BY continent;`;
conn.query(sql, function (error, rows, fields) {
    if (error)
        console.log(error);
        for (let row of rows){
            console.log(row.continent, row.COUNT, row.sumContinentGnp, row.avgContinentGnp);         
        }
});
conn.end();