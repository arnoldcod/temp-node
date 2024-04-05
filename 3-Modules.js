//Modules

//common JS , every file is a module by default


const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require('./6-alternative')

require('./7-alternative')



sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
