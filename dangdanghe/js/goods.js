$(function(){
	//将物品存入cookie
	var num = $(".number");
	var dec = $("#dec");
	var inc = $("#inc");
	if($.cookie("cart")==undefined||$.cookie("cart")=="null"){
		var obj={};
	}else {
		var obj=JSON.parse($.cookie("cart"));
	}
	$("#join").on("click",function(){
		var numId=$(this).parent().parent().parent().parent().parent().attr("data-id");
		if(obj[numId]==undefined){
			obj[numId]=num.val();
		}else{
			var sum=Number(obj[numId]);
			sum+=Number(num.val());
			obj[numId]=sum;
		}
		var objstr=JSON.stringify(obj);
		$.cookie("cart",objstr,{expires:10});
		console.log($.cookie("cart"))
	})
	
	
	//加减商品数量
	inc.on('click',function(){
		var x = num.val();
		x++;
		num.val(x);
	})
	
	dec.on('click',function(){
		var x = num.val();
		if(x<=1){
			return;
		}
		x--;
		num.val(x);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})

	








