function getStyle(ele,property){
	
	if(getComputedStyle(ele))//如果样式表里面的数据存在
	{
		return getComputedStyle(ele)[property];//就返回样式表里的属性
	}
	else{
		return ele.currentStyle[property];//不存在就通过另一种方式获取
	}
}

function animate(ele,properties){
			// if(!ele.timer){
			 clearInterval(ele.timer);
			 //防止定时器效果叠加，因为定时器不清楚，在后台还实在执行，你重新调用这
			 //个元素的时候，两个定时器的效果一出现，你就会发现一闪一闪的
			// }
			ele.timer = setInterval(function(){
			for(var property in properties){
				var current ;
				var target = properties[property]
				if(property == "opacity"){
					current = Math.round(parseFloat(getStyle(ele,"opacity"))*100);
					//得到现有属性的透明度
					//Math.round表示四舍五入
				}
				else{
					current = parseInt(getStyle(ele,property));
					//得道现有属性的值
					
				}
				var speed = (target - current)/30;//速度变慢效果
				speed = speed > 0 ? Math.ceil(speed):Math.floor(speed)
				//ceil向上取整
				//floor向下取整
				if(property === "opacity"){
					ele.style.opacity = (current + speed)/100;
					//ele.style.opacity = target;
				}else{
					ele.style[property] = current+speed +"px";
				}
			}				
	}
	,10);
	
}