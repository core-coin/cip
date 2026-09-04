# Core Improvement Proposals (CIPs)

Core Improvement Proposals define standards for the Core platform, including
protocol specifications, client APIs, and contract standards.

## Contributing

Before writing a proposal, open a
[CIP issue](https://github.com/core-coin/cip/issues/new/choose) to describe the
idea and gather early feedback. An editor will assign the CIP number.

### Review

- [What is a CIP](docs/what-is-cip.md)
- [CIP rationale](docs/cip-rationale.md)
- [CIP tags](docs/cip-tags.md)
- [CIP workflow](docs/cip-workflow.md)
- [CIP editors](docs/cip-editors.md)
- [CIP template](docs/cip-0.md)

### How to start

After discussing the idea and receiving a CIP number:

1. Review the [CIP template](docs/cip-0.md).
2. [Create a draft in the online editor][new-cip], replacing `ID` with the
   assigned number.

Or

1. [Fork](https://github.com/core-coin/cip/fork) the repository.
2. Copy [the template](docs/cip-0.md) into the appropriate category under
   [`cip/`](cip), and name it `cip-ID.md`.
3. [Open a pull request](https://github.com/core-coin/cip/compare) against the
   `master` branch.

Place images in `static/cip/cip-ID/`, where `ID` is the CIP number. Reference
them from Markdown as `/cip/cip-ID/image-name.png`.

## Tags

- `Draft`: The CIP is under consideration.
- `Accepted`: The CIP is approved for adoption, often in an upcoming hard fork.
- `Final`: The CIP has been adopted.
- `Deferred`: The CIP is not being considered now but may be revisited later.

## Categories

CIPs are categorized into various types, each with its own list:

- **Core**: Improvements involving a consensus fork or changes significant to
  core development discussions.
- **Networking**: Enhancements concerning network protocol specs.
- **Interface**: Client API and RPC specifications, language-level standards,
  method names, and contract ABIs.
- **CBC**: Application standards and conventions, such as token standards and
  name registries.
- **Informational**: Core design issues and guidance for the community that do
  not propose new features.
- **Meta**: Core processes and process changes. These CIPs are more binding
  than informational CIPs and often require community consensus.

## Channels

- [Discussions](https://github.com/core-coin/cip/discussions)
- [GitHub Issues](https://github.com/core-coin/cip/issues)

[new-cip]: https://github.com/core-coin/cip/new/master?filename=cip/cip-ID.md
