const { src, dest, series } = require('gulp');

function cleanJS(){
    return src('src/js/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(dest('public/js/'));
}
function cleanHTML(){
    return src('src/*.html').pipe(dest('public/'));
}
function build(cb) {
    cb();
}
  
  exports.build = build;
  exports.default = series(cleanJS, cleanHTML, build); // Run 2 tasks in series