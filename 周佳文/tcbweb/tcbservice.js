var express = require("express");
var app = express();
app.use(express.static("tcb"));
app.listen(2222);
console.log("服务启动")