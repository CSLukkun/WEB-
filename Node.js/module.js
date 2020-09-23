const request = require( 'request');

request({
	url:'https://api.douban.com/v2/movie/top250',
	json:true,
	
},(error,response,body) =>{
	console.log(body);
}
)