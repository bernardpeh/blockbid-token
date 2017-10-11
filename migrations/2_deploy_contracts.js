// var setup for contract deployment
var startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1;
var endTime = startTime + (2419200 * 3)
var rate = 300;
var earlybonus = 60;
var etherWallet = web3.eth.accounts[0];
var cap = 30000000
var goal =  1000000
var icoEnd = startTime + (2419200);


var BlockbidCrowdsale = artifacts.require("BlockbidCrowdsale.sol");

module.exports = function(deployer) {
    deployer.deploy(BlockbidCrowdsale, goal, cap, startTime, endTime, icoEnd, rate, earlybonus, etherWallet);
};
