var str = '2323424123423451';
var arrstr = [...str];
var obj = {}

arrstr.forEach((item, index) => {
    if (obj[item]) obj[item]++
    else obj[item] = 1
})

var arrkey = Object.keys(obj);
var max = 0;
arrkey.forEach((item, index) => {
    if(index==0) max==item;
    else{
        obj[item]>obj[max]?max=item:max;
    }
})
console.log(obj)
console.log(obj[max]);

function Ajaxquery(url){
    let Ajax = new Promise((resolve,rejected) =>{
            let xhr = new XMLHttpRequest();
          xhr.open('get',url);
          xhr.send();
          xhr.onreadystatechange = function(){
            if(xhr.readyState !=4){
              return ;
          }
          if(xhr.readyState ==4 && xhr.status == 200){
            resolve(xhr.responseText);
          }
          else{
            reject('服务器出错');
          }
        }
    })
    return Ajax;
}
    AjaxQuery(oneurl).then(data => {
              console.log(data);
                        return AjaxQuery(twourl);
    })