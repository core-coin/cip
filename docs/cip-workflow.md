---
title: CIP Work Flow
author: Core Foundation
date: 2022-01-01
comment: false
sidebar_position: 5
---
# CIP Work Flow

**Key Stakeholders**:

- **You**, the champion or *CIP author*
- **CIP editors** [(details)](/docs/cip-editors)
- **Core Developers**

Before diving in, validate your idea with the Core community. It's efficient to ascertain the originality and broad applicability of your concept before investing time. Relying solely on online searches might not provide comprehensive insights. Ensure the proposal isn't limited in its benefits to just you, the author. An idea may seem brilliant individually but may not cater to the wider Core community.

As a champion, your tasks encompass:

- Drafting the CIP in the prescribed format
- Steering discussions in relevant forums
- Building community consensus

The typical journey of a successful CIP is:
> [ WIP ] -> [ DRAFT ] -> [ LAST CALL ] -> [ ACCEPTED ] -> [ FINAL ]

Every stage transition requires the CIP author's request and subsequent approval by the CIP editors. Employ a pull request to modify the status and append a link guiding further discussions.

## Status Definitions

- **Active**: Some Informational and Process CIPs remain active indefinitely.
- **Work in progress (WIP)**: After gauging community support, the champion drafts a CIP via a pull request, which may also include an initial implementation to facilitate review.
  - ✔️ **Draft**: A CIP editor, upon agreement, assigns a CIP number (typically derived from related issue or PR) and integrates your pull request.
  - ❌ **Draft**: Grounds for refusal include lack of focus, vastness, redundant effort, technical fallacies, insufficient motivation, compatibility issues, or deviation from Core's ethos.
- **Draft**: Post the initial merge, iterate on your draft via subsequent pull requests until it matures for the next stage. A draft, especially if it impacts consensus, should ideally have a working implementation.
  - ✔️ **Last Call**: CIP editors, if in agreement, mark the status and set a 14-day review window.
  - ❌ **Last Call**: A request might be turned down if substantial edits to the draft are anticipated.
- **Last Call**: Prominent listing of the CIP on [Core CIP Website](http://cip.coreblockchain.net).
  - ❌: Significant alterations or unresolved technical concerns revert the CIP to draft.
  - ✔️ **Accepted**: Applicable only to Core CIPs. A smooth Last Call leads to acceptance.
  - ✔️ **Final**: For non-core CIPs, a smooth Last Call culminates in a Final status.
- **Accepted**: Pertains solely to Core CIPs. The decision to incorporate it in client builds through a hard fork isn't under CIP purview.
  - ✔️ **Final**: A Core CIP has to be implemented across a minimum of three viable Core clients for "Final" consideration. Upon wide community adoption, it's designated "Final".
- **Final**: Reflects the current pinnacle. A "Final" CIP gets updated strictly for error rectifications.

## Other Unique Statuses

- **Deferred**: For core CIPs postponed for an upcoming hard fork.
- **Rejected**: Either a fundamentally flawed CIP or a Core CIP declined by Core Devs.
- **Active**: Similar to Final, but can undergo updates without changing the CIP number.
- **Superseeded**: A once-final CIP no longer represents the zenith. Another "Final" CIP references the outdated one.

## Pillars of a Successful CIP

Each CIP should encapsulate:

- **Preamble**: RFC 822 headers detailing CIP metadata.
- **Simple Summary**: An easy-to-understand synopsis.
- **Abstract**: A concise (~200 words) technical summary.
- **Motivation**: (Optional but crucial for protocol changes) Why the current specs fall short.
- **Specification**: Detailed syntax and semantics for the feature ensuring interoperability.
- **Rationale**: Delve into the design motivation, alternatives, related work, and community consensus.
- **Backwards Compatibility**: Describe any backward incompatibilities and proposed resolutions.
- **Test Cases**: Mandatory for consensus-impacting CIPs.
- **Implementations**: Complete prior to achieving "Final" status.
- **Copyright Waiver**: All CIPs must reside in the public domain.

## CIP Formats and Templates

Draft CIPs using [markdown](https://guides.github.com/features/mastering-markdown/). Images should reside in the CIP-specific subdirectory, `/static/cip`.

## CIP Header Preamble

Mandatory and optional headers should adhere to the RFC 822 style.

### Author Header

Represents author details in various permissible formats.

Supported formats:

- `First Last <url>`: URL, ENS, IPFS can be a personal website or blog.
- `First Last <email>`: Email address.
- `First Last (@github)`: GitHub username.
- `First Last (@nickname@pod.tld)`: Nickname and pod (e.g., @coretalk.space).
- `First Last` `(cb00…@cp)` or `<corepass:cb00…>`: CoreID from CorePass.

## Auxiliary Files

Supporting files, diagrams, etc., should follow a structured naming convention.

## Transferring CIP Ownership

Occasionally, ownership might need a transfer. Ideally, retain original authors as co-authors. Valid reasons include the original author's inaccessibility or disinterest. Disagreement isn't a valid reason. Consensus is pursued, but alternative CIPs are always an option.

Express your interest in a takeover by addressing both the original author and the CIP editor. Absent timely feedback from the original author, the CIP editor decides.

## Copyright

Rights relinquished via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
