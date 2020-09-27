let [a,b,c] = [1,2,3]
//a = 1 b=2 c=3
let [a,[[b],c]] = [1,[[2],3]]
//a = 1 b=2 c=3
let [a,,b] = [1,2,3]
//a=1 b=3
let [a=1,b]=[]
//a=1 b=undefined
let [a,...b]=[1,2,3]
//a=1 b=[2,3]
let [a,b,c,d,e] = 'hello'
//a='h'....
let [a=2] =[undefined]
//a=2
let [a=3,b=2] = [1]
//a=1,b=2
let [a=3,b=2] = []
//a=3,b=2
