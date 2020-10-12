const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const mysql = require('mysql');
let info = fs.readFileSync('./mysql.json', 'utf8');
let config = JSON.parse(info);

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

function getconnection(){
let conn = mysql.createConnection({
    host : config.host,
    user : config.user,
    password : config.password, // github에 올릴 때 password가 올라가기 때문에 처리해야함.
    database : config.database,
    port : config.port
});
conn.connect(function(error) {
    if(error) {
        console.log('mysql connection error : ' + err);
    };
    return conn;
});

app.get('/', (req,res) => {
    let conn = getConnection();
    let sql = `select * from song order by sid desc limit 5;`;
    let html = fs.readFileSync('list.html', 'utf8');
    conn.query(sql, (error, rows, fields) =>{
        if(error)
        console.log(error);
        for (let row of rows){
            html += `<tr>
                    <td>${row.sid}</td>
                    <td>${row.title}</td>
                    <td>${row.lyrics}</td>
                    </tr>`;
        }
        html += `   </table>
                    </body>
                    </html>`
        res.end(html);
    });
    conn.end();
});
app.get('/insert', (req, res) => {
    fs.readFile('11.song.html','utf8',(error, data) => {
        res.send(data);
    });
});

app.post('/insert', (req,res) =>{
    let title = req.body.title;
    let lyrics = req.body.lyrics;
    let sql = `insert into song(title, lyrics) values(?, ?);`;
    let params = [title, lyrics];
    let conn = getConnection();
    conn.query(sql, params, function(error, fields){
        if(error)
        console.log(error);
        res.redirect('/');
    });
    conn.end();
});

app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000');
});