const nervos = require('./nervos')
const {
  abi
} = require('./Contracts/compiled')
const {
  contractAddress
} = require('./config')

const transaction = require('./Contracts/transaction')
const simpleStoreContract = new nervos.appchain.Contract(abi, contractAddress)
module.exports = {
  transaction,
  simpleStoreContract
}
