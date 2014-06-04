/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
));
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
});

var port = Number(process.env.PORT || 3000);
app.listen(port, function(){
	console.log("Listening on " + port)
})


//app.listen(3000)