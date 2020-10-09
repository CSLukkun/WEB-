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