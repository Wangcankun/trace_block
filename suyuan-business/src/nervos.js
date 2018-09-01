const { default: Nervos } = require('@nervos/chain')
// const { default: Nervos } = require('@nervos/web3')
// const config = require('./config')

// const nervos = Nervos(config.chain) // config.chain indicates that the address of Appchain to interact
// const account = nervos.eth.accounts.privateKeyToAccount(config.privateKey) // create account by private key from config

// nervos.eth.accounts.wallet.add(account) // add account to nervos

const config = require('./config')
if (typeof window.nervos !== 'undefined') {
  window.nervos = Nervos(window.nervos.currentProvider);
  window.nervos.currentProvider.setHost(config.chain);
  // window.nervos.currentProvider.setHost("https://node.cryptape.com");
} else {
  console.log('No Nervos web3? You should consider trying Neuron!')
  window.nervos = Nervos(config.chain);
}
var nervos = window.nervos

module.exports = nervos
