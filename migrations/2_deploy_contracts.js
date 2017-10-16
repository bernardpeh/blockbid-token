// var setup for contract deployment. Make sure its sometime in the future, else it will fail
var startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 100;
var endTime = startTime + (604800 * 8)
var rate = 300;
var earlybonus = 60;
var etherWallet = web3.eth.accounts[1];
var cap = 3000000000000000;
var goal = 100000000000000;

var BlockbidCrowdsale = artifacts.require("BlockbidCrowdsale.sol");

module.exports = function(deployer) {
    deployer.deploy(BlockbidCrowdsale, goal, cap, startTime, endTime, rate, earlybonus, etherWallet);
};

// 100000000000000,3000000000000000,1507986672,1507992672,300,60,"0xca35b7d915458ef540ade6068dfe2f44e8fa733c"
