---
name: file-placement-and-naming
description: Rules for Appium screen object mirroring, file placement, and testID declarations matching gaj-sanket app
---

# Repository Architecture & File Placement Guidelines

## 1. Directory Structure Mirroring
The screen objects under `src/screens/` must mirror the exact folder and file structure of the mobile application source (`src/app/`):

```text
cg-forest/
├── config/                      # Capabilities and test runner configs (wdio.conf.js, capabilities.js)
├── dumps/                       # Captured UI hierarchy XML files (driver.getPageSource())
├── src/
│   ├── data/
│   │   └── credentials.json     # Role credentials: public, collector, bfo, cfo, rfo, dfo
│   ├── screens/                 # 1:1 Mirror of app/src/app/ with .js extension
│   │   ├── account/             # 4 files: app-info.js, edit-contact.js, notifications.js, profile.js
│   │   ├── animal-sighting/     # 3 files: animal-list.js, sighting-form.js, sighting-list.js
│   │   ├── auth/                # 3 files: login.js, otp.js, sign-up.js
│   │   ├── collector/           # 4 files: sighting-details.js, sighting-form.js, sighting-list.js, uploaded-sighting-details.js
│   │   ├── compensation/        # claim-details-view.js, my-applications.js, guard/*, section-manager/*
│   │   ├── dal/                 # dal-details.js, dal-list.js
│   │   ├── fences/              # fence-form.js, fence-list.js
│   │   ├── hanthi-mitra/        # mitra-form.js, mitra-list.js
│   │   ├── hathi-bot/           # chat.js
│   │   ├── help/                # help-form.js, my-reports.js, villager-sighting-form.js
│   │   ├── news/                # alert.js, comments.js, my-news-posts.js, news-detail.js, news-post-form.js
│   │   ├── siren/               # siren-form.js, siren-list.js
│   │   ├── tabs/                # _layout.js, help.js, home.js, map.js, news.js
│   │   ├── verify/              # sighting-verify-form.js, sightings-list.js
│   │   ├── villagers/           # villagers-form.js, villagers-list.js
│   │   └── index.js             # Splash / root entry
│   └── utils/
│       ├── driver.util.js       # Appium remote driver session management & smart locator
│       ├── gestures.util.js     # Scroll, swipe, and touch action helpers
│       └── dumper.util.js       # UI hierarchy XML snapshot dumper
├── tests/                       # Test specifications organized by feature & role
│   ├── auth/
│   ├── animal-sighting/
│   ├── compensation/
│   ├── help/
│   ├── news/
│   └── siren/
├── Jenkinsfile                  # Automated CI/CD pipeline
├── AGENTS.md
└── package.json
```

## 2. Naming Conventions & Rules

1. **Screen Object Files (`src/screens/`)**:
   - Must be named identically to the app's pages using kebab-case with `.js` extension (e.g. `app-info.js`, `sighting-form.js`).
   - **MANDATORY**: Each file MUST declare its `TEST_IDS` object at the very top of the file.
   - Example shape:
     ```javascript
     const TEST_IDS = {
         BACK_BTN: 'app-info.back.btn',
         WEBSITE_LINK: 'app-info.website.link',
         EMAIL_LINK: 'app-info.email.link',
     };
     ```

2. **Test Specifications (`tests/`)**:
   - Location: `tests/<feature>/`
   - Naming: `<scenario-or-role>.spec.js`
   - Example: `tests/compensation/bfo-inspection-flow.spec.js`

3. **Officer Roles & Compensation Workflow**:
   - **Public**: General citizen with limited access; uses `help/villager-sighting-form.js`.
   - **Collector**: Sighting view and administrative review.
   - **Officers**:
     1. **CFO (Circle Forest Officer)**: Opens compensation, creates/assigns task to BFO.
     2. **BFO (Beat Forest Officer)**: Opens assigned compensation, fills multi-step inspection form and submits.
     3. **CFO**: First-level verification of BFO submission.
     4. **RFO (Range Forest Officer)**: Second-level verification.
     5. **DFO (Divisional Forest Officer)**: Final review and approval.

## 3. Test Authoring Workflow & Screenshot Handling
1. **Screen-First Rule**: Tests must ONLY interact with screens defined under `src/screens/`. Never write ad-hoc inline locators in test specs when a screen object exists.
2. **Writing a New Test**:
   - Locate the target screen in `src/screens/<feature>/<page>.js`.
   - Use the `TEST_IDS` object defined at the top of that file.
   - Import the Screen class into `tests/<feature>/<scenario>.spec.js`.
3. **Screenshot Rule**: Whenever the user provides a screenshot or UI dump image, always verify and ask which page from `src/screens/` it represents before writing or updating locators.
