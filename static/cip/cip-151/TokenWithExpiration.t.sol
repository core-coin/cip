// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "spark-std/Test.sol";
import "../src/TokenWithExpiration.sol";  // Your token contract
import "../src/OnChainKV.sol";            // The KV contract

contract TokenWithExpirationTest is Test {
    TokenWithExpiration token;
    address user = address(0xBEEF);
    address recipient = address(0xCAFE);

    uint256 future = block.timestamp + 30 days;
    uint256 past = block.timestamp - 1 days;

    function setUp() public {
        token = new TokenWithExpiration();
        token.setValue("tokenExpiration", vm.toString(future));
        token.sealKey("tokenExpiration");

        token.mint(user, 100 ether);
        vm.prank(user);
        token.approve(address(this), 100 ether);
    }

    function testTransferBeforeExpiration() public {
        vm.prank(user);
        token.transfer(recipient, 10 ether);
        assertEq(token.balanceOf(recipient), 10 ether);
    }

    function testTransferAfterExpirationFails() public {
        token.setMockTime(past);
        vm.prank(user);
        vm.expectRevert("Token expired");
        token.transfer(recipient, 10 ether);
    }

    function testExpirationKeySealed() public {
        bool sealed = token.isSealed("tokenExpiration");
        assertTrue(sealed);
    }

    function testFailSetExpiredKeyAfterSeal() public {
        token.setValue("tokenExpiration", vm.toString(block.timestamp + 90 days));
    }
}
