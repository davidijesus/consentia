# Consentia

Consentia is a research and product concept for supporting the preliminary ethical review of studies involving human participants. Its proposed workflow uses specialized AI agents to organize evidence for a human reviewer. This repository contains a Docusaurus documentation site, not a working review platform or a deployed agent backend.

**Status:** concept documentation. The proposed performance targets, privacy controls, integrations and review outcomes have not been validated by a production implementation in this repository. Consentia must not be used to make or replace an ethics committee decision.

## Read the documentation

- [Published documentation](https://davidijesus.github.io/consentia/)
- [Executive overview](docs/docs/intro.md)
- [Proposed solution](docs/docs/solucao.md)
- [Roadmap](docs/docs/roadmap.md)
- [Project author and roles](docs/docs/equipe.md)

The research material is written in Portuguese for its Brazilian context. The descriptions of AI agents, legal requirements and expected benefits represent a proposal, not evidence that those capabilities are implemented or compliant.

## Run the documentation locally

Use Node.js 20 or newer and npm:

```bash
cd docs
npm ci
npm run start
```

To validate the static site:

```bash
cd docs
npm ci
npm run build
npm run serve
```

The Docusaurus site is configured under `/consentia/`. The `docs/docs/` directory contains the research pages, while `docs/static/` contains the published assets. There is no application service or agent runtime in this repository.

## Responsible use and attribution

The documentation discusses sensitive research protocols and personal data. Do not submit real participant records or confidential protocols to this repository or treat its proposed assessments as medical, legal or regulatory advice. The original research and author credits are preserved in the documentation.

No license file is present in this revision. Do not assume that the text, source code or assets are licensed for reuse.
