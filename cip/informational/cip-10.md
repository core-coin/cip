---
cip: 10
title: PayTo URI Scheme
description: >-
  Informational specification adopting the RFC 8905 'payto' URI scheme for Core.
keywords:
  - cip
  - informational
  - uri
  - payto
  - rfc8905
  - wallets
  - ux
  - links
  - payments
author: Rastislav Vašička <rastislav@onion.email>
lang: en-US
status: draft
tags:
  - informational
date: 2025-08-24T00:00:00.000Z
---

Informational specification describing how the Core ecosystem SHOULD use the RFC 8905 PayTo URI scheme for linking to payment targets on Core, and how wallets/SDKs SHOULD parse, validate, and act on those URIs.

<!--truncate-->

## Abstract

This CIP documents the adoption of the IETF PayTo URI scheme for Core. A PayTo URI always identifies the target of a payment and encodes a payment target type, a target identifier, and optional parameters like `amount` or `message`. We define Core-specific conventions so that wallets and applications can interoperate reliably across the ecosystem. ([RFC Editor][1])

## Motivation

Users and applications benefit from a common, linkable payment format that works across wallets, websites, QR codes, and desktop/mobile platforms. PayTo is a standardized URI scheme already used for bank accounts and cryptocurrency addresses. Standardizing Core usage enables:

* clickable **"Pay via XCB"** links (XCB is the Core target type),
* QR codes that launch Core wallets with prefilled details,
* safer parsing and confirmation UX,
* and long-term interoperability with other payment systems using the same URI scheme. ([RFC Editor][1])

## Specification

### General 'PayTo' syntax (by reference)

Core adopts the generic PayTo syntax and semantics from RFC 8905 (Sections 2–3, 5). In short:

`payto://` *authority* `/` *path* `?` *options*

Where the *authority* is the payment target type, the *path* encodes the target identifier, and *options* include `amount`, `receiver-name`, `sender-name`, `message`, and `instruction`. ([RFC Editor][1])

### Core target type

* **Target type name**: `xcb` for Mainnet, `xab` for Testnet, `xce` for Enterprise Network.
* **Path**: an ICAN account address, `cb…` for Mainnet, `ab…` for Testnet, `ce…` for Enterprise Network.
* **Semantics**: native CORE coin transfers to the address given in *path*.

### Options

Core wallets and SDKs MUST support the **generic** options from RFC 8905: `amount`, etc. ([RFC Editor][1])

#### `amount`

RFC 8905 defines:

`amount = currency ":" unit [ "." fraction ]`

with the constraints: `unit < 2^53` and at most **8** fractional digits. ([RFC Editor][1])

If no currency is specified, the default is `CORE` main unit.

**Recommendations:**

* For **native** amounts, use amounts without currency and `:` colon. For example, `amount=1` is 1 CORE.
* For **contract-based** amounts, the amount is prefixed with contract address or contract ticker (for well-known contracts defined by application), divided by `:` colon. For example, `amount=ctn:1` is 1 CTN.
* If you want to keep just currency without amount, keep `:` colon typed to avoid confusion. For example, `amount=ctn:` is CTN currency with custom amount.

### Examples

* Human-friendly in CORE: `payto://xcb/cb…?amount=1.25`
* Payment with CTN: `payto://xcb/cb…?amount=ctn:1.14`

### QR and deep-link handling

* Wallets SHOULD register PayTo handlers on supported platforms to open URIs.
* QR codes SHOULD embed the full `payto://` URI.
* If multiple wallets are installed, the user SHOULD be able to choose which wallet to launch. ([RFC Editor][1])

## Rationale

* Reuse of an IETF-standard URI decouples Core from vendor-specific deep link formats and eases multi-wallet support.
* Keeping token/contract semantics out of scope avoids fragmentation; native coin payments can adopt immediately.

## Backwards Compatibility

This proposal is **non-breaking**. It does not modify Core consensus or transaction formats. Wallets without PayTo handling remain functional; links simply won’t auto-open those apps.

## Security Considerations

* Wallets MUST require explicit user confirmation before sending and MUST take measures against clickjacking.
* URIs received over unauthenticated channels might target the wrong account; wallets SHOULD display the full address and take care with homographs in labels/messages.
* Avoid collecting unnecessary PII from `sender-name`/`receiver-name` fields; store only what is needed for receipts. ([RFC Editor][1])

## References

* RFC 8905: *The ‘payto’ URI Scheme for Payments* — RFC Editor (syntax, semantics, options). ([RFC Editor][1])
* Core PayTo scheme documentation — `core-laboratories/payto` (implementation guidance and examples). ([GitHub][2])
* PayTo link generator — [PayTo.Money](https://payto.money)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

[1]: https://www.rfc-editor.org/rfc/rfc8905.html "RFC 8905: The 'payto' URI Scheme for Payments"
[2]: https://github.com/core-laboratories/payto/blob/master/docs/scheme.md "payto/docs/scheme.md at master · core-laboratories/payto · GitHub"
