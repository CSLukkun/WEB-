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
 function rmspaceNode2(parent){
		   		var nodes = parent.childNodes;
				for(var i = 0;i < nodes.length;i++){
					if(nodes[i].nodeType ==3 && nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))
					{//删除数组元素倒删的原因：删掉一个数组元素，下一个数组元素会顶上来
					//解决方法：倒着删，或者删完再检测一个
						parent.removeChild(nodes[i]);
					}
				}
				return parent
		   }
		   function createElementWithText(tagName,txt){
		   	var node = document.createElement(tagName);
		   	var oTxt = document.createTextNode(txt);
		   	node.appendChild(oTxt);
		   	return node;
		   }
  function insertAfter(newNode,oldNode){
				   var parent = oldNode.parentNode;
				   if(oldNode == parent.lastChild){
					   parent.appendChild(newNode);
				   }
				   else{
					   parent.insertBefore(newNode,oldNode.nextElementSibling);
				   }
			   }
				