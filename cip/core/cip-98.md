---
cip: 98
title: Core Cryptography Scheme
description: The cryptography scheme employed in the Core Blockchain.
keywords: [cip, cip-98, cryptography, scheme, core, blockchain]
author: Dmitry
lang: en-US
tags: [final]
categories: [core]
date: 2022-06-16
---
This standard details the cryptography scheme employed in the Core Blockchain.

<!--truncate-->

## Motivation

The goal of this standard is to circumvent the limitations of ed448 and create an HD derivation scheme analogous to BIP32.

## Specification

### Conventions

Our cryptographic approach leans on the Ed448 elliptic cryptography described in RFC 8032. Terms such as "private key", "public key", "secret scalar", "signature", etc., utilized in this text, retain their original meanings and MUST BE serialized following the guidelines of the referenced document.

### Dual Cryptography

The signature schemes of Ed25519 and Ed448 differ significantly from Secp256k1. In the Ed448 scheme, rather than using a private key as a secret scalar, it applies the function SHAKE256(privateKey, 114) to achieve a 114-byte output. This output is then bifurcated into two 57-byte segments. The left segment is used as the secret scalar, and the right as the secret nonce.

We've identified a method to calculate the public key or sign a message using only the secret scalar (left part of the output). We will capitalize on this opportunity and introduce a new scheme rooted in scalar cryptography, dubbed "Scheme1". The conventional scheme, outlined in RFC 8032, will be referenced as "Scheme0".

### Reasoning

BIP32's classical HD derivation scheme hinges on the linear relationship between the private and public keys. In Ed448, this relationship is disrupted during the initial stage when the hash of the private key is computed to extract the secret scalar. To reinstate this dependency, we propose the implementation of a novel scheme that preserves it.

### Private Key Types

The choice between signature schemes will hinge on the type of private key in use. The final bit of the last byte of a private key (little-endian) will dictate the key's classification. A value of 0 denotes the use of the conventional Scheme0. A value of 1 signifies the utilization of Scheme1.

Thus, if the most significant bit of the last byte (in little endian) is 0, the steps from RFC 8032 are carried out unchanged.

### Scheme1

If the most significant bit of the last byte (little endian) of the private key is set to 1, Scheme1 is applied. This key is treated as a secret scalar. All the stipulations defined in RFC 8032 pertaining to the secret scalar will be executed (e.g., the lowest 2 bits of the first byte are set to 0, the last byte to 0, and the penultimate byte to 1). With this scalar, one can compute the public key or sign the message, leveraging the same string the nonce uses.

### Overall Cryptography Scheme

Given that the `privateKey` is represented by `byte[57]`, the overarching scheme can be elucidated as follows:

```go
if (privateKey[56] & 0x80 == 0x00) {
        // Most significant bit of the last byte equals 0, process as usual:
        output = SHAKE256(privateKey, 114)
        left = output[0:57]
        right = output[57:114]
        // ....
} else {
        // Most significant bit of the last byte equals 1:
        scalar = privateKey
        scalar[0] &= 0xfc
        scalar[56] = 0
        scalar[55] |= 0x80
        left = scalar
        right = scalar
        // then proceed as usual
}
```

## Rationale

This design provides a choice between the classic Ed448 signature technique and the ability to generate HD-wallet keys similar to BIP32. Consequently, those desiring the conventional approach should ensure the last bit of their private key is set to 0. Conversely, users aiming for an HD-derivation scheme should set this bit to 1.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
