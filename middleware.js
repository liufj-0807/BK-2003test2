// 案例作业

// - 需求：自定义一个中间件，记录用户的访问信息
// - 记录：`IP地址 / 访问时间 / 访问地址 / 访问方式 / 浏览器版本信息`
// - 将记录的文件以日期格式如“20201125.log”形式保存到项目目录下的`logs`目录中
// - 注意，记录的时候使用的是追加写


const express = require('express');
// 使用使用自定义的中间件接收post数据
const csBodyParse = require("./middlewares/csBodyParse");


const app = express();

app.use(csBodyParse);
//路由
app.post("/post",(req,res)=>{
    console.log(req);
})


app.listen(8080,'0.0.0.0',()=>{
    console.log("server is running at http://127.0.0.1:8080");
})