---
cip: 98
title: Core Coin cryptography scheme
author: Dmitry (@todesstile)
lang: en-US
tag: final
category: core
date: 2022-06-16
---

### Abstract

The following standard describes the cryptography scheme in Core Blockchain.

### Motivation

This standard allows overcoming the ed448 restrictions and developing an HD-derivations scheme, similar to BIP32.

### Specification

#### Conventions

Our cryptography scheme is based on Ed448 elliptic cryptography, described in RFC 8032. Terms "private key", "public key", "secret scalar", "signature" etc. used in this text, have the same meaning and MUST BE serialized according to that document.

#### Dual cryptography

Ed25519 and Ed448 signature schemes are quite different from Secp256k1. Instead of using a private key as a secret scalar, the Ed448 scheme uses the private key to calculate SHAKE256(privateKey, 114) to get 114-bytes output. This output is split into two 57-bytes parts, using the left part as the secret scalar, and right part as secret nonce.

This scheme gives us an indirect way to calculate public key or sign the message, using only the secret scalar (left part of the output). We will abuse this possibility, and define a new scheme, based on scalar criptography. We will call it "Scheme1". We will refer to the classical scheme, described in RFC 8032 as "Scheme0"

#### Reasoning

A classical HD derivation scheme, implemented in BIP32, depends on linear dependence between the private key and the public key. In Ed448, this dependence is eliminated by the first step, when we calculate the hash of the private key to obtain the secret scalar. To restore this dependence, we should implement a new scheme, that will keep it alive.

#### Private key types

We will use both signature schemes, depending on the type of private key. We will use the last bit of the last byte of a private key (little-ending) to mark the type of a key. If it's equal to 0 - we will use the classical scheme (Scheme0). If it is equal to 1 - we will use the new scheme (Scheme1).

So, when the most significant bit of the last byte (little endian) is 0, we just repeat all the steps from RFC 8032 with no changes.

#### Sheme1

When the most significant bit of the last byte (little endian) of a private key is 1, we will use the Scheme1 instead. We will consider this key as a secret scalar. We will make all the steps defined in RFC 8032 that should be done to the secret scalar (i.e. setting the lowest 2 bits of the first byte to 0, setting the last byte to 0, setting next-to-last byte to 1). Now we could calculate public key from it, or sign the message, using the same string as the nonce does.

#### Overall cryptography scheme

So, the overall scheme could be described this way, implying we have the privateKey = byte[57] 

```
if (privateKey[56] & 0x80 == 0x00) {
         // Most significant bit of the last byte is equal to 0, so process as usuall:
         output = SHAKE256(privateKey, 114)
         left = output[0:57]
         right = output[57:114]
         // ....
} else {
         // Most significant bit of the last byte is equal to 1, so:
         scalar = privateKey
         scalar[0] = scalar[0] & 0xfc
         scalar[56] = 0
         scalar[55] = scalar[55] | 0x80
         left = scalar
         right = scalar
         // then as usual
}
```

### Rationale

This scheme was made to provide an alternative between the classical Ed448 signature mechanism and the possibility to generate HD-wallet keys in a BIP32-like-way. That means that anyone who wants to use the classical scheme must generate a private key with the last bit set to 0, and anyone who wants to apply a HD-derivation scheme must set this bit to 1.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
