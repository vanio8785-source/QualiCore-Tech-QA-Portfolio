# QA Test Plan
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Date:** March 2026  
**Prepared by:** QA Portfolio Project  
**Status:** Approved

---

## 1. Scope

This test plan covers manual functional testing of the QualiCore Tech e-commerce web application. The application is a client-side React SPA with no backend. Testing will focus on verifying that all core user-facing features behave correctly, identifying defects, and assessing overall application quality.

---

## 2. Objectives

- Validate all functional requirements as defined in the SRS
- Identify and document reproducible defects
- Assess alignment between expected and actual application behaviour
- Produce a test execution record and summary report suitable for portfolio presentation
- Practice real-world QA documentation workflows

---

## 3. In-Scope Features

- Home page display and featured product sections
- Product catalogue: listing, search, filtering, and sorting
- Product detail pages: data display, gallery, specs, stock, cart and wishlist actions
- Shopping cart: add, remove, update quantity, totals calculation, shipping, persistence
- Wishlist: add, remove, view, badge count
- User authentication: login, registration, session display, logout
- Checkout: form input, field validation, order submission, confirmation
- Navigation: header links, mobile menu, breadcrumbs, 404 handling
- Responsive design: desktop, tablet, and mobile viewports

---

## 4. Out of Scope

- Backend or API testing (no backend exists)
- Real payment processing
- Performance/load testing
- Automated testing (Playwright/Vitest test execution)
- Cross-browser compatibility beyond the primary test browser
- Accessibility compliance auditing

---

## 5. Test Types

| Test Type | Description |
|-----------|-------------|
| Functional Testing | Verify each feature works as per requirements |
| Exploratory Testing | Unscripted investigation to discover unexpected issues |
| Regression Testing | Confirm that known bugs do not spread to other areas |
| Negative Testing | Test invalid inputs and boundary edge cases |
| UI/Layout Testing | Verify visual presentation and responsive behaviour |

---

## 6. Test Environment

| Parameter | Value |
|-----------|-------|
| Application | QualiCore Tech v1.0 |
| Deployment | Local dev server via `npm run dev` |
| Runtime | Node.js 18+ / Vite |
| Primary Browser | Google Chrome (latest stable) |
| Secondary Browser | Mozilla Firefox (latest stable) |
| Desktop Resolution | 1440 x 900 |
| Mobile Viewport | 375 x 812 (iPhone SE simulation via DevTools) |
| Operating System | Windows 10 / macOS Sonoma |
| Demo Credentials | demo@qualicoretech.com / Demo1234 |

---

## 7. Entry Criteria

- Application successfully builds and runs locally (`npm run dev` without errors)
- All pages are accessible via their defined routes
- Product data loads correctly from the local JSON file
- Test cases and test scenarios have been reviewed and approved

---

## 8. Exit Criteria

- All planned test cases have been executed (pass or fail)
- All identified defects have been logged in the bug report document
- A test summary report has been produced
- No Critical (P1) severity defects are outstanding that would block QA sign-off

---

## 9. Defect Management

| Severity | Definition | Examples |
|----------|------------|---------|
| Critical | Core functionality broken; prevents primary user flow | Cannot add to cart; checkout crashes |
| High | Significant functional defect; workaround possible | Incorrect totals; filter returns wrong results |
| Medium | Partial feature failure; minor impact on experience | Wrong spec shown; image broken on specific product |
| Low | Minor UI or cosmetic issue; no functional impact | Typo in page title; misaligned element |

All defects will be documented in the Bug Reports document with full reproduction steps, environment details, severity, priority, and status.

---

## 10. Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Intentional bugs may overlap with genuine bugs | Medium | Medium | Cross-reference with known defect list |
| localStorage may not persist across browsers | Low | Low | Test in a single primary browser per session |
| Demo credentials may be case-sensitive | Low | Low | Use exact credentials as documented |
| Mobile simulation may differ from real device | Medium | Low | Note when testing on DevTools simulation |

---

## 11. Assumptions

- All intentional defects are deliberate and represent realistic, reportable QA findings
- The application is tested in an isolated browser session to avoid stale localStorage data
- Test data (product SKUs, prices, names) reflects the seeded JSON data and is not expected to change
- Screenshots and screen recordings serve as evidence where referenced in the execution log

---

## 12. Test Schedule (Indicative)

| Phase | Activity | Estimated Effort |
|-------|----------|-----------------|
| 1 | Review SRS, user stories, and acceptance criteria | 2 hours |
| 2 | Execute planned test cases | 6 hours |
| 3 | Exploratory testing session | 2 hours |
| 4 | Document defects and update execution log | 2 hours |
| 5 | Write test summary report | 1 hour |
| **Total** | | **~13 hours** |
