---
title: Core Improvement Proposals
---
# CIP

> Core Improvement Proposal (CIP) describes standards for the Core platform, including core protocol specifications, client APIs, and contract standards.

## Contributing

First you can open your proposal under [issues of this repository](https://github.com/core-coin/cip/issues) as well as in the discussion in [Core ◆ Talk](https://coretalk.space/tags/cip).

### Review:

- [What is CIP](cip/what-is-cip)
- [CIP rationale](cip/cip-rationale)
- [CIP categories](cip/cip-categories)
- [CIP workflow](cip/cip-workflow)
- [CIP editors](cip/cip-editors)
- [CIP example](cip/cip-0)

### How to start:

- [Fork](https://github.com/core-coin/cip/fork) this repository.
- Change the template [cip-0](https://github.com/core-coin/cip/blob/master/cip/example/cip-0.md) and move it to [`cip` folder](https://github.com/core-coin/cip/blob/master/cip/posts).
- [Submit a Pull Request](https://github.com/core-coin/cip/compare) to Core's CIP repository.

Put any graphical content into [CIP image directory](https://github.com/core-coin/cip/blob/master/cip/images) `@img/cip-x` under your cip-x (x is the cip number). You can link images with path `@img/cip-0/cip-0-1.png`.

## CIP tags

- `Draft` a CIP that is open for consideration.
- `Accepted` a CIP that is planned for immediate adoption, i.e. expected to be included in the next hard fork (for Core/Consensus layer CIPs).
- `Final` a CIP that has been adopted in a previous hard fork (for Core/Consensus layer CIPs).
- `Deferred` a CIP that is not being considered for immediate adoption. May be reconsidered in the future for a subsequent hard fork.

## CIP categories

CIPs are separated into a number of types, and each has its own list of CIPs.

- Core
   - Improvements requiring a consensus fork, as well as changes that are not necessarily consensus critical but may be relevant to “core dev” discussions.
- Networking
   - Includes improvements around devp2p, network protocol specifications of whisper and swarm.
- Interface
   - Includes improvements around client API/RPC specifications and standards, and also certain language-level standards like method names and contract ABIs. The label “interface” aligns with the interfaces repo. Discussion should primarily occur in that repository before a CIP is submitted to the CIPs repository.
- CRC
   - Application-level standards and conventions, including contract standards such as token standards, name registries, URI schemes, library/package formats and wallet formats.
- Informational
   - Describes a Core design issue, or provides general guidelines or information to the Core community, but does not propose a new feature. Informational CIPs do not necessarily represent Core community consensus or a recommendation, so users and implementers are free to ignore Informational CIPs or follow their advice.
- Meta
   - Describes a process surrounding Core or proposes a change to (or an event in) a process. Process CIPs are like Standards Track CIPs but apply to areas other than the Core protocol itself. They may propose an implementation, but not to Core's codebase; they often require community consensus. Unlike Informational CIPs, they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Core development. Any meta-CIP is also considered a Process CIP.

## Channels

- [Core ◆ Talk](https://coretalk.space/tags/cip)
- [GH Discussions](https://github.com/core-coin/cip/discussions)

## License of the content

[CC0 “No Rights Reserved”](https://creativecommons.org/share-your-work/public-domain/cc0/)

## License of the app

[CORE License](LICENSE)
