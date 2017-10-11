pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

contract BlockbidMintableToken is MintableToken {

  string public constant name = "Blockbid Token";
  string public constant symbol = "BID";
  uint8 public constant decimals = 1;

}
