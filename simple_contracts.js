// This file contains some simple general-purpose contracts that can be deployed to the blockchain.
// a QuantumLedger Contract is simply a promise body that "promises" to modify
// the ledgerState in a regulated and truthful way.
// The contract MUST NOT use random values

module.exports = {
  // This contract expects two transaction arguments: identifier and value
  storeValue: function(resolve, reject) {
    ledger.update({identifier: identifier}, {$push: {values: value}})
    .then(function(numUpdated) {
      resolve(numUpdated);
    })
    .catch(function(err) {
      reject(err);
    })
  }
}
