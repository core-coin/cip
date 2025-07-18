---
cip: 99
title: Core HD-Wallet Scheme
description: The HD-wallet derivation scheme for Core Coin.
keywords:
  - cip
  - cip-99
  - hd-wallet
  - scheme
  - core
  - coin
author: Dmitry
lang: en-US
status: final
tags:
  - core
date: 2022-06-16T00:00:00.000Z
---
This standard outlines the HD-wallet derivation scheme for Core Coin.

<!--truncate-->

## Abstract

This standard outlines the HD-wallet derivation scheme for Core Coin.

## Motivation

Given that the classical BIP32 scheme is incompatible with Ed448, this standard presents an alternative implementation of HD-derivation. This alternative is based on the modified Core Coin cryptographic mechanism.

## Specification

### Definitions

```plaintext
||   : concatenation
+    : regular addition of two numbers
+++  : addition of two points on Ed448
H(x, salt) : 57 bytes of the hash function HMAC-SHA512 with 2048 cycles of PBKDF2: PBKDF2(HMAC-SHA512, x, salt, 57, 2048)
chain, privKey, publicKey : [57]byte
```

### Extended Keys

An extended key is represented by a [114]byte array. It is derived from `chaincode || privateKey` or `chaincode || publicKey`. As only Scheme1 supports HD-wallet derivation, all private keys must have the most significant bit of the last byte equal to 1. More details can be found in the "Core Coin Cryptography Scheme" CIP.

### Master Key

The master key forms the root of the HD-derivation tree. It can be derived from mnemonics using a slightly modified version of the BIP39 scheme. You should follow this scheme until obtaining the seed (BIP39 Seed). The master key can then be derived as:

```go
chain = H(seed, "mnemonicforthechain")
key = H(seed, "mnemonicforthekey")
masterKey = chain || key
```

For enhanced security, you should:

```txt
set the most significant bit of the last byte to 1 (masterKey[113] |= 0x80)
set the most significant bit of the next-to-last byte to 1 (masterKey[112] |= 0x80)
clear the second significant bit of the next-to-last byte (masterKey[112] &= 0xbf)
```

This master key corresponds exactly to the `m` in the `m/44'/...` derivation path.

### Child Pair Generation: Chain Code

You can always generate `pubKey` from `privKey`. This operation will be denoted as `private2public`.

Child chaincode generation varies between usual and hardened keys. For a usual key:

```go
pubKey = private2public(privKey)
childChain = H(0x03 || pubKey || i , chain), where i < 2^31
```

For a hardened key:

```go
childChain = H(0x01 || privKey || i , chain), where i >= 2^31
```

### Child Pair Generation: Private Key to Private Key

Child private key generation also differs between usual and hardened keys. For a usual key:

```go
pubKey = private2public(privKey)
template = H(0x02 || pubKey || i , chain), where i < 2^31
```

For a hardened key:

```go
template = H(0x00 || privKey || i , chain), where i >= 2^31
```

Next, nullify the top 4 bytes and the last 2 bits of the template for security reasons, resulting in the `clampedTemplate = clamp(template)`. Then, the child `privKey` can be computed as:

```go
childPrivKey = privKey + clampedTemplate
```

Note: There won't be an overflow since the upper bytes of the template are set to zero. EdDSA security standards require the 9th bit of `privateKey` to be 1 to defend against rho-attacks. We clamp the template because we want to add it to `privateKey` while ensuring that the 9th bit of the result remains secure. As 32 bits following the 9th bit are zero, we can perform at least \(2^{22}\) addition operations on the `privateKey`. This limits the tree's hierarchy level to approximately \(2^{20}\).

### Child Pair Generation: Private Key to Public Key

Public keys are generated using the `privateKey2privateKey` method, and then deriving the public key from the private key as usual.

### Child Pair Generation: Public Key to Public Key

It is impossible to generate a child public key from a hardened public key, which is the primary attribute of hardened keys: they are designed to prevent such derivation.

However, usual child public keys can be derived from a usual parent public key. First, calculate the `clampedTemplate` as described above:

```go
template = H(0x02 || publicKey || i , chain), where i < 2^31
template -> clampedTemplate
```

Next, compute a point on Ed448 corresponding to the `clampedTemplate` and add it to the `publicKey` using point addition for Ed448:

```go
point = private2public(clampedTemplate)
childPublicKey = publicKey +++ point
```

This public key aligns with the private key generated by the `private2private` method.

## Rationale

This scheme offers an alternative between the classical Ed448 signature mechanism and the ability to generate HD-wallet keys in a BIP32-like manner.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
