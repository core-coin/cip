---
cip: 98
title: Core Coin cryptography scheme
author: @todesstile
lang: en-US
tag: draft
category: crc
date: 2022-06-16
---

### Abstract

The following standard describes cryptography scheme in Core Blockchain

### Motivation

This standard allows to overcome ed448 restrictions and develop HD-derivations scheme, similar to BIP32.

### Specification

## Conventions

Our cryptography scheme is based on Ed448 elliptic cryptography, described in RFC 8032. Terms "private key", "public key", "secret scalar", "signature" etc. used in this text, have the same meaning and MUST BE serialized according to that document.

## Dual cryptography

Ed25519 and Ed448 signature schemes are quite different from Secp256k1. Instead of using private key as secret scalar, Ed448 scheme uses private key to calculate SHAKE256(privateKey, 114) to get 114-bytes output. This output is splitted on two 57-bytes part, using the left part as secret scalar, and right part as secret nonce.

This scheme gives us an indirect way to calculate public key or sign the message, using only secret scalar (left part of output). We will abuse this possibility, and define a new scheme, based on scalar criptography. We will call it "Scheme1". We will refer to the classical scheme, described in RFC 8032 as "Scheme0"

## Reasoning

Classical HD derivation scheme, implemented in BIP32, depends on linear dependence between private key and public key. In Ed448 this dependence is destroyed by the first step, when we calculate the hash of private key to obtains secret scalar. To restore this dependence, we should implement new scheme, that will keep it alive.

## Private key types

We will use both signature schemes, depending on type of private key. We will use the last bit of the last byte of a private key (little-ending) to mark a type of a key. If it's equal to 0 - we will use the classical scheme (Scheme0). If it is equal to 1 - we will use the new scheme (Scheme1).

So, when the most significant bit of the last byte (little endian) is 0, we just repeat all the steps from RFC 8032 with no changes.

## Sheme1

When the most significant bit of the last byte (little endian) of a private key is 1, we will use instead the Scheme1. We will consider this key as secret scalar. We will make all the steps, defined in RFC 8032, that should be done to secret scalar (i.e. setting the lowest 2 bits of the first byte to 0, setting the last byte to 0, setting next-to-last byte to 1). Now we could calculate public key from it, or sign the message, using the same string as nonce

## Overall cryptography scheme

So, the overall scheme could be described this way, implying we have privateKey = byte[57] 
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

This scheme was made to provide alternative between classical Ed448 signature mechanism and the possibility to generate HD-wallet keys in BIP32-like-way. So, anyone, who wants to use classical scheme, must generate a private key with the last bit set to 0, and anyone, who wants to apply HD-derivation scheme, must set this bit to 1.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
