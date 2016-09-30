var express = require("express");
var fs = require("fs");
var app = express();
var bufferData=[];
fs.readFile("data/1.json",function(err,data){
	bufferData.push(data);
})
// fs.readFile("data/2.json",function(err,data){
// 	bufferData.push(data);
// })
// fs.readFile("data/3.json",function(err,data){
// 	bufferData.push(data);
// })
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get("/tcb",(req,res,next)=>{
	// console.log("当前页数为"+req.params.count)
	// res.type('application/json');
	var count = req.params.count;
	// res.set("Content-Type","application/json");
	res.send(bufferData[0]);
})
app.listen(3000);
console.log("服务启动!");