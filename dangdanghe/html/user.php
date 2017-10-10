<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>登录</title>
		<link rel="stylesheet" type="text/css" href="../css/case.css"/>
		<link rel="stylesheet" type="text/css" href="../css/user.css"/>
	</head>
	<body>
		<script src="../js/jquery-1.11.3.js"></script>
		<script src="../js/jquery.cookie.js"></script>
		
		<!--top-->
		<div class="top">
			<div class="logo">
				<h1>
					<a href="http://localhost/dangdanghe/dangdanghe/index.html"><span>铛铛盒</span></a>
				</h1>
			</div>
			
			<a href="http://localhost/dangdanghe/dangdanghe/index.html" id="home">网站首页</a>
		</div>
		
		<!--main-->
		<div class="main">
			<div class="login">
				<h2>登录<em id="error"></em><span>没有账号？<a href="http://localhost/dangdanghe/dangdanghe/html/user_enroll.php">点击注册</a></span></h2>
				
				<div class="login_box">
					<form action="" method="post" onsubmit="">
						<ul>
							<li>
								<i></i>
								<input type="text" name="username" placeholder="用户名/手机号" class="username" />
							</li>
							<li>
								<i></i>
								<input type="password" name="password" placeholder="密码" class="password" />
							</li>
							<li>
								<input type="checkbox" id="remember" />
								<label for="remember">请保存我这次的登录信息。</label>
								<a href="##">忘记密码？</a>
							</li>
							<li><input type="button" value="登录" class="login_in" /></li>
						</ul>
					</form>
					<script>
						$(".login_in").click(function(){
							$.get("login.php",{username:$(".username").val(),password:$(".password").val()},function(data){
								if(data.status==1){
									if($("#remember").prop("checked")){
										$.cookie("userName",$(".username").val(),{expires:7,path:"/"});
									}else{
										$.cookie("userName",$(".username").val(),{path:"/"});
									}
									location = "http://localhost/dangdanghe/dangdanghe/index.html";
								}else{
									$("#error").html("用户名或密码错误")
								}
							},"json");
						})
					</script>
					
					
					<div class="other_login">
						<p>使用第三方账号登录</p>
						<a href="##" class="qq"></a>
						<a href="##" class="sina"></a>
						<a href="##" class="alipay"></a>
						<a href="##" class="weixin"></a>
					</div>
					
				</div>
				
			</div>
			
			
			
		</div>
		
		
		<!--footer-->
		<div id="footer">
			<script>
				$("#footer").load("footer.html");
			</script>
		</div>
	</body>
</html>
