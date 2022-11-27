// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract BantTransaction{

    uint bal = 100;
    
    function sendMoney(uint _amt) public{
        bal += _amt;
    }

    function withdraw(uint _amt) public{
        bal -= _amt;
    }

    function getBalance() public view returns(uint){
        return bal;
    }

}