// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "spark-std/Test.sol";
import "../src/OnChainKV.sol";

contract OnChainKVTest is Test {
    OnChainKV kv;

    function setUp() public {
        kv = new OnChainKV();
    }

    function testSetValueAndGet() public {
        kv.setValue("DOC_HASH", "0xabc123");
        string memory val = kv.getValue("DOC_HASH");
        assertEq(val, "0xabc123");
    }

    function testSealPreventsUpdate() public {
        kv.setValue("DOC", "first");
        kv.sealKey("DOC");
        vm.expectRevert("Key is sealed and cannot be updated");
        kv.setValue("DOC", "second");
    }

    function testHasKeyAndIsSealed() public {
        kv.setValue("PROSPECTUS", "0xhash1");
        assertTrue(kv.hasKey("PROSPECTUS"));
        assertFalse(kv.isSealed("PROSPECTUS"));
        kv.sealKey("PROSPECTUS");
        assertTrue(kv.isSealed("PROSPECTUS"));
    }

    function testListAndCount() public {
        kv.setValue("A", "a");
        kv.setValue("B", "b");
        string[] memory keys = kv.listKeys();
        assertEq(keys.length, 2);
        assertEq(kv.count(), 2);
    }
}