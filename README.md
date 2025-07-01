# CIP

> The Core Improvement Proposal (CIP) sets standards for the Core platform, encompassing core protocol specifications, client APIs, and contract standards.

## Contributing

You can begin by opening your proposal under the [issues section of this repository](https://github.com/core-coin/cip/issues).

### Review

- [What is a CIP](/docs/what-is-cip.md)
- [CIP rationale](/docs/cip-rationale.md)
- [CIP categories](/docs/cip-categories.md)
- [CIP workflow](/docs/cip-workflow.md)
- [CIP editors](/docs/cip-editors.md)
- [CIP example](/docs/cip-0.md)

### How to start

Begin by contributing to the [issues section of this repository](https://github.com/core-coin/cip/issues/new/choose). Once done, you'll be able to draft a CIP using the associated issue number (if available).

**Next steps:**

1. Review the template [cip-0](/docs/cip-0.md)
2. [Create a CIP in the Online Editor](https://github.com/core-coin/cip/new/master?filename=cip/cip-0.md&message=CIP%20Proposal&description=CIP%20Proposal%20Draft&value=---%0Acip%3A%20%0Atitle%3A%20%0Adescription%3A%20%0Akeywords%3A%20%5B%5D%0Aauthor%3A%20%0Alang%3A%20en-US%0Atags%3A%20%5Bdraft%5D%0Acategories%3A%20%5B%5D%0Adate%3A%202022-12-01%0Adiscussions-to%3A%20%0A---%0A%3C%21--Introduction--%3E%0A%0A%3C%21--truncate--%3E%0A%0A%23%23%20Abstract%0A%0A%0A%0A%23%23%20Motivation%0A%0A%0A%0A%23%23%20Specification%0A%0A%0A%0A%23%23%20Rationale%0A%0A%0A%0A%23%23%20Backwards%20Compatibility%0A%0A%0A%0A%23%23%20Test%20Cases%0A%0A%0A%0A%23%23%20Implementation%0A%0A%0A%0A%23%23%20Security%20Considerations%0A%0A%0A%0A%23%23%20Copyright%0A%0ACopyright%20and%20related%20rights%20waived%20via%20%5BCC0%5D%28https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%29.%0A)

Or

1. [Fork](https://github.com/core-coin/cip/fork) this repository.
2. Modify the template [cip-0](https://github.com/core-coin/cip/blob/master/cip/docs/cip-0.md) and move it to the [`cip` folder](https://github.com/core-coin/cip/blob/master/cip).
3. [Submit a Pull Request](https://github.com/core-coin/cip/compare) to the Core CIP repository.

For graphical content, place it in the [CIP image directory](https://github.com/core-coin/cip/blob/master/static/cip) `/static/cip/cip-x`, where 'x' is the CIP number. Link images using the path `/cip/cip-x/cip-x-1.png`.

## Tags

- `Draft`: Consideration phase for a CIP.
- `Accepted`: A CIP set for immediate adoption, often slated for the next hard fork (relevant for Core/Consensus layer CIPs).
- `Final`: A CIP adopted in a prior hard fork (pertinent to Core/Consensus layer CIPs).
- `Deferred`: A CIP not up for immediate adoption, but might be reconsidered for future hard forks.

## Categories

CIPs are categorized into various types, each with its own list:

- **Core**: Improvements involving a consensus fork or changes significant to core development discussions.
- **Networking**: Enhancements concerning network protocol specs.
- **Interface**: Focuses on client API/RPC specs, language standards like method names, and contract ABIs. Discussions should mainly take place in the interfaces repo before submitting a CIP here.
- **CBC**: Application standards and conventions like token standards and name registries.
- **Informational**: Addresses Core design issues or provides guidelines to the Core community without suggesting new features.
- **Meta**: Outlines processes around Core or proposes process changes. These are more binding than informational CIPs and often require community consensus.

## Channels

- [Discussions](https://github.com/core-coin/cip/discussions)
- [GH Issues](https://github.com/core-coin/cip/issues)
