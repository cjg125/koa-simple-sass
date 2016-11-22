#  Koa middleware for sass.
## Install

```bash
$ npm install --save-dev koa-simple-sass
```

## Usage

```js
const path = require('path')
const app = require('koa')()
const sass = require('koa-simple-sass')

app.use(sass(path.resolve('examples/sass'), {
  includePaths: ['examples/sass']
  /* config... */
}))


app.use(function*(next) {
  this.body = 'Hello World'
})

app.listen(3000)

```

## Examples
```sh
$ git clone https://github.com/cjg125/koa-simple-sass.git demo
$ cd demo
$ node examples/
# http://127.0.0.1:3000/
```


## Config Options

[node-sass](https://github.com/sass/node-sass)

