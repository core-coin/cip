---
cip: 9
title: Core Denomination Units
description: Informational specification describing Core's denomination units
keywords:
  - cip
  - denominations
  - units
  - display
  - fees
  - decimals
  - precision
author: Rastislav Vašička <rastislav@onion.email>
lang: en-US
status: final
tags:
  - informational
date: 2025-08-24T00:00:00.000Z
---

Informational specification describing Core's denomination units, canonical source-of-truth file, and normative client behaviors for display, parsing, and conversion between units.

<!--truncate-->

## Abstract

This Informational CIP documents the standard denomination units for the Core Blockchain and defines normative behaviors for clients when presenting amounts, parsing user input, and calculating fees. The canonical registry of units is maintained in a machine-readable JSON file.

## Motivation

Divergent unit handling leads to UX confusion, rounding drift, and inconsistent fee displays across wallets, explorers, and SDKs. This CIP provides a single point of reference and prescribes minimal client rules so that amounts render, parse, and convert consistently across the Core ecosystem.

## Specification

### Denomination Units table

| name        | alias  | unit | symbol | SI        | value |
| ----------- | ------ | ---- | ------ | --------- | ----- |
| ore         | ore    | ø    | 🔷     | atto (a)  | 1E+00 |
| wav         | fecore |      | 〰️     | femto (f) | 1E+03 |
| grav        | picore |      | ➰     | pico (p)  | 1E+06 |
| nucle       | nacore | ꞥ    | ✴️     | nano (n)  | 1E+09 |
| atom        | μcore  |      | ⚛️     | micro (μ) | 1E+12 |
| moli        | micore | ₥    | ❇️     | mili (m)  | 1E+15 |
| core        | core   | ₡    | 🟢️️     |           | 1E+18 |
| aer         | kicore | ₳    | 🌀️     | kilo (k)  | 1E+21 |
| orb         | Mecore |      | ☄️     | mega (M)  | 1E+24 |
| plano       | Gicore | Ᵽ    | 🪐️     | giga (G)  | 1E+27 |
| tera        | Tecore |      | 🌐️     | tera (T)  | 1E+30 |
| sola        | Pecore |      | 💫️     | peta (P)  | 1E+33 |
| galx        | Excore | Ǥ    | ✨️     | exa (E)   | 1E+36 |
| cluster     | Zecore |      | 💠️     | zetta (Z) | 1E+39 |
| supermatter | Yocore | ₷    | 🔱     | yotta (Y) | 1E+42 |

## JSON structure (schema)

At a high level, the registry enumerates units from largest **display** units to the smallest **base** unit. Each entry specifies its **name**, **symbol**, **exponent** to the base, and any **aliases** suitable for parsing.

> The following schema is illustrative; implementers MUST follow the fields and
> semantics of the canonical JSON file.

```typescript
/**
 * Denomination unit entry (example shape).
 *
 * - `name`  : unit name (e.g., "moli")
 * - `alias` : SI-style prefixed base unit (e.g., "micore")
 * - `unit`  : Unicode symbol for the unit (e.g., "₥")
 * - `symbol`: emoji symbol (e.g., "❇️")
 * - `si`    : tuple [full SI name, short SI symbol] (e.g., ["mili","m"])
 * - `value` : power-of-ten multiplier relative to the base unit (e.g., 1e15)
 */
export interface DenominationUnit {
  name: string;
  alias: string;
  unit: string;    // Unicode glyph
  symbol: string;  // Emoji
  si: [name: string, symbol: string];
  value: number;   // e.g., 1e15
}
```

## Rationale

* A single, machine-readable registry prevents drift and hard-coded unit tables across clients.
* Defining the units in a single file allows the ecosystem to evolve denominations without protocol forks.
* Normative but minimal client rules (base for accounting, display for UX, strict parsing, precise integer conversions) balance safety and usability.

## Backwards Compatibility

This CIP is **non-breaking**. It does not modify Core consensus or transaction formats. Existing applications may continue with embedded unit tables; however, they are **RECOMMENDED** to migrate to the canonical registry to ensure consistency across the ecosystem.

## Security Considerations

* **Phishing/typos**: Ambiguous or deceptive aliases MUST NOT be accepted in parsers. Wallets SHOULD present the symbol and code prominently.
* **Rounding drift**: Always convert via the base unit and avoid floating-point arithmetic to prevent silent precision loss.
* **Staleness**: Pin and periodically refresh the registry; stale unit tables can lead to inconsistent UX and fee suggestions.

## References

* Canonical registry: [units.json at GitHub](https://github.com/core-coin/core-denomination/blob/master/units.json)
* IPFS (may change with time): [units.json at IPFS](ipfs://bafkreif7bznw6b3wpx6a4ut32okhhupqnrsjrbw6nyr2fjn5a2chtux7hm)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
