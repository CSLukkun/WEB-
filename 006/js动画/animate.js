function getStyle(ele,property){
	
	if(getComputedStyle(ele))
	{
		return getComputedStyle(ele)[property];
	}
	else{
		return ele.currentStyle[property];
	}
}

function animate(ele,properties){
			// if(!ele.timer){
			 clearInterval(ele.timer);
			// }
			ele.timer = setInterval(function(){
			for(var property in properties){
				var current ;
				var target = properties[property]
				if(property == "opacity"){
					current = Math.round(parseFloat(getStyle(ele,"opacity"))*100);
				}
				else{
					current = parseInt(getStyle(ele,property));
					
				}
				var speed = (target - current)/30;
				speed = speed > 0 ? Math.ceil(speed):Math.floor(speed)
				if(property === "opacity"){
					ele.style.opacity = (current + speed)/100;
					ele.style.opacity = target;
				}else{
					ele.style[property] = current+speed +"px";
				}
			}
		

		
	}
	,10);
	
}