'use strict'

const path = require('path')
const sass = require('node-sass')

module.exports = function(sasspath, options) {
  return function*(next) {
    let csspath = this.path
    if (!/\.css$/.test(csspath)) {
      return yield next
    }

    let file = path.join(sasspath, path.basename(csspath, '.css') + '.scss')

    yield(done) => {
      sass.render(Object.assign({
        file: file,
        sourceMapEmbed: true
      }, options || {}), (error, result) => {

        if (error) {
          console.log(error)
        } else {
          this.type = 'text/css'
          this.body = result.css
        }

        return done()

      })
    }

  }
}
