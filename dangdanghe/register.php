<?php 
	//获取注册传递的数据
	$username = $_REQUEST["username"];
	$email = $_REQUEST["email"];
	$password = $_REQUEST["password"];
	$phone = $_REQUEST["phone"];
	

	//连接数据库服务器
	mysql_connect("localhost","root","root");
	//选择数据库
	mysql_select_db("project");
	//创建查询SQL语句
	$sql = "INSERT INTO user (username,email,password,phone) VALUES ('$username','$email','$password','$phone')";
	//执行SQL语句,返回执行结果的bollean值
	$result = mysql_query($sql);
	//根据查询结果集判断
	if($result){
		echo '{"status":1,"message":"success"}';
	}else {
		echo '{"status":0,"message":"failed"}';
	}
	//关闭数据库连接
	mysql_close();
 ?>