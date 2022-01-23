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
				"internalType": "string",
				"name": "links",
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
				"internalType": "string",
				"name": "links",
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
						"internalType": "string",
						"name": "links",
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
var address = "0x7a7037Bf6534E7D93d84E2eb2C1221b2528E430f";
var donated_result;
var croppedaddressval;

var web3;
var account_addr, account_bal, currentFilter = "active";
if (typeof web3 != 'undefined'){
    web3 = new Web3(web3.currentProvider);
}
else{
	alert("Please install MetaMask and refresh the page");
}

var contract = new web3.eth.Contract(abi, address);

if(window.ethereum) {
	window.ethereum.on('accountsChanged', () => {
		initialiseAddress();
		viewAllIdeas(currentFilter);
	});
}

initialiseAddress();
viewAllIdeas('active');

function connect() {

	ethereum
	.request({ method: 'eth_requestAccounts' })
	.then(initialiseAddress())
	.catch((err) => {
	if (err.code === 4001) {
		console.log('Please connect to MetaMask.');
		$('#status').html('You refused to connect Metamask')
	} else {
		console.error(err);
	}
	});
}

function setFilter(filter, display) {
	if(filter === currentFilter) return;
	currentFilter = filter;
	$('#chooseFilter').text(display);
	viewAllIdeas(filter);
}

function createIdeaModal() {
	//Clear form
	$('#ownerName').val('');
	$('#title').val('');
	$('#desc').val('');
	$('#fundingReq').val('');
	$('#expiration').val('');
	$('#projectLink').val('');
	$('#imageLink').val('');
	$('#createIdeaModal').modal('show');
}

function openFundModal(idea_id) {

	document.getElementById('input' + idea_id.toString()).value = "";
	$(`#Modal${idea_id}`).modal('show');
}

function validateIdeaForm() {

	const docId = (id) => document.getElementById(id);

	return (docId("ownerName").checkValidity() && docId("projectLink").checkValidity() && docId("imageLink").checkValidity()
	&& docId("title").checkValidity() && docId("desc").checkValidity() && docId("expiration").checkValidity());
}

function submitIdea() {

	const ownerName = $('#ownerName').val();
	const title = $('#title').val();
	const desc = $('#desc').val();
	const fundingReq = $('#fundingReq').val();
	const expiration = $('#expiration').val();
	const projectLink = $('#projectLink').val();
	const imageLink = $('#imageLink').val();

	//validate later
	if (ownerName == '') {
		alert('Please enter a valid owner name');
		return;
	}
	//validate title
	if (title == '') {
		alert('Please enter a valid title');
		return;
	}
	if(desc == '') {
		alert('Please enter a valid description');
		return;
	}
	if(fundingReq == '' || parseFloat(fundingReq) <= 0) {
		alert('Please enter a valid funding request');
		return;
	}
	if(expiration == '') {
		alert('Please enter a valid expiration date');
		return;
	}
	if(projectLink == '') {
		alert('Please enter a valid project link');
		return;
	}
	if(imageLink == '') {
		alert('Please enter a valid image link');
		return;
	}

	if(!validateIdeaForm()) {

		alert("Form not valid");
		return;
	}
	
	//find number of days between today and expiration
	var day2 = new Date(expiration);
	var day1 = new Date();
	
	var difference = Math.abs(day2.getTime()-day1.getTime());
	
	difference = Math.ceil(difference/86400000);
	
	const total_link = imageLink + ','  + projectLink;
	
	var idea = {
		'owner_name': ownerName,
		'title': title,
		'desc': desc,
		'funding_req': fundingReq,
		'days_to_deadline': difference,
		'links': total_link
	}
	
	createIdea(idea);
}


function createCard(idea, amt_donated) {

	if(amt_donated>0)
		donated_result=true;
	else
		donated_result=false;

    const percentRaised = Math.round(idea.funding_raised / idea.funding_req * 100,2);
	const currDate = Math.floor(Date.now()/1000);
	const buttonStr = currDate >= parseInt(idea.time_of_deadline) ? '' 
		: `
		<button type="button" class="btn btn-primary" onclick="openFundModal(${idea.unique_id})">
			Fund this Project
		</button>`;

	const showFundedStatus = (currDate >= parseInt(idea.time_of_deadline) && parseFloat(web3.utils.fromWei(idea.funding_raised, 'ether')) >= parseFloat(web3.utils.fromWei(idea.funding_req, 'ether'))) ? `
		<div style="color: green;font-size: large"> This idea has been successfully funded. </div>` : '';

	const showNotFundedStatus = (currDate >= parseInt(idea.time_of_deadline) && parseFloat(web3.utils.fromWei(idea.funding_raised, 'ether')) < parseFloat(web3.utils.fromWei(idea.funding_req, 'ether'))) ? `
		<div style="color: red;font-size: medium"> This idea was not able to raise enough funds. Refunds are being processed. </div>` : '';
	
	const fundingReached = (currDate >= parseInt(idea.time_of_deadline) && parseFloat(web3.utils.fromWei(idea.funding_raised, 'ether')) >= parseFloat(web3.utils.fromWei(idea.funding_req, 'ether')) && idea.idea_owner === account_addr && idea.is_active==true) ? `
		<button class="btn btn-primary" onclick="withdrawFundingAmount(${idea.unique_id})">Withdraw Funding</button>` : '';
	
	
	const fundingNotReached = (currDate >= parseInt(idea.time_of_deadline) && parseFloat(web3.utils.fromWei(idea.funding_raised, 'ether')) < parseFloat(web3.utils.fromWei(idea.funding_req, 'ether')) && donated_result) ? `
	 	<div style="margin-top:5px;"> You donated ${amt_donated} ETH to this project.  <button class="btn btn-primary btn-sm" onclick="claimRefundAmount(${idea.unique_id})">Claim Refund</button> </div>` : '';

	var idea_owner = idea.idea_owner;
	var len = idea_owner.length;
	croppedaddressval = idea_owner.substring(0,6) + "..." + idea_owner.substring(len-4, len);


	const imageLink = idea.links.split(',')[0];
	const projectLink = idea.links.split(',')[1];

    return `
    <div class="card card-idea m-3 shadow" style="background-color:black">

         <img src="https://blog.producthype.co/wp-content/uploads/2020/03/Best-Kickstarter-Projects-2020-4.jpg" style="height: 100%;width: 100%;object-fit: cover; object-position: center;">

        <div class="card-idea-desc">

        <h3>${idea.title}</h3>

        <div style="height: 50px; width: 100%;">${idea.desc}</div>

        <div>
            <h5>Project Owner: <span>${idea.owner_name} (${croppedaddressval})</span></h5>
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

        <h5>Funding Raised: ${web3.utils.fromWei(idea.funding_raised, 'ether')} ETH</h4>

        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${percentRaised}%" aria-valuenow="${percentRaised}" aria-valuemin="0" aria-valuemax="100"><span style="font-size: medium;font-weight: bolder;">${percentRaised}%</span></div>
        </div>

        <div style="margin: auto;text-align: right;">Goal: <span>${web3.utils.fromWei(idea.funding_req, 'ether')}</span> ETH</div>
		<div>${buttonStr}</div>
		<div>${showFundedStatus}</div>
		<div>${showNotFundedStatus}</div>
		<div>${fundingReached}</div>
		<div>${fundingNotReached}</div>
        </div>

    </div>

	<div class="modal fade" id="Modal${idea.unique_id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="Modal${idea.unique_id}Label" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="Modal${idea.unique_id}Label">${idea.title}</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div> Account: <span class="fundAddress">${account_addr}</span> </div>
				<div> Total Balance: <span class="fundBalance">${account_bal}</span> </div>
				<br>
				<input min="0" type="number" value="" placeholder="Enter amount to fund" id="input${idea.unique_id}">
				  ETH
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" onclick="donateIdea(${idea.unique_id})">Fund</button>
			</div>
			</div>
		</div>
	</div>
    `;
}

function didFundtheProject(unique_id) {
	contract.methods.donated_amount_to_project(unique_id).call({from: account_addr}).then(function(result) {
		var res = web3.utils.fromWei(result, 'ether');
		if(res > 0) 
			return true;
		else
		return false;
	});
}


function buildFeed(ideas, filter) {

    const ideaContainer = document.getElementById('ideaContainer');
	ideaContainer.innerHTML = '';
	const currDate = Math.floor(Date.now()/1000);

	const reveresedIdea = Array.from(ideas).reverse();

	switch(filter) {

		case 'active': {

			reveresedIdea.filter((idea) => currDate < parseInt(idea.time_of_deadline))
			.forEach((idea) => {


			contract.methods.donated_amount_to_project(idea.unique_id).call({from: account_addr}).then(function(result) {
					var res = web3.utils.fromWei(result, 'ether');
					// console.log(res);
					if(res > 0) 
						donated_result =  true;
					else
						donated_result =  false;
					ideaContainer.innerHTML += createCard(idea, res);
			})

			});
			break;
		}

		case 'closed': {

			reveresedIdea.filter((idea) => currDate >= parseInt(idea.time_of_deadline))
			.forEach((idea) => {

				contract.methods.donated_amount_to_project(idea.unique_id).call({from: account_addr}).then(function(result) {
					var res = web3.utils.fromWei(result, 'ether');
					console.log(res);
					if(res > 0) 
						donated_result =  true;
					else
						donated_result =  false;
					ideaContainer.innerHTML += createCard(idea, res);
			})
			});
			break;
		}

		case 'all': {

			reveresedIdea.forEach((idea) => {

				contract.methods.donated_amount_to_project(idea.unique_id).call({from: account_addr}).then(function(result) {
					var res = web3.utils.fromWei(result, 'ether');
					console.log(res);
					if(res > 0) 
						donated_result =  true;
					else
						donated_result =  false;
					ideaContainer.innerHTML += createCard(idea, res);
			})
			});
			break;
		}
	}
    
}

function copyAddress() {

	if(!account_addr) {
		connect();
	}

	else{
		navigator.clipboard.writeText(account_addr);

		$('#userAddress').text('Copied Address!');

		setTimeout(() => initialiseAddress(), 700);
	}
}
 
function initialiseAddress() {

	web3.eth.getAccounts().then((accounts) => {

		account_addr = accounts[0];

		if(!account_addr) {
			
			$('#userAddress').text('Connect Metamask');
			$('#userBalance').text('');
			return;
		}

		const len = account_addr.length;
		const croppedAddress = account_addr.substring(0,6) + "..." + account_addr.substring(len-4, len);
		croppedaddressval = croppedAddress;
		document.getElementById('userAddress').innerHTML = croppedAddress;

		Array.from(document.getElementsByClassName('fundAddress')).forEach((element) => {

			element.innerHTML = account_addr;
		});

		web3.eth.getBalance(account_addr).then((balance) => {

			account_bal = (Math.round(web3.utils.fromWei(balance) * 100) / 100);
			document.getElementById('userBalance').innerHTML = account_bal.toString() + " ETH";

			Array.from(document.getElementsByClassName('fundBalance')).forEach((element) => {

				element.innerHTML = account_bal;
			});
		});
	});
}

function createIdea(idea) {

	$('#createIdeaModal').modal('hide');

	//convert to wei when sending to smart contract
	const weiAmount = web3.utils.toWei(idea.funding_req, 'ether');
    
	contract.methods.list_new_idea(idea.title, idea.desc, idea.owner_name, idea.links, weiAmount, idea.days_to_deadline).send({from:account_addr}).then(function(result) {
		console.log(result);
		$('#successCreateIdeaModal').modal('show');
		initialiseAddress();
		viewAllIdeas(currentFilter);
	});
}

function withdrawFundingAmount(unique_id){
	contract.methods.withdraw_funding_raised(unique_id).send({from: account_addr})
	.then(function(result){
		console.log(result);
		$('#successwithdrawModal').modal('show');
		initialiseAddress();
		viewAllIdeas(currentFilter);
	});
}

function claimRefundAmount(unique_id){
	contract.methods.claim_refund(unique_id).send({from: account_addr}).then(function(result){
		console.log(result);
		$('#successRefundModal').modal('show');
		initialiseAddress();
		viewAllIdeas(currentFilter);
	});
}


function viewAllIdeas(filter) {

	contract.methods.view_all_ideas().call().then(function(result) {
		console.log(result);
		buildFeed(result, filter);
    });
}

function donateIdea(idea_id) {

	let amount = (document.getElementById('input' + idea_id.toString())).value;

	if(!amount || parseFloat(amount) <= 0) {

		alert("Enter valid amount");
		return;
	};

	if(amount > account_bal) {

		alert("Insufficient Balance");
		return;
	}
	
	//convert to wei before donating and storing in contract.
	amount = web3.utils.toWei(amount, 'ether');


	$(`#Modal${idea_id}`).modal('hide');

	contract.methods.donate_to_idea(idea_id, amount).send({from:account_addr, value:amount})
	.then((result) => {
		console.log(result);
		$('#successTransactionModal').modal('show');
		viewAllIdeas(currentFilter);
		initialiseAddress();
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


function unixToDate(unix_timestamp) {
    var date = new Date(unix_timestamp * 1000);
    return date.getUTCDate().toString() + '/' + date.getUTCMonth().toString()+1 + '/' + date.getFullYear().toString();
}