<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>注册</title>
		<link rel="stylesheet" type="text/css" href="../css/case.css"/>
		<link rel="stylesheet" type="text/css" href="../css/user_enroll.css"/>
	</head>
	<body>
		<script src="../js/jquery-1.11.3.js"></script>
		
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
				<h2>注册<span>已有账号？<a href="http://localhost/dangdanghe/dangdanghe/html/user.php">点击登录</a></span></h2>
				
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
			<script src="../js/jquery.cookie.js"></script>
			<script>
				//用户名
				$(".username").focus(function(){
					$(this).parent().css("borderColor","#FF0000");
					$(this).next().html("支持中文、字母、数字、\"-\" \"_\" 的组合，4-20个字符");
					$(this).next().css("color","#ccc");
				})
				$(".username").blur(function(){
					$(this).parent().css("borderColor","#eee");
					if(/^((\w)|([\u2E80-\u9FFF]|-)){4,20}$/.test($(this).val())){
						//查询用户名是否已注册
						var _this=$(this);
						$.get("check.php",{username:$(this).val()},function(data){
							if(data.status==0){
								_this.parent().css("borderColor","#FF0000");
								_this.next().html("用户名已存在").css("color","red")
							}else{
								_this.next().html("用户名可用").css("color","#09C762")
								_this.next().css("color","#22ff0b");
								_this.parent().css("borderColor","#22ff0b");
							}
						},"json");
						
					}else{
						$(this).next().html("仅支持中文、字母、数字、\"-\" \"_\" 的组合，4-20个字符");
						$(this).next().css("color","red");
						$(this).parent().css("borderColor","#FF0000");
					}
				})
				//密码
				$(".password").focus(function(){
					$(this).parent().css("borderColor","#FF0000");
					$(this).next().html("建议使用字母，数字和符号两种及以上的组合，6-20个字符");
					$(this).next().css("color","#ccc");
				})
				$(".password").blur(function(){
					$(this).parent().css("borderColor","#eee");
					if(/^(\w){6,20}$/.test($(this).val())){
						if($(this).val().length<=10){
							$(this).next().html("密码安全度低，建议使用组合密码");
							$(this).next().css("color","#ff800f");
							$(this).parent().css("borderColor","#ff800f");
						}else if($(this).val().length<=15){
							$(this).next().html("密码强度中等，建议使用组合密码");
							$(this).next().css("color","#ffd100");
							$(this).parent().css("borderColor","#ffd100");
						}else {
							$(this).next().html("密码强度高");
							$(this).next().css("color","#22ff0b");
							$(this).parent().css("borderColor","#22ff0b");
						}
						
					}else{
						$(this).next().html("请输入符合规则的密码");
						$(this).next().css("color","red");
						$(this).parent().css("borderColor","#FF0000");
					}
				})
				
				//确认密码
				$(".repassword").focus(function(){
					$(this).parent().css("borderColor","#FF0000");
					$(this).next().html("请再次输入密码");
					$(this).next().css("color","#ccc");
				})
				$(".repassword").blur(function(){
					$(this).parent().css("borderColor","#eee");
					if($(this).val()==$(".password").val()){
						$(this).next().html("正确");
						$(this).next().css("color","#22ff0b");
						$(this).parent().css("borderColor","#22ff0b");
					}else{
						$(this).next().html("两次输入密码不一致");
						$(this).next().css("color","red");
						$(this).parent().css("borderColor","#FF0000");
					}
				})
				
				//手机号
				$(".phone").focus(function(){
					$(this).parent().css("borderColor","#FF0000");
					$(this).next().html("完成验证后，你可以用该手机登录和找回密码");
					$(this).next().css("color","#ccc");
				})
				$(".phone").blur(function(){
					$(this).parent().css("borderColor","#eee");
					if(/^1\d{10}$/.test($(this).val())){
						$(this).next().html("正确");
						$(this).next().css("color","#22ff0b");
						$(this).parent().css("borderColor","#22ff0b");
					}else{
						$(this).next().html("格式错误");
						$(this).next().css("color","red");
						$(this).parent().css("borderColor","#FF0000");
					}
				})
				
				
				//查询用户名是否已注册
//				$(".username").on("blur",function(){
//					var _this=$(this);
//					$.get("check.php",{username:$(this).val()},function(data){
//						if(data.status==0){
//							_this.parent().css("borderColor","#FF0000");
//							_this.next().html("用户名已存在").css("color","red")
//						}else{
//							_this.next().html("用户名可用").css("color","#09C762")
//						}
//					},"json");
//				})

				//待注册用户的对象信息
				$(".register").click(function(){
					if($("#remember").prop("checked")){
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
								$.cookie("userName",$(".username").val(),{path:"/"})
								location = "http://localhost/dangdanghe/dangdanghe/index.html";
							}else{
								alert("注册失败，请重新填写信息");
							}
							
						},"json");
					}
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
