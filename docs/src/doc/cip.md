---
title: Core Improvement Proposals
---
# CIP

> Core Improvement Proposal (CIP) describe standards for the Core platform, including core protocol specifications, client APIs, and contract standards.

## Contributing

First you can open your proposal under [issues of this repository](https://github.com/core-coin/cip/issues) as well as discussion in [Core ◆ Talk](https://cip.coretalk.info).

### Review:

- [What is CIP](what-is-cip)
- [CIP rationale](cip-rationale)
- [CIP categories](cip-categories)
- [CIP workflow](cip-workflow)
- [CIP editors](cip-editors)
- [CIP example](cip-0)

### How to start:

- [Fork](https://github.com/core-coin/cip/fork) this repository.
- Change the template [cip-0](https://github.com/core-coin/cip/blob/master/docs/src/doc/cip-0.md) and move it to [`cip` folder](https://github.com/core-coin/cip/blob/master/docs/src/cip).
- [Submit a Pull Request](https://github.com/core-coin/cip/compare) to Core's CIP repository.

Put any graphical content into [CIP image directory](https://github.com/core-coin/cip/blob/master/docs/src/.vuepress/public/img/cip) `/docs/src/.vuepress/public/img/cip/cip-x` under your cip-x (x is the cip number). You can link images with path `/img/cip/cip-0/cip-0-1.png`.

## CIP tags

- `Draft` a CIP that is open for consideration.
- `Accepted` a CIP that is planned for immediate adoption, i.e. expected to be included in the next hard fork (for Core/Consensus layer CIPs).
- `Final` a CIP that has been adopted in a previous hard fork (for Core/Consensus layer CIPs).
- `Deferred` a CIP that is not being considered for immediate adoption. May be reconsidered in the future for a subsequent hard fork.

## CIP categories

CIPs are separated into a number of types, and each has its own list of CIPs.

<dl>
	<dt>Core</dt>
	Improvements requiring a consensus fork, as well as changes that are not necessarily consensus critical but may be relevant to “core dev” discussions.
	<dt>Networking</dt>
	Includes improvements around devp2p, network protocol specifications of whisper and swarm.
	<dt>Interface</dt>
	Includes improvements around client API/RPC specifications and standards, and also certain language-level standards like method names and contract ABIs. The label “interface” aligns with the interfaces repo and discussion should primarily occur in that repository before a CIP is submitted to the CIPs repository.
	<dt>CRC</dt>
	Application-level standards and conventions, including contract standards such as token standards, name registries, URI schemes, library/package formats and wallet formats.
	<dt>Informational</dt>
	Describes a Core design issue, or provides general guidelines or information to the Core community, but does not propose a new feature. Informational CIPs do not necessarily represent Core community consensus or a recommendation, so users and implementers are free to ignore Informational CIPs or follow their advice.
	<dt>Meta</dt>
	Describes a process surrounding Core or proposes a change to (or an event in) a process. Process CIPs are like Standards Track CIPs but apply to areas other than the Core protocol itself. They may propose an implementation, but not to Core's codebase; they often require community consensus; unlike Informational CIPs, they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Core development. Any meta-CIP is also considered a Process CIP.
</dl>

## Channels

- [Core ◆ Talk > CIP](https://cip.coretalk.info)
- [Discord](https://discord.gg/f7JFPg)

## Feed

- [RSS](https://cip.coreblockchain.cc/rss.xml)
- [Atom](https://cip.coreblockchain.cc/feed.atom)
- [Json](https://cip.coreblockchain.cc/feed.json)
