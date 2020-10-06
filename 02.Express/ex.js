/* const mysql = require('mysql');
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'hsuser',
    password : 'hspass',
    database : 'world'
});

connection.connect();

let sql = 'SELECT * FROM city Where population > 9000000;';
connection.query(sql, function(error, results, fields){
    if (error)
        throw error;
    console.log(results);
});

connection.end(); */

const { getEnabledCategories } = require("trace_events");

/* const fs = require('fs')
const mysql = require('mysql')
const data = fs.readFileSync('./dbconfig.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
});
connection.connect();

let sql = 'SELECT * FROM city Where population > 9000000;';
connection.query(sql, function(error, results, fields){
    if (error) throw error;
    for (let city of results)
        console.log(city.Name, city.CountryCode, city.Population);
});

connection.end(); */

/* connection.connect();

let image = "https://placeimg.com/100/100/any";
let name = "유강남";
let birthday = "911004";
let gender = "남자";
let job = "야구선수";
let params = [image, name, birthday, gender, job];

const sql = 'insert into customer(image, name, birthday, gender, job) \
values (?, ?, ?, ?, ?)';
connection.query(sql, params, function(error, results){
    if (error)
        throw error;
});

connection.end();
 */


 /* getDB(params, callback){
     connection.connect();
     let sql = 'SELECT * FROM ...;';
     connection.query(sql, params, function(error, results, fileds){
         if (error)
            throw error;
            callback(results);
     });
     connection.end();
 }
 writeDB(params, callback){
     connection.connect();
     let sql = 'INSERT INTO ...;';
     connection.query(sql,params, function (error, fileds){
         if(error)
            throw error;
            callback();
     });
     connection.end();
 } */