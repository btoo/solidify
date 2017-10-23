const path = require('path')
const flatten = require('./flatten')

// flattener({
//   nocomment: true,
//   include: './contracts',
//   file: './contracts/Board.sol'
// })

module.exports = flattenConfigs => {

  console.log('gotem', flattenConfigs)
  return flatten(flattenConfigs)
}