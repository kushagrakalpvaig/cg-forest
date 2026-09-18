# Project Guidelines & Agent Instructions

## Overview
This repository contains automated Appium/WebdriverIO end-to-end test suites for the **Gaj Sanket - Chhattisgarh** mobile application (`com.kalpvaig.cgtracker`).

## Repository Organization Rules
- All test scripts, page objects, configurations, and artifacts must follow strictly defined directory locations and naming conventions.
- Refer to [.agents/rules/file-placement.md](file:///.agents/rules/file-placement.md) for detailed rules on:
  - Directory layout (`src/screens/`, `tests/<role>/<feature>/`, `fixtures/dumps/`, `config/`).
  - `.js` file naming conventions (kebab-case / camelCase suffix patterns: `*.page.js`, `*.spec.js`, `*.helper.js`).
  - Separation of UI hierarchy XML dumps into dedicated fixture folders.
  - CI/CD readiness for Jenkins test runner execution.
