# Consultant Foundations synthetic quote lab

This dependency-free TypeScript lab simulates a narrow change request in a quote calculator. It is synthetic training material, not client code. Use a private personal learner repository created from the public course template.

## Requirements

- Node.js 24 or later (uses Node's built-in TypeScript type stripping and test runner)
- Git and GitHub Desktop for repository operations
- Copilot CLI or GitHub.com Copilot only when the learner's plan and policy permit the feature; otherwise work manually or use an approved alternative

GitHub Desktop is the Git client for clone, branch, diff, commit, and push. It is not the Copilot app. Do not use client code, credentials, customer names, logs, or other confidential data in this lab or in AI prompts.

## Run the starter tests

From the repository root:

```sh
npm test
```

No install step is needed. The initial tests pass but do not cover the defect at the volume-discount boundary. The request documents the rule and both boundary expectations; add those regression cases as part of the exercise.

## Change request

Read `docs/client-request.md`. The intended learner workflow and evidence artifacts are described in the course lessons. Work on branch `consultant/quote-fix`. Do not create or push changes to the public course template itself.
