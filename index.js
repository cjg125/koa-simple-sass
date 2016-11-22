'use strict'

const path = require('path')
const sass = require('node-sass')

module.exports = function(config, options = {}) {
  return function*(next) {
    let csspath = this.path
    if (!/\.css$/.test(csspath)) {
      return yield next
    }

    let name = path.basename(csspath, '.css')
    let file = path.join(config.path, name + '.scss')
    let outFile = path.join(config.outPath || path.join(config.path, '../', 'css'), name + '.css')

    yield(done) => {
      sass.render(Object.assign({
        file: file,
        outFile: outFile,
        sourceMap: true,
        sourceMapEmbed: true
      }, options), (error, result) => {

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
