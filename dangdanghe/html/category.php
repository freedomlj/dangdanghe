<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>商品页</title>
		<link rel="stylesheet" type="text/css" href="../css/case.css"/>
		<link rel="stylesheet" type="text/css" href="../css/category.css"/>
	</head>
	<body>
	<script src="../js/jquery-1.11.3.js"></script>
	<script src="../js/jquery.cookie.js"></script>
	<script src="../js/category.js"></script>	
		
	<!--top-->
	<div id="top">
		<script>
			$("#top").load("header.html");
		</script>
	</div>
	<!--mian-->
	<div id="main">
		<div class="nav_here">
			<p><a href="##" id="home">首页</a>&gt;<a href="##" id="now_here"></a></p>
		</div>
	
		<div class="main_m">
		<div class="main_sidebar">
			<div class="menu">
				<h3>
					<a href="##">
						<strong>飞叉叉烧烤</strong>
						<span>商品共有<em id="menu_num"></em>件</span>
					</a>
				</h3>
			
				<dl>
					<dt><a href="##">烧烤外卖专区</a></dt>
					<dd><a href="##">荤菜</a></dd>
					<dd><a href="##">素菜</a></dd>
					<dt><a href="##">荤菜</a></dt>
					<dt><a href="##">素菜</a></dt>
					<dt><a href="##">优惠套餐</a></dt>
					<dt><a href="##">调料工具</a></dt>
				</dl>
			</div>
		
			<div class="recommend">
				<dl>
					<dt>大牌推荐</dt>
					<dd><a href="##">飞叉叉烧烤</a></dd>
					<a href="##" id="more">更多&gt;</a>
				</dl>	
			</div>
		</div>
	
	<div class="main_con">
		<h4 id="brand">品牌：<a href="##">飞叉叉烧烤</a></h4>
		<div class="sell">
			<ul>
				<li><a href="##">销量</a></li>
				<li><a href="##">价格</a></li>
				<li><a href="##">上架时间</a></li>
			</ul>
			
			<div class="search_num">
				共<b id="all_pro"></b>个商品
				<span id="search_btn">
					<a href="##" class="last">&lt;</a>
					<span id="search_nowpage">1</span><em>/</em><span id="search_allpage"></span>
					<a href="##" class="next">&gt;</a>
				</span>
			</div>
		</div>
		
		<div class="productlist">
			
		</div>
		
		<div class="white_box"></div>
		
		<div class="pagelist">
			<a href="##" id="pagelist_next">下一页</a>
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