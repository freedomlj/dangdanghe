<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>注册</title>
		<link rel="stylesheet" type="text/css" href="css/case.css"/>
		<link rel="stylesheet" type="text/css" href="css/user_enroll.css"/>
	</head>
	<body>
		<script src="js/jquery-1.11.3.js"></script>
		
		<!--top-->
		<div class="top">
			<div class="logo">
				<h1>
					<a href="##"><span>铛铛盒</span></a>
				</h1>
			</div>
			
			<a href="##" id="home">网站首页</a>
		</div>
		
		<!--main-->
		<div class="main">
			<div class="login">
				<h2>注册<span>已有账号？<a href="##">点击登录</a></span></h2>
				
				<div class="login_box">
					<form action="" method="post" onsubmit="">
						<ul>
							<li>
								<input type="text" name="username" placeholder="用户名" class="username" />
								<p class="info"></p>
							</li>
							<li>
								<input type="text" name="email" placeholder="email" class="email" />
								<p class="info"></p>
							</li>
							<li>
								<input type="password" name="password" placeholder="密码" class="password" />
								<p class="info"></p>
							</li>
							<li>
								<input type="password" name="repassword" placeholder="确认密码" class="repassword" />
								<p class="info"></p>
							</li>
							<li>
								<input type="text" name="phone" placeholder="手机" class="phone" />
								<p class="info"></p>
							</li>
							<li>
								<input type="text" name="note" placeholder="短信验证码" class="note"/>
								<a href="##" id="zphone">获取验证码</a>
								<p class="info"></p>
							</li>
							<li class="protocol">
								<input type="checkbox" id="remember"/>
								<label for="remember">我已看过并接受</label>
								<span>《<a href="##">用户协议</a>》</span>
							</li>
							<li class="enroll"><input type="button" value="同意协议并注册" class="register" /></li>
						</ul>
					</form>
					
				</div>
				
			</div>
			<script>
				$(".username").on("blur",function(){
					var _this=$(this);
					$.get("check.php",{username:$(this).val()},function(data){
						if(data.status==0){
							_this.next().html("用户名已存在").css("color","red")
						}else{
							_this.next().html("用户名可用").css("color","#09C762")
						}
					},"json");
				})

				//待注册用户的对象信息
				$(".register").click(function(){
					var user={
						username : $(".username").val(),
						email : $(".email").val(),
						password : $(".password").val(),
						phone : $(".phone").val()
					};
					//异步post请求
					$.post("register.php",user,function(data){
						if(data.status==1){
							alert("注册成功");
							location = "index.html";
						}else{
							alert("注册失败，请重新填写信息");
						}
						
					},"json");
				})


			</script>
			
			
			
		</div>
		
		
		<!--footer-->
		<div id="footer">
			<script>
				$("#footer").load("footer.html");
			</script>
		</div>
	</body>
</html>
