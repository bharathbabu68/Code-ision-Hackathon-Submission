const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "idea_id",
				"type": "uint256"
			}
		],
		"name": "listed_idea",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "checking",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idea_id",
				"type": "uint256"
			}
		],
		"name": "claim_refund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idea_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "donate_to_idea",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "donator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount_donated",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "is_refunded",
						"type": "bool"
					}
				],
				"internalType": "struct CrowdFunding.donor[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donated_across_all_projects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idea_id",
				"type": "uint256"
			}
		],
		"name": "donated_amount_to_project",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ideas",
		"outputs": [
			{
				"internalType": "bool",
				"name": "is_active",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "owner_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "unique_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "funding_req",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "time_of_creation",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "funding_raised",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "time_of_deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "number_of_backers",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "idea_owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "owner_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "funding_req",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "days_to_deadline",
				"type": "uint256"
			}
		],
		"name": "list_new_idea",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idea_id",
				"type": "uint256"
			}
		],
		"name": "number_of_donations",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "project_donators",
		"outputs": [
			{
				"internalType": "address",
				"name": "donator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount_donated",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "is_refunded",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "view_all_ideas",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "is_active",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "owner_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "unique_id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "funding_req",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time_of_creation",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "funding_raised",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time_of_deadline",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "number_of_backers",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "idea_owner",
						"type": "address"
					}
				],
				"internalType": "struct CrowdFunding.idea[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "view_contract_balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "idea_id",
				"type": "uint256"
			}
		],
		"name": "withdraw_funding_raised",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var idea = [
    {
        "unique_id": 0,
        "owner_name": "SKSKSKS",
        "title": "Upside down purse",
        "desc": "Purse for ppl with no munney",
        "number_of_backers": 69,
        "time_of_deadline": "12/12/12",
        "funding_raised": 15080,
        "goal": 22550
    },
    {
        "unique_id": 1,
        "owner_name": "SKSKSKS",
        "title": "Upside down purse",
        "desc": "Purse for ppl with no munney",
        "number_of_backers": 69,
        "time_of_deadline": "12/12/12",
        "funding_raised": 15080,
        "funding_req": 22550
    },
    {
        "unique_id": 2,
        "idea_owner": "SKSKSKS",
        "title": "Upside down purse",
        "desc": "Purse for ppl with no munney",
        "number_of_backers": 69,
        "time_of_deadline": "12/12/12",
        "funding_raised": 15080,
        "funding_req": 22550
    },
];

var web3;
var account_addr, account_bal;
if (typeof web3 !== 'undefined')
    web3 = new Web3(web3.currentProvider);

console.log(abi);

var address = "0xC0bB6Bc90D94c1ee613a0cda75117cDfF9eE9f77";

var contract = new web3.eth.Contract(abi, address);

var i = {
    'title': "Test Project",
	'owner_name': "Test Owner",
    'desc': "Description goes here",
    'funding_req': 100,
    'days_to_deadline': 5
}

viewAllIdeas();
// createIdea(i);

// web3.eth.getAccounts().then(function(accounts) {
//     console.log(accounts[0]);
//     account_addr = accounts[0];
// }) .then(function() {
//     contract.methods.list_new_idea('title', 'desc', 1000, 30).send({from:account_addr}).then(function(result) {
//         console.log(result);
//     });
// });

/////////////////////////////////////////
// HTML Integration
////////////////////////////////////////

function unixToDate(unix_timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    return date.getUTCDate().toString() + '/' + date.getUTCMonth().toString()+1 + '/' + date.getFullYear().toString();
}

// return the difference between two dates in days
function dateDiffInDays(a, b) {
	// Discard the time and time-zone information.
	var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	var utc2 = Date.UTC(b.getFullYear(), a.getMonth(), a.getDate());

	return Math.floor((utc2 - utc1) / 1);
}

function createCard(idea) {

    const percentRaised = idea.funding_raised / idea.funding_req * 100;

    return `
    <div class="card card-idea m-3 shadow">

        <img src="https://blog.producthype.co/wp-content/uploads/2020/03/Best-Kickstarter-Projects-2020-4.jpg" style="height: 100%;width: 100%;">

        <div class="card-idea-desc">

        <h3>${idea.title}</h3>

        <p>${idea.desc}</p>

        <div>
            <h5>Project Owner: <span>${idea.owner_name}</span></h5>
        </div>

        <div class="row">

            <div class="col">
            <h5>No. of Backers: <span>${idea.number_of_backers}</span></h5>
            </div>

            <div class="col">
            <h5 style="color: rgb(51, 53, 29);text-align: right;">Deadline: <span>${unixToDate(idea.time_of_deadline)}</span></h5>
            </div>

        </div>

        <hr>

        <h5>Funding Raised:</h4>

        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${percentRaised}%" aria-valuenow="${percentRaised}" aria-valuemin="0" aria-valuemax="100"><span style="font-size: medium;font-weight: bolder;">${percentRaised}%</span></div>
        </div>

        <div style="margin: auto;text-align: right;">Goal: <span>${idea.funding_req}</span> ETH WEI</div>
        </div>

    </div>
    `;
}

function buildFeed(ideas) {

    const ideaContainer = document.getElementById('ideaContainer');
	ideaContainer.innerHTML = '';

    ideas.forEach((idea) => {

        ideaContainer.innerHTML += createCard(idea);
    });
}

////////////////////////////////////////////
// Smart Contracts
///////////////////////////////////////////

function createIdea(idea) {
    
    web3.eth.getAccounts().then(function(accounts) {
        console.log(accounts);
        account_addr = accounts[0];
        console.log(account_addr);
        // $("#account").text(account_addr);
    }).then(function() {
        contract.methods.list_new_idea(idea.title, idea.desc, idea.owner_name, idea.funding_req, idea.days_to_deadline).send({from:account_addr}).then(function(result) {
            console.log(result);
			viewAllIdeas();
        });
    });
}

function viewAllIdeas() {

	contract.methods.view_all_ideas().call().then(function(result) {
		console.log(result);
		buildFeed(result);
    });
}

donateIdea(1, 500);

function donateIdea(idea_id, amount) {

	web3.eth.getAccounts().then(function(accounts) {
        console.log(accounts);
        account_addr = accounts[0];
        console.log(account_addr);
		contract.methods.donate_to_idea(idea_id, amount).send({from:account_addr, value:amount})
		.then(function(result) {
			console.log(result);
		});
    });

}

function viewContBalance() {
    web3.eth.getAccounts().then(function(accounts) {
        console.log(accounts);
        account_addr = accounts[0];
        console.log(account_addr);
    }) .then(function() {
        web3.eth.getBalance(account_addr).then(function(balance) {
            account_bal = balance;
            console.log(web3.utils.fromWei(balance, 'ether'));
        }).then(function() {
            contract.methods.view_contract_balance().call({from:account_addr}).then(function(result) {
                console.log(result);
            });
        });
    });
}




















//////////////////////////////////////////////////
// WEB3
//////////////////////////////////////////////////

// var web3;
//         var account_addr, account_bal;
//         if (typeof web3 !== 'undefined')
//             web3 = new Web3(web3.currentProvider);
//             var address = "0x8fc7800911Ab791BA1717687808a4d966233b58E";
//         var abi = [
// 	{
// 		"inputs": [],
// 		"name": "retrieve",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "num",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "store",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ];
//         var contract = new web3.eth.Contract(abi, address);
//         web3.eth.getAccounts().then(function(accounts) {
//             console.log(accounts);
//             account_addr = accounts[0];
//             console.log(account_addr);
//             $("#account").text(account_addr);
//         }) .then(function() {
//             web3.eth.getBalance(account_addr).then(function(balance) {
//                 account_bal = balance;
//                 console.log(web3.utils.fromWei(balance, 'ether'));
//                 $("#act-bal").text(web3.utils.fromWei(balance, 'ether'));
//             }).then(function() {
//                 contract.methods.retrieve().call({from:account_addr}).then(function(result) {
//                     // console.log(result);
//                     $("#balance").html(result);
//                 });
//             });
//         });

//         if(window.ethereum) {
//             window.ethereum.on('accountsChanged', function () {
//                 var curr_acc;
//                 web3.eth.getAccounts(function(error, accounts) {
//                     account_addr = accounts[0];
//                     document.getElementById('account').innerHTML = accounts;
//                     curr_acc = accounts[0];
//                 }).then(function() {
//                     web3.eth.getBalance(curr_acc).then(function(balance) {
//                         document.getElementById('act-bal').innerHTML = web3.utils.fromWei(balance, 'ether');
//                     })
//                 }).then(function() {
//                     contract.methods.retrieve().call({from:curr_acc}).then(function(result) {
//                         document.getElementById('balance').innerHTML = result;
//                     })
//                 })
//             });
//         }

        

//         document.getElementById("myBtn").addEventListener("click", function() {
//             contract.methods.retrieve().call({from: account_addr}).then(function (result) {
//                 $('#balance').html(result);
//             }).then(function(tx) {
//                 console.log(tx);
//             });
//         })

//         document.getElementById("store").addEventListener("click", function() {
//             var num = parseInt(document.getElementById("input").value);
//             console.log(num);
//             web3.eth.getAccounts().then(function(accounts){
//                 var acc = accounts[0];
//                 return contract.methods.store(num).send({from: acc});
//             }).then(function(tx){
//                 console.log(tx);
//                 alert("Transaction successful");
//                 document.getElementById("input").value = "";
//                 contract.methods.retrieve().call({from: account_addr}).then(function (result) {
//                 $('#balance').html(result);
//             }).then(function() {
//                 web3.eth.getBalance(account_addr).then(function(balance) {
//                         document.getElementById('act-bal').innerHTML = web3.utils.fromWei(balance, 'ether');
//                     })
//             });
//             }).catch( function(tx){
//                 console.log(tx);
//             })

//         })
