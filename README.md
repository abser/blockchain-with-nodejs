# Blockchain on NodeJS

It is a basic blockchain build using NodeJS by reading through the book "Blockchain Programming with JavaScript"

## Installation

```bash
npm install
```

## Run Nodes

```bash
npm run node_1
npm run node_2
npm run node_3
npm run node_4
```

## API's

Sample API from Postman export. You may import it on Postman.

```json
{
    "info": {
        "_postman_id": "99daecea-54ba-4385-922d-7ed338cc22e1",
        "name": "BlockchainApp",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
	"item": [
		{
			"name": "Add Transaction",
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": ""
				}
			},
			"response": []
		},
		{
			"name": "transaction",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"amount\": 100,\n    \"sender\": \"FDFC234234DCF\",\n    \"recipient\": \"DWFKJ8876CDD\"\n}"
				},
				"url": {
					"raw": "http://localhost:3002/transaction",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3002",
					"path": [
						"transaction"
					]
				}
			},
			"response": []
		},
		{
			"name": "transaction/broadcast",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"type": "text",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"amount\": 100,\n    \"sender\": \"FDFC234234SDWF\",\n    \"recipient\": \"DWFKJWRW76CDD\"\n}"
				},
				"url": {
					"raw": "http://localhost:3001/transaction/broadcast",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"transaction",
						"broadcast"
					]
				}
			},
			"response": []
		},
		{
			"name": "GetBlock",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3001/block/0000550bff4c1d045c2cc57c09bf19bca254f7c38599900a42966c1967e09asd",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"block",
						"0000550bff4c1d045c2cc57c09bf19bca254f7c38599900a42966c1967e09asd"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Transaction",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3001/transaction/719a95c0036411e9b5a86979471faa42",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"transaction",
						"719a95c0036411e9b5a86979471faa42"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Address",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3001/transaction/719a95c0036411e9b5a86979471faa42",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"transaction",
						"719a95c0036411e9b5a86979471faa42"
					]
				}
			},
			"response": []
		},
		{
			"name": "blockchain",
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3001/blockchain",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"blockchain"
					]
				}
			},
			"response": []
		},
		{
			"name": "mine",
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3004/mine",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3004",
					"path": [
						"mine"
					]
				}
			},
			"response": []
		},
		{
			"name": "register-node",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"newNodeUrl\":\"http://localhost:3004\"\n}"
				},
				"url": {
					"raw": "http://localhost:3001/register-node",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"register-node"
					]
				}
			},
			"response": []
		},
		{
			"name": "register-nodes-bulk",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"allNetworkNodes\": [\n    \"http://localhost:3002\",\n    \"http://localhost:3003\",\n    \"http://localhost:3004\",\n    \"http://localhost:3001\"\n    ]\n}"
				},
				"url": {
					"raw": "http://localhost:3001/register-nodes-bulk",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"register-nodes-bulk"
					]
				}
			},
			"response": []
		},
		{
			"name": "register-and-broadcast-nodes",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"name": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"newNodeUrl\": \"http://localhost:3005\"\n}"
				},
				"url": {
					"raw": "http://localhost:3001/register-and-broadcast-node",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"register-and-broadcast-node"
					]
				}
			},
			"response": []
		}
	]
}
```

## Explore Blockchain UI

You can search on your blocks, transactions etc from the UI
/block-explorer