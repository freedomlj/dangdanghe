
window.onload = function(){
	
	
	//轮播图
	var obanner = document.getElementById('banner');
	var oList = document.getElementById('list');
	var aLi = oList.querySelectorAll('li');
	var odir = document.querySelector('.direction');
	var aA = odir.getElementsByTagName('a');
	var oBtn = document.querySelector('.btn');
	var aCircel = oBtn.querySelectorAll('a');
	var stimer=null;
	var iNow = 0;
	var next = 0;
	//自动播放
	autoPlay();
	function autoPlay(){
		stimer=setInterval(function(){
			if(next==aLi.length-1){
				next=0;
			}else {
				next++;
			}
			tab();
		},3000)
	}
	//切换图片和小圆点
	function tab(){
		move(aLi[iNow],{"opacity":0})
		move(aLi[next],{"opacity":100})
		for(var i=0;i<aLi.length;i++){
			aCircel[i].className="";
		}
		
		aCircel[next].className="active";
		iNow=next;
	}

	for(var j=0;j<aCircel.length;j++){
		aCircel[j].index=j;
		aCircel[j].onmouseover=function(){
			next=this.index;
			tab();
		}
	}
	//鼠标移入停止
	obanner.onmouseover=function(){
		clearInterval(stimer);
		odir.style.display="block";
	}
	
	//鼠标移出开始
	obanner.onmouseout=function(){
		autoPlay();
		odir.style.display="none";
	} 
	
	
	//左
	aA[0].onclick=function(){
		if(next==0){
			next=aLi.length-1;
		}else {
			next--;
		}
		tab();
	}
	
	//右
	aA[1].onclick=function(){
		if(next==aLi.length-1){
			next=0;
		}else {
			next++;
		}
		tab();
	}


//特卖-倒计时
    var timer=null;
	timers(".timer");
	function timers(data){
		timer = setInterval(function(){
      	var d = new Date();
      	var d1 = d.getTime();
      	var jiezhi = new Date("2022/03/31 00:00:00");
      	var d2 = jiezhi.getTime();
      	var sec = Math.ceil((d2-d1)/1000);
      	var s = sec%60;
      	var m = Math.floor(sec/60)%60;
      	var h = Math.floor(sec/60/60)%24;
      	var day = Math.floor(sec/60/60/24);
      	$(data).html("剩余"+day+"天"+h+"时"+m+"分"+s+"秒");
      },1000)
	}
	
//new_product
	$.ajax(
		{
		type:"get",
		url:"mock/new_product.json",
		dataType:"json",
		success:function(data){
			newproduct();
			function newproduct(){
				var str="";
				for(var i=0;i<data.length;i++){
					str+=`<li>
						<div class="product_l"><a href="##"><img src="${data[i].img}"/></a></div>
						<div class="product_r">
							<h4><a href="">${data[i].name}</a></h4>
							<p><span>[推荐理由]</span>${data[i].introduce}</p>
							<div>
								<em>${data[i].price}</em>
								<del>${data[i].del}</del>
								<span>${data[i].sales}</span>
								<a href="##">立即抢购</a>
							</div>
						</div>
					</li>`
				}
				$("#new_product_list").html(str)
			}
		}
	});

//today_product
	$.ajax(
		{
		type:"get",
		url:"mock/today_product.json",
		dataType:"json",
		success:function(data){
			todayproduct();
			function todayproduct(){
				var str="";
				for(var i=0;i<data.length;i++){
					str+=`<li>
							<div class="today_l"><a href="##"><img src="${data[i].img}"/></a></div>
							<div class="today_r">
								<h4><a href="##">${data[i].name}</a></h4>
								<div>
									<i></i>
									<em>${data[i].price}</em>
								</div>
								<p>${data[i].introduce}</h4>
							</div>
						</li>`
				}
				$("#today_product_list").html(str)
			}
		}
	});
	
//brand_temai
	$.ajax(
		{
		type:"get",
		url:"mock/brand_temai.json",
		dataType:"json",
		success:function(data){
			brandtemai();
			function brandtemai(){
				var str="";
				for(var i=0;i<data.length;i++){
					str+=`<li>
							<a href="##"><img src="${data[i].img}"/></a>
							<p>
								<i></i>
								<span class="${data[i].class}"></span>
							</p>
						</li>`
				}
				$("#brand_temai_list").html(str)
			}
		}
	});
	
//series_list
	$.ajax(
		{
		type:"get",
		url:"mock/series_list.json",
		dataType:"json",
		success:function(data){
			serieslist();
			function serieslist(){
				var str="";
				
				for(var i=0;i<data.length;i++){
					var lA="";
					for(var j=0;j<data[i].list.length;j++){
						lA+="<a href='##'>"+data[i].list[j]+"</a>";
					}
					var Dl=""
					for(var k=0;k<data[i].pro_list.length;k++){
						Dl+=`<dl>
						<a href="##">
							<dt><img src="${data[i].pro_list[k].img}"/></dt>
							<dd>
								<p>${data[i].pro_list[k].name}</p>
								<span>${data[i].pro_list[k].price}</span>
							</dd>
						</a>
					</dl>`
					}
					str+=`<div class="series_box">
				<div class="pro_info">
					<div class="pro_tit">${data[i].tit}</div>
					<div class="pro_info_list">
						${lA}
					</div>
				</div>
				
				<div class="pro_img">
					<a href="##"><img src="${data[i].img}"/></a>
				</div>
				
				<div class="pro_list">
					${Dl}
				</div>
			</div>`
					
				}
				$(".series_list").html(str);
				
				
				
			}
		}
	});
	
	
	
	
	
	
	
	




}




