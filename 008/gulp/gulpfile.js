var gulp = require('gulp');
//创建gulp任务
//第一个参数为任务名称
//第二个参数为任务所依赖的其他任务
//第三个参数式执行任务所要运行的代码
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
gulp.task('contact',function (){
	return gulp.src('./js/*.js')
	.pipe(concat('all.min.js'))//js连接
	.pipe(uglify())//压缩
	.pipe(gulp.dest('./dist/js/'))
});//流信息传送
gulp.task('sass',done=>{
	return gulp.src('./style/*.scss')
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest('./dist/css/'));
		//done();
});