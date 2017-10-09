$(function(){
	var oList=$("#list");
	var data2=JSON.parse($.cookie("cart"))
	console.log(data2)
	var inc = $(".inc");
	var dec = $(".dec");
	var num = $(".num");
	//加载购物车中的商品
	$.ajax({
		type:"get",
		url:"../mock/goods.json",
		dataType:"json",
		success:function(data){
			var str="";
			for(var i=0;i<data.length;i++){
				for(var key in data2){
					if(data[i].id==key){
						str+=`<li data-id="${data[i].id}">
					 	<input type="checkbox" class="checkbox"/>
						<div class="p-goods">
							<img src="${data[i].image}" alt="">
							<p>${data[i].title}</p>
						</div>
						<div class="p-price">
							<span>${data[i].price}</span>
						</div>
						<div class="p-quantity">
							<input type="button" id="dec" value="-" class="jj dec"/>
							<input type="text" value="${data2[key]}" class="num">
							<input type="button" id="inc" value="+" class="jj inc"/>
						</div>

						<div class="p-sum">
							<span></span>
						</div>
								
						<div class="p-ops">
							<a href="##" class="del">删除</a>
						</div>	
								
							</li>`
					}
				}
			}
			//计算小计
			oList.html(str);
			var oLi = $("#list>li");
			var len = oLi.length;
			for(var i=0;i<len;i++){
				$(".p-sum>span").eq(i).html($(".p-price>span").eq(i).html().substr(1)*$(".num").eq(i).val())
			}
			total();
		}
		
	})
	
	//删除商品项
	oList.on('click','.del',function(){
		var numId=$(this).parent().parent().attr("data-id");
		$(this).parent().parent().remove();
		delete data2[numId];
		var objstr=JSON.stringify(data2);
		$.cookie("cart",objstr,10);
		total();
	})
	
	//添加商品数
	oList.on('click','.inc',function(){
		var x = $(this).prev().val();
		x++;
		$(this).prev().val(x);
		if($(this).prev().val()>1){
			$(this).prev().prev().css("color","#333");
		}
		var numId=$(this).parent().parent().attr("data-id");
		data2[numId]=$(this).prev().val();
		var objstr=JSON.stringify(data2);
		$.cookie("cart",objstr,{expires:10});
		//计算小计
		var oLi = ($("#list>li"));
		var len = oLi.length;
		for(var i=0;i<len;i++){
			$(".p-sum>span").eq(i).html($(".p-price>span").eq(i).html().substr(1)*$(".num").eq(i).val())
		}
		total();
		
	})

	//减少商品数
	oList.on('click','.dec',function(){
		var x = $(this).next().val();
		x--;
		$(this).next().val(x);
		if($(this).next().val()<=1){
			$(this).css("color","#bbb");
			$(this).next().val("1");
		}
		var numId=$(this).parent().parent().attr("data-id");
		data2[numId]=$(this).next().val();
		var objstr=JSON.stringify(data2);
		$.cookie("cart",objstr,{expires:10});
		//计算小计
		var oLi = $("#list>li");
		var len = oLi.length;
		for(var i=0;i<len;i++){
			$(".p-sum>span").eq(i).html($(".p-price>span").eq(i).html().substr(1)*$(".num").eq(i).val())
		}
		total();
	})
	
	
	//清空购物车
	$("#clearall").click(function(){
		oList.children().remove();
		$.cookie("cart",null);
		total();
	})
	
	
	function total(){
		//计算总价
		var oLi = $("#list>li");
		var len = oLi.length;
		var all = 0;
		for(var j=0;j<len;j++){
			all+=Number($(".p-sum>span").eq(j).html());
		}
		$("#total").html(all);
		//计算商品数
		$("#goods_nums").html(len);
	}
	
			


})