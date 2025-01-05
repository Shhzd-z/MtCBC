const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('01be3d58cd2a7782e178972bdc377a49ec685d68e38ffcab3be319c82a9a862');
const myWalletAddress = myKey.getPublic('hex');


let MtCBC = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
MtCBC.addTransaction(tx1);

console.log('\n Starting the miner . .');
MtCBC.minePendingTransactions(myWalletAddress);

console.log('\nBalance of MTCBCMainAccount is', MtCBC.getBalanceOfAddress(myWalletAddress));


console.log('Is chain valid?', MtCBC.isChainValid());