function getStyle(elem,attr){
		return elem.currentStyle ? elem.currentStyle[attr] : 
		getComputedStyle(elem)["width"];//返回的是一个对象
	}
function $(vArg){
	function ElementsByClassName(parent,classStr){
		var nodes = parent.getElementsByTagName("*");
		var result = [];
		for(var i in nodes){
			if(nodes[i].className==classStr){
				result.push(nodes[i]);
			}
		}
		return result
	}
	//对<1>对参数进行区分
	switch(vArg[0]){
		case "#":
			return document.getElementById(vArg.substring(1));
		case ".":
			return ElementsByClassName(document,vArg.substring(1));
		default:
			//对参数的前五个进行判断
			var str = vArg.substring(0,4);
			if(str == "name="){
				return document.getElementsByName(vArg.substring(5));
			}else{
				return document.getElementsByTagName(vArg);
			}
			
	}
	
}
function maopao(n){
				for(var i = 0;i < a.length;i++){
					for(var j = 0; j < a.length-1-i;j++)
						if(a[j]>a[j+1])
						{
							tmp = a[j]
							a[j] = a[j+1];
							a[j+1] = tmp;
						}
				}
				return n;
			}
function choose(a){
for(var i =0;i<a.length;i++){
	for(var j = i+1;j<a.length;j++){
		if(a[i] > a[j]){
			var tmp = a[i];
			a[i] = a[j];
			a[j] = tmp;
		}
	}
}
return a;
}
				