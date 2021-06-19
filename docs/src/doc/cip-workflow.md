---
title: CIP Work Flow
---
# CIP Work Flow

Parties involved in the process are you, the champion or *CIP author*, the [*CIP editors*](/doc/cip-editors), and the *Core Developers*.

Before you begin, vet your idea, this will save you time. Ask the Core community first if an idea is original to avoid wasting time on something that will be be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will work for most people in most areas where Core is used. Examples of appropriate public forums to gauge interest around your CIP include [Core ◆ Talk > CIP](https://cip.coretalk.info), [the Issues section of this repository](https://github.com/core-coin/cip/issues), and [Google Groups](https://groups.google.com/g/core-blockchain).

Your role as the champion is to write the CIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful CIP will move along:

```
[ WIP ] -> [ DRAFT ] -> [ LAST CALL ] -> [ ACCEPTED ] -> [ FINAL ]
```

Each status change is requested by the CIP author and reviewed by the CIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your CIP. The CIP editors will process these requests as per the conditions below.

* **Active** — Some Informational and Process CIPs may also have a status of “Active” if they are never meant to be completed.
* **Work in progress (WIP)** — Once the champion has asked the Core community whether an idea has any chance of support, they will write a draft CIP as a [pull request]. Consider including an implementation if this will aid people in studying the CIP.
  * ✔️ Draft — If agreeable, CIP editor will assign the CIP a number (generally the issue or PR number related to the CIP) and merge your pull request. The CIP editor will not unreasonably deny a CIP.
  * ❌ Draft — Reasons for denying draft status include being too unfocused, too broad, duplication of effort, being technically unsound, not providing proper motivation or addressing backwards compatibility, or not in keeping with the Core philosophy.
* **Draft** — Once the first draft has been merged, you may submit follow-up pull requests with further changes to your draft until such point as you believe the CIP to be mature and ready to proceed to the next status. A CIP in draft status must be implemented to be considered for promotion to the next status (ignore this requirement for core CIPs).
  * ✔️ Last Call — If agreeable, the CIP editor will assign Last Call status and set a review end date, normally 14 days later.
  * ❌ Last Call — A request for Last Call status will be denied if material changes are still expected to be made to the draft. We hope that CIPs only enter Last Call once, so as to avoid unnecessary noise on the feed.
* **Last Call** — This CIP will listed prominently on the [http://cip.coreblockchain.cc/](http://cip.coreblockchain.cc/) website.
  * ❌ — A Last Call which results in material changes or substantial unaddressed technical complaints will cause the CIP to revert to Draft.
  * ✔️ Accepted (Core CIPs only) — A successful Last Call without material changes or unaddressed technical complaints will become Accepted.
  * ✔️ Final (Not core CIPs) — A successful Last Call without material changes or unaddressed technical complaints will become Final.
* **Accepted (Core CIPs only)** — This CIP is in the hands of the Core client developers. Their process for deciding whether to encode it into their clients as part of a hard fork is not part of the CIP process.
  * ✔️ Final — Standards Track Core CIPs must be implemented in at least three viable Core clients before it can be considered Final. When the implementation is complete and adopted by the community, the status will be changed to “Final”.
* **Final** — This CIP represents the current state-of-the-art. A Final CIP should only be updated to correct errata.

Other exceptional statuses include:

* Deferred — This is for core CIPs that have been put off for a future hard fork.
* Rejected — A CIP that is fundamentally broken or a Core CIP that was rejected by the Core Devs and will not be implemented.
* Active — This is similar to Final, but denotes a CIP which which may be updated without changing its CIP number.
* Superseded — A CIP which was previously final but is no longer considered state-of-the-art. Another CIP will be in Final status and reference the Superseded CIP.

## What belongs in a successful CIP?

Each CIP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the CIP, including the CIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - Provide a simplified and layman-accessible explanation of the CIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Motivation (*optional*) - The motivation is critical for CIPs that want to change the Core protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the CIP solves. CIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations for any of the current Core platforms.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Backwards Compatibility - All CIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The CIP must explain how the author proposes to deal with these incompatibilities. CIP submissions without a sufficient backwards compatibility treatise may be rejected outright.
- Test Cases - Test cases for an implementation are mandatory for CIPs that are affecting consensus changes. Other CIPs can choose to include links to test cases if applicable.
- Implementations - The implementations must be completed before any CIP is given status “Final”, but it need not be completed before the CIP is merged as draft. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of “rough consensus and running code” is still useful when it comes to resolving many discussions of API details.
- Copyright Waiver - All CIPs must be in the public domain. See the bottom of this CIP for an example copyright waiver.

## CIP Formats and Templates

CIPs should be written in [markdown](https://guides.github.com/features/mastering-markdown/) format.
Image files should be included in a subdirectory of the `/docs/src/.vuepress/public/img/cip` folder for that CIP as follow: `/docs/src/.vuepress/public/img/cip/cip-0` (for cip **0**). When linking to an image in the CIP, use relative links such as `img/cip/cip-0/image.png`.

## CIP Header Preamble

Each CIP must begin with an RFC 822 style header preamble, preceded and followed by three hyphens (`---`). The headers must appear in the following order. Headers marked with `📎` are optional and are described below. All other headers are required.

<dl>
  <dt>cip</dt>
  <dd>CIP number (this is determined by the CIP editor)</dd>
  <dt>title</dt>
  <dd>CIP title</dd>
  <dt>author</dt>
  <dd>a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.</dd>
  <dt>lang</dt>
  <dd>Language of CIP. For now just English supported. `en-US`, `en-GB`, etc.</dd>
  <dt>discussions-to 📎</dt>
  <dd>`https://t.coretalk.info/cip-0` will point to Core ◆ Talk CIP discussion; A url pointing to the official discussion thread; `issue` will point to issue itself</dd>
  <dt>tags</dt>
  <dd>draft | last call | accepted | final | active | deferred | rejected | superseded</dd>
  <dt>type</dt>
  <dd>Standards Track (Core, Networking, Interface, CRC)  | Informational | Meta</dd>
  <dt>categories 📎</dt>
  <dd>core | networking | interface | crc | meta | informational</dd>
  <dt>date</dt>
  <dd>Date created on, in ISO 8601 (yyyy-mm-dd) format</dd>
  <dt>requires 📎</dt>
  <dd>CIP number(s)</dd>
  <dt>replaces 📎</dt>
  <dd>CIP number(s)</dd>
  <dt>superseded-by 📎</dt>
  <dd>CIP number(s)</dd>
  <dt>resolution 📎</dt>
  <dd>A url pointing to the resolution of this CIP</dd>
</dl>

#### Author header

The author header optionally lists the names, email addresses or usernames of the authors/owners of the CIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

`John Doe <john.doe@dom.ain>`

or

`Richard Roe (@raisty)`

if the email address or GitHub username is included, and

`Janie Doe`

if the email address is not given.

Note: The resolution header is required for Standards Track CIPs only. It contains a URL that should point to an email message or other web resource where the pronouncement about the CIP is made.

## Auxiliary Files

CIPs may include auxiliary files such as diagrams. Such files must be named `cip-X-Y.ext`, where `X` is the CIP number, `Y` is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## Transferring CIP Ownership

It occasionally becomes necessary to transfer ownership of CIPs to a new champion. In general, we'd like to retain the original author as a co-author of the transferred CIP, but that's really up to the original author. A good reason to transfer ownership is because the original author no longer has the time or interest in updating it or following through with the CIP process, or has fallen off the face of the 'net (i.e. is unreachable or isn't responding to email). A bad reason to transfer ownership is because you don't agree with the direction of the CIP. We try to build consensus around an CIP, but if that's not possible, you can always submit a competing CIP.

If you are interested in assuming ownership of an CIP, send a message asking to take over, addressed to both the original author and the CIP editor. If the original author doesn't respond to email in a timely manner, the CIP editor will make a unilateral decision.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
