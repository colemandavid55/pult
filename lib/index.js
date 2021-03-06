exports.errors = require('./errors')

exports.exec   = require('./exec')
exports.prompt = require('co-prompt')
exports.inflection = require('inflection')
exports.ejs = require('ejs')

exports.colors = require('./colors')
exports.c = require('./colors') // alias

exports.clone = require('./clone')


exports.fail = (message) => { throw new exports.errors.PultError(message) }
