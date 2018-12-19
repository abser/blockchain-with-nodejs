const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bcl = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1545191590600,
            "transactions": [],
            "nonce": 10,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1545191793131,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1545191794979,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "9a2e6480034111e9ba4163e29eee8a7a",
                    "transactionId": "12ea2350034211e9ba4163e29eee8a7a"
                }
            ],
            "nonce": 122629,
            "hash": "0000f946e43975cab4b85b8d67252f928b5860bb4ae28b66c67e7fd37bf453fe",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1545198568484,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "9a2e6480034111e9ba4163e29eee8a7a",
                    "transactionId": "14009c60034211e9ba4163e29eee8a7a"
                },
                {
                    "amount": 30,
                    "sender": "FDFC234234SDWF",
                    "recipient": "DWFKJWRW76CDD",
                    "transactionId": "46cbb170034211e9ba4163e29eee8a7a"
                },
                {
                    "amount": 200,
                    "sender": "FDFC234234SDWF",
                    "recipient": "DWFKJWRW76CDD",
                    "transactionId": "49fb4680034211e9ba4163e29eee8a7a"
                },
                {
                    "amount": 100,
                    "sender": "FDFC234234SDWF",
                    "recipient": "DWFKJWRW76CDD",
                    "transactionId": "4e2e68e0034211e9ba4163e29eee8a7a"
                }
            ],
            "nonce": 1076,
            "hash": "0000e0e54f61ca0d8518f32742c9d1cc13d98d74ec12a9a8c92cf1bf73a997a4",
            "previousBlockHash": "0000f946e43975cab4b85b8d67252f928b5860bb4ae28b66c67e7fd37bf453fe"
        },
        {
            "index": 5,
            "timestamp": 1545198599377,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "9a2e6480034111e9ba4163e29eee8a7a",
                    "transactionId": "d9539a80035111e9ba4163e29eee8a7a"
                }
            ],
            "nonce": 99472,
            "hash": "0000e18973ca7589d36aa069e0f0b4f63943b5a52a29c4d8f5110a6e3b7a944a",
            "previousBlockHash": "0000e0e54f61ca0d8518f32742c9d1cc13d98d74ec12a9a8c92cf1bf73a997a4"
        },
        {
            "index": 6,
            "timestamp": 1545198600698,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "9a2e6480034111e9ba4163e29eee8a7a",
                    "transactionId": "ebbd5940035111e9ba4163e29eee8a7a"
                }
            ],
            "nonce": 27747,
            "hash": "0000b35bef0753f090734e4231b69d854f781f6bca2ad8a383c2307b981d5c8d",
            "previousBlockHash": "0000e18973ca7589d36aa069e0f0b4f63943b5a52a29c4d8f5110a6e3b7a944a"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "9a2e6480034111e9ba4163e29eee8a7a",
            "transactionId": "ec86ead0035111e9ba4163e29eee8a7a"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log('VALID: ', bitcoin.chainIsValid(bcl.chain));