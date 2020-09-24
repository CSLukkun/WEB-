define(function(req){
    var m1 = require('./math.js')
	function circle(r){
		return m1.multiple(m1.PI,m1.square(r))
	}
	
	exports.s_circle = circle
	
})