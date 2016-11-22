const path = require('path')
const app = require('koa')()
const sass = require('../index')
app.use(sass({
  path: path.resolve('examples/sass')
  // outPath: path.resolve('examples/css')
}, {
  includePaths: ['examples/sass']
}))

var tpl = '\
  <!DOCTYPE html>\
  <html lang="en">\
  <head>\
    <meta charset="UTF-8">\
    <title></title>\
    <link rel="stylesheet" href="./index.css">\
  </head>\
  <body>\
    Hello World\
  </body>\
  </html>\
'

app.use(function*() {
  this.body = tpl
});

app.listen(3000);
