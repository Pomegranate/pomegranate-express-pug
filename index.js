/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pomegranate-express-pug
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module index
 */

const pug = require('pug')

exports.options = {
  workDir: './views'
}

exports.metadata = {
  name: 'PugViews',
  type: 'merge',
  param: 'ExpressConfig'
}

exports.plugin = {
  load: function(inject, loaded) {
    this.Logger.log('Using pug as default view engine,')
    this.Logger.log('.jade files can be rendered by explicitly adding the file extension.')
    var viewDirectory = this.options.workDir;
    var viewEngine = {
      "View Engine": function(Express){
        Express.engine('pug', pug.__express)
        Express.engine('jade', pug.__express);
        Express.set('views', viewDirectory)
        Express.set('view engine', 'pug')
      }
    }
    loaded(null, viewEngine)
  },
  start: function(done) {
    done()
  },
  stop: function(done) {
    done()
  }
}