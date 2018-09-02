const bytecode = "608060405234801561001057600080fd5b506105de806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806336555b851461005c578063942b765a146100cf5780639507d39a1461013b575b600080fd5b34801561006857600080fd5b506100cd600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506101e1565b005b3480156100db57600080fd5b506100e461031a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561012757808201518184015260208101905061010c565b505050509050019250505060405180910390f35b34801561014757600080fd5b50610166600480360381019080803590602001909291905050506103af565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101a657808201518184015260208101905061018b565b50505050905090810190601f1680156101d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020908051906020019061024492919061050d565b5061024f33826104a0565b80826040518082805190602001908083835b6020831015156102865780518252602082019150602081019050602083039250610261565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207fe4af93ca7e370881e6f1b57272e42a3d851d3cc6d951b4f4d2e7a963914468a233604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a35050565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156103a557602002820191906000526020600020905b815481526020019060010190808311610391575b5050505050905090565b60606000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b50505050509050919050565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061054e57805160ff191683800117855561057c565b8280016001018555821561057c579182015b8281111561057b578251825591602001919060010190610560565b5b509050610589919061058d565b5090565b6105af91905b808211156105ab576000816000905550600101610593565b5090565b905600a165627a7a723058200739a42d8287b6d1010e93005235ff10f787019bcc3a81204e8f433a5a2138380029"

const abi = [{
    "constant": false,
    "inputs": [{
        "name": "text",
        "type": "string"
      },
      {
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "add",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "_sender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_text",
        "type": "string"
      },
      {
        "indexed": true,
        "name": "_time",
        "type": "uint256"
      }
    ],
    "name": "Recorded",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "time",
      "type": "uint256"
    }],
    "name": "get",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getList",
    "outputs": [{
      "name": "",
      "type": "uint256[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]

module.exports = {
  abi,
  bytecode
}
