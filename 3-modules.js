const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js')
require('./7-mineGrenade.js')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.singlePerson.name)
sayHi(data.items[0])