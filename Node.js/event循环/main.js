var events = require('events');
	var eventEmitter = new events.EventEmitter();
	eventEmitter.on('data_received', function(){
	   console.log('数据接收成功。');
	});
	
var connectHandler = function connected(){
	console.log('连接成功');
	eventEmitter.emit('data_received')
}//创建时间处理程序
	
eventEmitter.on('connection', connectHandler);//绑定事件处理程序
eventEmitter.emit('connection')

console.log("程序执行完毕。");