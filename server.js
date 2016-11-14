var express = require("express")

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser")

var fs = require("fs")

var app = express()

app.use(express.static("www"))

app.use(bodyParser.urlencoded({extended:false}))

app.use(cookieParser())


//********注册接口**************************************

app.post("/regist-api",function(req,res){
	var str = JSON.stringify(req.body)
	var fileName = "users/"+req.body.account+".json"
	if(fs.existsSync(fileName)){
		res.json({err:1,msg:"用户名已存在"})
	}else{
		fs.writeFile(fileName,str,function(err){
			if(!err){
				res.json({err:0,msg:"注册成功"})
			}else{
				res.json({err:2,msg:"服务器存储失败"})
			}
		})
	}
})


//*************登录接口************************************
app.post("/login-api",function(req,res){
	//登录成功，生成token
	function makeToken(){
		var sourceStr = "1234567890abcdefghijklmnopqrstuvwxyz";
		var token = ""
		for (var i=0;i<10;i++){
			token += sourceStr[Math.floor(Math.random()*sourceStr.length)]
		}
		return token;
	}
	var fileName = "users/"+req.body.account+".json"
	//判断用户名是否存在
	if(!fs.existsSync(fileName)){
		res.json({err:1,msg:"用户不存在,请先注册"});
	}else{
		fs.readFile(fileName,function(err,data){
			if(err){
				res.json({err:2,msg:"服务器内部错误"});
			}else{
				var user = JSON.parse(data);
				if(req.body.psw == user.psw){
					//登录成功，先生成token
					var token = makeToken();
					//通过cookie把token发给客户端。
					res.cookie("token",token);
					res.cookie("account",user.account);
					//服务端也要存储token
					user.token = token;
					var str = JSON.stringify(user);
					fs.writeFile(fileName,str,function(err){
						res.json({err:0,msg:"登录成功"});
					});
				}else{
					res.json({err:3,msg:"密码错误"});
				}
			}
		});
	}
});


app.listen(8080,function(){
	console.log("服务器已经跑起来.....go..go..go")
})



