# QualiCore Tech – Manual QA Portfolio Project

## Live Demo
https://quali-core-tech-qa-portfolio.vercel.app/

## Project Overview
QualiCore Tech is a realistic demo e-commerce web application created for manual QA practice and portfolio demonstration.

The project simulates a consumer electronics online store and includes core storefront functionality such as:

- Product catalog
- Product details pages
- Search
- Filters and sorting
- Cart
- Wishlist
- Authentication flows
- Checkout
- Responsive behavior

This application was intentionally designed as a QA training environment and includes a controlled set of reproducible defects for testing practice.

---

## Project Goal
The goal of this project is to provide a realistic environment for practicing and demonstrating:

- Functional Testing
- Exploratory Testing
- Regression Testing
- UI / UX Validation
- Negative Testing
- Bug Reporting
- Test Documentation
- Requirement Traceability

This project was built for learning, practical QA execution, and portfolio presentation.

---

## Repository Structure

```text
qualicore-portfolio/
├── app/                          # React + Vite demo application
│   ├── public/                   # Static assets (favicon, robots.txt)
│   ├── src/                      # Application source code
│   │   ├── components/           # UI components (layout, product, cart, etc.)
│   │   ├── context/              # React context (cart, wishlist, auth)
│   │   ├── data/                 # Product catalog data
│   │   ├── pages/                # Route-level page components
│   │   └── main.tsx              # Application entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
│
├── qa-docs/                      # Full manual QA documentation suite
│   ├── 01_SRS/                   # Software Requirements Specification
│   ├── 02_User_Stories/          # User stories and backlog
│   ├── 03_Acceptance_Criteria/   # Acceptance criteria per story
│   ├── 04_RTM/                   # Requirements Traceability Matrix
│   ├── 05_Test_Plan/             # QA test plan
│   ├── 06_Test_Scenarios/        # High-level test scenarios
│   ├── 07_Test_Cases/            # Detailed test cases
│   ├── 08_Bug_Reports/           # Bug reports with reproduction steps
│   ├── 09_Test_Execution/        # Test execution log and evidence index
│   ├── 10_Test_Summary_Report/   # Test summary report
│
└── portfolio-readme/             # Reviewer-facing submission guide
    └── Portfolio_Submission_Guide.md
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS |
| UI Components | Radix UI / shadcn/ui |
| State Management | React Context API |
| Persistence | localStorage |
| Testing (unit) | Vitest |
| Testing (e2e) | Playwright |
| Deployment | Vercel |

---

## Intentional Defects

The application contains a controlled set of reproducible defects embedded for QA practice. These are real, testable bugs — not placeholder content.

Defect areas include:

- **Cart** — subtotal miscalculation, badge count not updating on removal
- **Search** — case-sensitivity issues, results not clearing
- **Filters** — price range not resetting, category mismatch
- **Product data** — brand and category inconsistencies across views
- **Forms** — checkout validation gaps, missing required field enforcement
- **UI** — layout breakpoints, wishlist icon state inconsistency
- **Authentication** — session persistence edge cases

Full reproduction steps for each defect are documented in `qa-docs/08_Bug_Reports/`.

---

## QA Documentation

This project includes a complete manual QA documentation suite covering the full test lifecycle:

| Document | Location |
|---|---|
| Software Requirements Specification | `qa-docs/01_SRS/` |
| User Stories & Backlog | `qa-docs/02_User_Stories/` |
| Acceptance Criteria | `qa-docs/03_Acceptance_Criteria/` |
| Requirements Traceability Matrix | `qa-docs/04_RTM/` |
| QA Test Plan | `qa-docs/05_Test_Plan/` |
| Test Scenarios | `qa-docs/06_Test_Scenarios/` |
| Test Cases | `qa-docs/07_Test_Cases/` |
| Bug Reports | `qa-docs/08_Bug_Reports/` |
| Test Execution Log | `qa-docs/09_Test_Execution/` |
| Test Summary Report | `qa-docs/10_Test_Summary_Report/` |
| Portfolio Assets | `qa-docs/11_Portfolio_Assets/` |

---

## Running the App Locally

```bash
cd app
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

---

## Reviewer Notes

For a structured walkthrough of this portfolio submission — including what to review, what to test, and how the QA documentation maps to the application — see:

`portfolio-readme/Portfolio_Submission_Guide.md`

---

## Author

Built as a manual QA portfolio project.
Designed to demonstrate real-world QA skills: test planning, test case design, defect reporting, traceability, and exploratory testing.
