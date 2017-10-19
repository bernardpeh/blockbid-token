// var startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 100;
// launch time is 21-10-2017, 1300 hrs GMT
var startTime = 1508590800;
var endTime = startTime + (604800 * 8)
var rate = 300;
var earlybonus = 60;
var etherWallet = "0xFC33a201BB96457F14D19b6752f0bEBAEbDE6E1d";
// var etherWallet = web3.eth.accounts[1];
var cap = 3000000000000000;
var goal = 100000000000000;

var BlockbidCrowdsale = artifacts.require("BlockbidCrowdsale.sol");

module.exports = function(deployer) {
    deployer.deploy(BlockbidCrowdsale, goal, cap, startTime, endTime, rate, earlybonus, etherWallet);
};

