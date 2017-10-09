window.onload=function(){
	
	//main_con
	$.ajax({
		type:"get",
		url:"../mock/category_bbq.json",
		dataType:"json",
		success:function(data){
			//获取后台数据生成商品页表和页数
			var pagelen=12;
			var len=data.length;
			var num=Math.ceil(len/pagelen);
			var now=0;
			$("#search_allpage").html(num)
			$("#all_pro").html(len)
			$("#menu_num").html(len)
			
			for(var i=0;i<num;i++){
				var pageA=$("<a href='##'></a>");
				pageA.html(i+1);
				pageA.addClass("page");
				pageA.insertBefore($("#pagelist_next"));
			}
			$(".page").eq(0).css({"border-color":"#09C762","color":"#09C762"})
			
			datapage(0);
			function datapage(n){
				var str="";
				for(var i=n*pagelen;i<Math.min(len,(n+1)*pagelen);i++){
					str+=`<a href="##">
							<dl data-id=${data[i].id}>
								<dt><img src="${data[i].img}"/></dt>
								<dd>
									<b>${data[i].price}</b>
									<p>${data[i].name}</p>
									<span>销量:<em>${data[i].sales}</em>件</span>
								</dd>
							</dl>
						</a>`;
				}
				$(".productlist").html(str);
			}
			
			var page=$(".page");
			page.click(function(){
				datapage($(this).index())
				now=$(this).index()
				numTab()
			})
			
			
			$("#pagelist_next").click(function(){
				if(now==num-1){
					return
				}
				now++;
				datapage(now);
				numTab()
			})
			
			
//			search_btn
			$("#search_btn>.last").click(function(){
				if(now==0){
					return
				}
				now--;
				datapage(now);
				numTab()
				
			})

			$("#search_btn>.next").click(function(){
				if(now==num-1){
					return
				}
				now++;
				datapage(now);
				numTab()
			})
			
			function numTab(){
				$("#search_nowpage").html(now+1);
				$(".page").eq(now).css({"border-color":"#09C762","color":"#09C762"}).siblings().css({"border-color":"#ddd","color":"#333"})
			}
			
			
			
		}
	});
	
	
	
	
	
	
	
	
}
