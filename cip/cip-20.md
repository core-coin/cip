---
cip: 20
title: Token Standard
author: Mojtaba
lang: en-US
tag: final
category: cbc
date: 2022-05-28
star: true
---
A standard interface for tokens.

<!--truncate-->

## Abstract

This standard allows for the implementation of a standard API for tokens within smart contracts. It provides basic functionality to transfer tokens and allows tokens to be approved so they can be spent by another on-chain third party.

## Motivation

A standard interface allows any tokens on Core to be re-used by other applications, from wallets to decentralized exchanges.

## Specification

### Token

#### Methods

**NOTES**:
- The following specifications use syntax from Ylem `0.8.4` (or above).
- Callers MUST handle `false` from `returns (bool success)`. They MUST NOT assume that `false` is never returned!

##### name

Returns the name of the token, e.g., `"MyToken"`.

OPTIONAL: This method can improve usability, but interfaces and other contracts MUST NOT expect these values to be present.

```js
function name() public view returns (string)
```

##### symbol

Returns the symbol of the token, e.g., "CTN".

OPTIONAL: This method can improve usability, but interfaces and other contracts MUST NOT expect these values to be present.

```js
function symbol() public view returns (string)
```

##### decimals

Returns the number of decimals the token uses. For instance, `8` means to divide the token amount by `100000000` to get its user representation.

OPTIONAL: This method can improve usability, but interfaces and other contracts MUST NOT expect these values to be present.

```js
function decimals() public view returns (uint8)
```

##### totalSupply

Returns the total token supply.

```js
function totalSupply() public view returns (uint256)
```

##### balanceOf

Returns the account balance of another account with address `_owner`.

```js
function balanceOf(address _owner) public view returns (uint256 balance)
```

##### transfer

Transfers `_value` amount of tokens to address `_to` and MUST fire the `Transfer` event. The function SHOULD `throw` if the caller's account balance does not have enough tokens to spend.

*Note:* Transfers of 0 values MUST be treated as normal transfers and fire the `Transfer` event.

```js
function transfer(address _to, uint256 _value) public returns (bool success)
```

##### transferFrom

Transfers `_value` amount of tokens from address `_from` to address `_to`, and MUST fire the `Transfer` event.

The `transferFrom` method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can, for example, allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies. The function SHOULD `throw` unless the `_from` account has deliberately authorized the sender of the message via some mechanism.

*Note:* Transfers of 0 values MUST be treated as normal transfers and fire the `Transfer` event.

```js
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
```

##### approve

Allows `_spender` to withdraw from your account multiple times, up to the `_value` amount. If this function is called again, it overwrites the current allowance with `_value`.

**NOTE**: To prevent attack vectors like the one [described here](https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/), clients SHOULD ensure they create user interfaces that set the allowance first to `0` before setting it to another value for the same spender. However, the contract itself shouldn't enforce this to maintain backward compatibility with contracts deployed earlier.

```js
function approve(address _spender, uint256 _value) public returns (bool success)
```

##### allowance

Returns the amount which `_spender` is still allowed to withdraw from `_owner`.

```js
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
```

#### Events

##### Transfer

MUST trigger when tokens are transferred, including zero-value transfers.

A token contract which creates new tokens SHOULD trigger a Transfer event with the `_from` address set to `0x0` when tokens are created.

```js
event Transfer(address indexed _from, address indexed _to, uint256 _value)
```

##### Approval

MUST trigger on any successful call to `approve(address _spender, uint256 _value)`.

```js
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
```

## Implementation

There are already numerous CBC20-compliant tokens deployed on the Core network. Different implementations have been crafted by various teams, each with its unique trade-offs, ranging from energy-saving to enhanced security.

## Copyright

Copyright and related rights waived via CC0.
