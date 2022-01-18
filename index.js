const express = require("express");
const app = express();
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('db.sql');
var bodyParser = require('body-parser')
var cors = require('cors');

app.use(bodyParser.json())

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get("/api/content1",(req,res) => {
    db.all("SELECT content FROM precily WHERE id = 1",[],(err,val) => {
        res.json(val);
    });
});

app.get("/api/content2",(req,res) => {
    db.all("SELECT content FROM precily WHERE id = 2",[],(err,val) => {
        res.json(val);
    });
});

app.get("/api/content3",(req,res) => {
    db.all("SELECT content FROM precily WHERE id = 3",[],(err,val) => {
        res.json(val);
    });
});

app.post("/api/content1",(req,res) => {
    db.run("Update precily SET content=? where id = 1",[req.body.text],(err,val) => {
        res.json({success:true});
    });
});

app.post("/api/content2",(req,res) => {
    db.run("Update precily SET content=? where id = 2",[req.body.text],(err,val) => {
        res.json({success:true});
    });
});

app.post("/api/content3",(req,res) => {
    db.run("Update precily SET content=? where id = 3",[req.body.text],(err,val) => {
        res.json({success:true});
    });
});

const port = process.env.PORT||5050;

app.listen(port,() => console.log(`Server started on port ${port}`));