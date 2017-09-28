//冒泡排序
function bubSort(arr){
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
				if(arr[j]>arr[j+1]){
					var tmp;
					tmp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = tmp;
				}
		}
	}
	return arr;
}
//选择排序
function selSort(arr){
	for(var i=0;i<arr.length-1;i++){
		for(var j=i;j<arr.length-1;j++){
				if(arr[i]>arr[j+1]){
						var tmp;
						tmp = arr[i];
						arr[i] = arr[j+1];
						arr[j+1] = tmp;
				}
		}
	}
	return arr;
}
//返回最大值
function getMax(arr){
	var max = arr[0];
	for(var i=0;i<arr.length;i++){
			if(max<arr[i]){
				max = arr[i]
			}
	}
	return max;
}
//返回最小值
function getMin(arr){
	var min = arr[0];
	for(var i=0;i<arr.length;i++){
			if(min>arr[i]){
				min = arr[i]
			}
	}
	return min;
}
//去重
function norepeat(arr){
	var newArr = [];
	for(var i=0;i<arr.length;i++){
		if(newArr.indexOf(arr[i])==-1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
//随机范围在num1-num2之间的数
function random1num(min,max){
	return parseInt(min+Math.random()*(max-min));
}

//将日期转为字符串
function date1String(date,sign){
		sign = sign == undefined?'/':sign;
		return date.getFullYear()+sign+isdblNum(date.getMonth())+sign+isdblNum(date.getDate())+" "+isdblNum(date.getHours())+":"+isdblNum(date.getMinutes())+":"+isdblNum(date.getSeconds());
}

//将一位数转化为0+一个数
function isdblNum(num){
	num = num<10?"0"+num:num;
	return num;
}

//随机颜色
function randRgb(){
	var r = parseInt(Math.random()*256).toString(16);
	var g = parseInt(Math.random()*256).toString(16);
	var b = parseInt(Math.random()*256).toString(16);
	return "#"+randStr1(r,g,b);

	function randStr1(R,G,B){
	R = R.length<2?"0"+R:R;
	G = G.length<2?"0"+G:G;
	B = B.length<2?"0"+B:B;
	return R+G+B;
	}
}
// 获取非行间样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

//调用自定义属性
function attr(ele,eleName,val){
	if(arguments.length==3){
		if(val=="dele"){
			return ele.removeAttribute(eleName);
		}else {
			return ele.setAttribute(eleName,val);
		}
	}
	if(arguments.length==2){
		return ele.getAttribute(eleName);
	}
}

// 获得最终到页面的offset值
function offset(ele){
			var obj = {};
			//将left  和top 放到obj中
			obj.l = ele.offsetLeft;
			obj.t = ele.offsetTop;
			//然后做循环，看下还有没有定位父级的元素了，如果没有最后就是body
			while(ele.offsetParent){
				//如果有那就把当前对象给了父级然后继续循环
				ele = ele.offsetParent;
				obj.l += ele.offsetLeft;
				obj.t += ele.offsetTop;
			}
			return obj;
		} 

//getElementsClassName优化
function getByClass(ele, sClass)
{
    var aEle=document.getElementsByTagName(ele);
    var newarr=[];
    var re=new RegExp('\\b'+sClass+'\\b', 'i');
    var i=0;
    console.log(aEle)
    for(i=0;i<aEle.length;i++)
    {
        if(re.test(aEle[i].className))
        {
            newarr.push(aEle[i]);
        }
    }
    return newarr;
}

//完美运动框架
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop = true;
		for(var attr in json){
			//获取到属性值
			var iCur = 0;
			if(attr=='opacity'){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100)
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}

			//速度
			var speed = 0;
			speed=(json[attr]-iCur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(iCur!=json[attr]){
				bStop=false;
			}

			if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(iCur+speed)+')';
					obj.style.opacity=(iCur+speed)/100;
			}else{
				obj.style[attr] = iCur+speed+'px';
			}
			
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30)
}





