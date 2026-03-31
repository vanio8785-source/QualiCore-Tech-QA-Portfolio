# QualiCore Tech — Manual QA Portfolio Project

> A realistic demo e-commerce web application built for manual QA practice and portfolio demonstration.

---

## Live Demo

| Build | URL | Status |
|---|---|---|
| QA Defect Build | [quali-core-tech-qa-portfolio.vercel.app](https://quali-core-tech-qa-portfolio.vercel.app/) | ✅ Deployed |
| Stable Build | — | Local only |

> **Note:** The public live deployment points to the **QA Defect Build** only.
> The Stable Build is intended to be used locally as the clean, expected-behavior baseline for regression, retesting, and comparison workflows.

---

## What Is This Project?

QualiCore Tech is a consumer electronics demo storefront built specifically as a **manual QA training and portfolio environment**. It is not a real shop — it is a controlled, portfolio-quality application designed to support the full manual QA workflow from requirements analysis through to defect reporting and test summary.

The application covers all standard e-commerce user flows: browsing, search, filtering, sorting, product details, cart, wishlist, authentication, checkout, and order confirmation.

---

## Why Does This Project Exist?

This project was created as a **QA portfolio piece** to demonstrate real-world manual testing skills in a structured, reviewable format. It provides:

- A fully functional application to test against
- A controlled set of intentional defects to discover and report
- A complete QA documentation suite following industry-standard practices
- A two-build architecture that mirrors real development workflows (stable vs. defect branches)

It is designed for use in **job applications, interviews, university submissions, and LinkedIn portfolio presentations**.

---

## Two-Build Structure

This project is deliberately structured as **two separate application variants** to support realistic QA workflows.

```
qualicore-tech-portfolio/
├── stable-build/        ← Clean baseline — expected correct behavior
├── qa-defect-build/     ← Intentional bug version — for QA practice
├── qa-docs/             ← Full manual QA documentation suite
├── portfolio-readme/    ← Reviewer and recruiter guide
└── README.md            ← This file
```

---

### Stable Build

**Package:** `qualicore-tech-stable`
**Location:** `stable-build/`

The Stable Build represents **expected correct behavior**. All known intentional defects have been removed. This version behaves as a properly functioning e-commerce application.

**Use the Stable Build for:**
- Understanding expected behavior before testing the defect build
- Regression testing (confirming defect build bugs are real, not baseline issues)
- Retesting (confirming a bug has been fixed)
- Smoke testing (verifying core flows work end-to-end)
- Expected vs. actual behavior comparison during bug reporting

<details>
<summary><strong>What was fixed in the Stable Build</strong></summary>

| Area | Fix |
|---|---|
| Cart | Subtotal miscalculation for product ID 7 removed |
| Cart | Badge count now correctly updates when items are removed |
| Wishlist | Silent 8-item cap removed |
| Product Details | Broken image override for product ID 3 removed |
| Product Details | Incorrect title typo for product ID 6 removed |
| Product Details | Wrong RAM spec override for product ID 2 removed |
| Product Card | Discount % calculation corrected (was dividing by wrong base) |
| Search | Leading-space bypass that skipped search term trimming fixed |
| Search | Corsair ghost filter that hid valid results removed |
| Sort | "Price: Low to High" no longer reverses results for components category |
| Login | Missing password validation added |
| Checkout | Postcode field now correctly required |
| Checkout | Card number now requires full 16 digits |
| Product Data | Product ID 15 brand corrected (was Acer, should be ASUS) |
| Product Data | Product ID 22 category corrected (was accessories, should be monitors) |

</details>

---

### QA Defect Build

**Package:** `qualicore-tech-qa-defect`
**Location:** `qa-defect-build/`

The QA Defect Build is the **intentional bug version** of the application. It contains a controlled set of reproducible defects embedded across multiple functional areas. This is the version to use for active QA practice.

**Use the QA Defect Build for:**
- Bug hunting and exploratory testing
- Writing and practising bug reports
- Test case execution against known defect areas
- Demonstrating defect identification skills

<details>
<summary><strong>Known defect areas</strong></summary>

| Area | Defect Summary |
|---|---|
| Cart | Subtotal calculates incorrectly for product ID 7 at qty > 1 |
| Cart | Badge count in header does not update when item is removed |
| Wishlist | Silently stops accepting items after 8 (no user feedback) |
| Product Details | Main image broken for product ID 3 |
| Product Details | Title contains a typo for product ID 6 |
| Product Details | RAM spec shows wrong value for product ID 2 |
| Product Card | Discount percentage is calculated using wrong base price |
| Search | Leading space in search query bypasses the search entirely |
| Search | Searching "Corsair" hides valid results for products above ID 35 |
| Sort | Price: Low to High reverses sort order for components category only |
| Login | Password field is not validated — empty password is accepted |
| Checkout | Postcode field is optional but visually marked as required |
| Checkout | Card number accepts any 4+ characters as valid |
| Product Data | Brand mismatch between product card and detail page for ID 15 |
| Product Data | Product ID 22 appears under wrong category |

Full reproduction steps for each defect are documented in `qa-docs/08_Bug_Reports/`.

</details>

---

## How to Run Each Build Locally

Both builds are independent React + Vite applications. Run them separately.

**Stable Build:**
```bash
cd stable-build
npm install
npm run dev
```
Runs at: `http://localhost:5173`

**QA Defect Build:**
```bash
cd qa-defect-build
npm install
npm run dev
```
Runs at: `http://localhost:5173` (or `5174` if the stable build is already running)

---

## Recommended QA Workflow

Follow this structured workflow to get the most out of this portfolio project:

1. **Start with the Stable Build** — Run it locally and explore every feature. Learn what correct behavior looks like across all flows (browse, search, filter, sort, cart, wishlist, login, checkout).

2. **Learn expected behavior** — Pay attention to how the cart calculates totals, how search handles edge cases, how validation works on forms. This becomes your mental baseline.

3. **Switch to the QA Defect Build** — Run the defect build (or use the [live demo](https://quali-core-tech-qa-portfolio.vercel.app/)) and test the same flows.

4. **Compare expected vs. actual** — When something behaves differently from the stable build, you've found a defect. Document the discrepancy clearly.

5. **Document your findings** — Write structured bug reports following the format in `qa-docs/08_Bug_Reports/`. Include steps to reproduce, expected result, actual result, and severity.

6. **Use the Stable Build as a regression reference** — After any hypothetical fix, re-run the same test against the stable build to confirm the expected behavior hasn't changed.

---

## How This Project Supports Different Test Types

| Test Type | How to Use This Project |
|---|---|
| **Functional Testing** | Execute test cases from `qa-docs/07_Test_Cases/` against the QA Defect Build to verify feature behavior. |
| **Exploratory Testing** | Freely explore the QA Defect Build without scripts — try edge cases, unusual inputs, and unexpected flows. |
| **Regression Testing** | Use the Stable Build as your baseline. After identifying a defect in the QA Defect Build, confirm the same flow works correctly in the Stable Build. |
| **Retesting** | After a theoretical fix, verify the specific defect is resolved by comparing both builds. |
| **Smoke Testing** | Run critical path flows (browse → add to cart → checkout) in the Stable Build to confirm core functionality. |
| **Bug Reporting** | Find defects in the QA Defect Build and write professional bug reports using the templates in `qa-docs/08_Bug_Reports/`. |

---

## Which Build Should I Use?

| Testing Activity | Recommended Build |
|---|---|
| Smoke testing | Stable Build |
| Regression testing | Both — stable as baseline, defect build to confirm bugs |
| Retesting (after fix) | Stable Build |
| Exploratory testing / bug hunting | QA Defect Build |
| Writing bug reports | QA Defect Build |
| Expected vs. actual comparison | Both side by side |
| Test case design practice | Either |

---

## QA Documentation

A complete manual QA documentation suite is included in `qa-docs/`, covering the full test lifecycle.

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

The bug reports in `08_Bug_Reports/` are written against the **QA Defect Build**. The Stable Build is referenced as the expected behavior baseline throughout the documentation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS + custom CSS |
| UI Components | Radix UI / shadcn/ui |
| State Management | React Context API |
| Persistence | localStorage |
| Deployment | Vercel |

---

## For Reviewers

For a structured walkthrough of this portfolio — what to look at, what to test, and how the documentation maps to the application — see:

📄 [`portfolio-readme/Portfolio_Submission_Guide.md`](portfolio-readme/Portfolio_Submission_Guide.md)

---

## Portfolio Context

This project demonstrates the following manual QA skills:

- Requirements analysis and SRS review
- User story and acceptance criteria writing
- Test plan creation
- Test scenario and test case design
- Defect identification and structured bug reporting
- Test execution and evidence logging
- Regression and retest workflows using a two-build setup
- Traceability from requirements through to test results

---

*Built as a QA portfolio project by a manual QA professional.*
