var web3;
var address = "0xfa70c1e6f6035831148E809a0175363062bF1EEc";
var abi = [{
        "inputs": [{
            "internalType": "uint256",
            "name": "_amt",
            "type": "uint256"
        }],
        "name": "sendMoney",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_amt",
            "type": "uint256"
        }],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];

// setTimeout(()=>{
// 	connect();
// },1000);

async function connect() {
    await window.web3.currentProvider.enable();
    web3 = new Web3(window.web3.currentProvider);
    console.log(web3);
    checkConnection()
}


if (typeof web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    web3 = new Web3(new web3.Provider.HttpProvider("HTTP://127.0.0.1:7545"));
}

var contract = new web3.eth.Contract(abi, address);

function checkConnection() {
    ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(console.error);
}

function handleAccountsChanged(accounts) {
    document.getElementById('addressDetail').innerText = accounts[0];
    document.getElementById('connect').style.display = "none";
    document.getElementById('paymentPage').style.display = "block";
    document.getElementById('amount').value = localStorage.getItem('amount')
}

function deposite() {
    var inputVal = document.getElementById('amount').value;
    web3.eth.getAccounts().then(function(account) {
        return contract.methods.sendMoney(inputVal).send({
            from: account[0]
        }).then(function(tmp) {
            document.getElementById('amount').value = "";
            document.getElementById('from').innerText = tmp.from;
            document.getElementById('to').innerText = tmp.to;
            document.getElementById('blockHash').innerText = tmp.blockHash;
            document.getElementById('transcHash').innerText = tmp.transactionHash;
            showBalance();
        }).catch(function(tmp) {
            alert(tmp);
        })
    });
}

function withdraw() {
    var inputVal = document.getElementById('amount').value;
    web3.eth.getAccounts().then(function(account) {
        return contract.methods.withdraw(inputVal).send({
            from: account[0]
        }).then(function(tmp) {
            document.getElementById('amount').value = "";
            showBalance();
        }).catch(function(tmp) {
            alert(tmp);
        })
    });
}

function showBalance() {
    contract.methods.getBalance().call().then(function(balance) {
        setTimeout(() => {
            document.getElementById('connect').style.display = "none";
            document.getElementById('paymentPage').style.display = "none";
            document.getElementById("successmsg").style.display = "block";
        }, 2000)
    })
}