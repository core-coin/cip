---
title: CIP-0 example
description: CIP-0 example template
author: Core Foundation
comment: false
date: 2022-01-01
sidebar_position: 7
---
**Frontmatter:**

```yaml
---
cip: 0
title: CIP-0 example
description: CIP-0 example template
keywords: [cip, cip-0, example, template]
author: Author (@author@server.pod)
lang: en-US
status: [draft]
tags: [example]
date: 2022-01-01
discussions-to: <URL>
requires: <CIP number(s)> # Only required when you reference a CIP in the `Specification` section. Otherwise, remove this field.
---
```

> This is the suggested template for new CIPs. Note that a CIP number will be assigned by an editor. When opening a pull request to submit your CIP, please use an abbreviated title in the file name, `cip-ID.md`, where "ID" is the CIP ID. The title should be 44 characters or fewer.
> Provide a simplified and layperson-accessible explanation of the CIP.

<!--truncate-->

## Abstract

> A short (~200 words) description of the technical issue being addressed.

## Motivation

> The motivation is critical for CIPs that aim to change the Core protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the CIP solves. CIP submissions without sufficient motivation may be rejected outright.

## Specification

> The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow for competing, interoperable implementations on any of the current Core platforms.

## Rationale

> The rationale elaborates on the specification by describing the motivations behind the design and the reasons for particular design decisions. It should discuss alternative designs that were considered and related work. The rationale may also provide evidence of consensus within the community and should address important objections or concerns raised during discussions.

## Backwards Compatibility

> All CIPs introducing backward incompatibilities must include a section detailing these incompatibilities and their severity. The CIP must explain how the author proposes to address these incompatibilities. CIP submissions without a comprehensive backward compatibility analysis may be rejected outright.

## Test Cases

> Test cases for implementation are mandatory for CIPs affecting consensus changes. Other CIPs can opt to include links to relevant test cases if applicable.

## Implementation

> Implementations must be finalized before any CIP is given "Final" status, but they don't need to be completed before the CIP is accepted. While achieving consensus on the specification and rationale before initiating coding is beneficial, the principle of "rough consensus and running code" can be instrumental in resolving many API details discussions.

## Security Considerations

> All CIPs must contain a section discussing the security implications and considerations relevant to the proposed change. This section should provide details important for security discussions, highlight potential risks, and be referenced throughout the lifecycle of the proposal. CIP submissions lacking the "Security Considerations" section will be rejected. A CIP cannot proceed to "Final" status without a Security Considerations discussion deemed satisfactory by the reviewers.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
