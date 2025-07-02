// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "spark-std/Script.sol";
import "../src/OnChainKV.sol";

contract DeployOnChainKV is Script {
    function run() external {
        vm.startBroadcast();
        OnChainKV kv = new OnChainKV();
        console2.log("Deployed OnChainKV at:", address(kv));
        vm.stopBroadcast();
    }
}