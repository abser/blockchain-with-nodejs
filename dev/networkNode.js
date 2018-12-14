
const port = process.argv[2]; 
const uuid = require('uuid/v1');
var express = require('express');
var app = express();
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount,
    req.body.sender, req.body.recipient) 
    res.json({ note:`Transaction will be added in block
    ${blockIndex}.`});
});

app.get('/mine', function (req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash']; 
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] +1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    
    const nodeAddress = uuid().split('-').join('');
    bitcoin.createNewTransaction(12.5, "00", nodeAddress)
    
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    
    res.json({
        note: "New block mined successfully",
        block: newBlock
      });
});

app.post('/register-and-broadcast-node', function (req, res) {
    const newNodeUrl = req.body.newNodeUrl;
});

app.post('/register-node', function (req, res) {

});

app.post('/register-nodes-bulk', function (req, res) {

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})