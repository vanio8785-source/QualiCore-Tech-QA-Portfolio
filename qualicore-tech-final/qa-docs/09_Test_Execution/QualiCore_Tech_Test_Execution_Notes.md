# Test Execution Notes
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Execution Period:** March 2026  
**Tester:** QA Portfolio  
**Build:** v1.0 (local dev / `npm run dev`)  
**Browser:** Google Chrome (latest stable)  
**Viewport (Desktop):** 1440 × 900  
**Viewport (Mobile):** 375 × 812 (Chrome DevTools device simulation)

---

## Session Overview

This document captures observations, decisions, and notes made during test execution. It supplements the formal Test Execution Log and provides context for results that require additional explanation.

---

## Pre-Execution Setup

1. Cloned repository and ran `npm install` — completed without errors.
2. Started dev server with `npm run dev` — application loaded at `http://localhost:5173`.
3. Cleared browser localStorage before session to ensure a clean state.
4. Verified all routes are accessible and no console errors present on initial load.
5. Confirmed demo credentials work: `demo@qualicoretech.com` / `Demo1234`.

---

## Execution Session Notes

### Home Page (TC-001)
Executed without issue. Hero section loads cleanly. Featured product sections render correctly. CTA button routes to `/products` as expected.

### Product Catalogue (TC-002, TC-003)
All products loaded. Grid layout is responsive and consistent. Product count displays correctly. Cards show all expected fields.

### Product Detail Pages (TC-004, TC-005, TC-006)
**Note (BUG-003):** Product ID 3 (Lenovo IdeaPad Flex 5) displays a broken image on load. The placeholder fallback renders correctly, but the primary image is unavailable. This was noted and raised as a defect.  
**Note (BUG-006):** Product ID 6 (Apple MacBook Air 13 M2) has a visible typo in the H1 title on the PDP — "MacBoook". The listing card and URL are correct.  
**Note (BUG-002):** Product ID 2 specs table shows RAM as "4GB DDR4" which does not align with the product description. Raised as a data consistency defect.

### Search (TC-007, TC-008)
Header search routes and filters correctly. Sidebar search works for most terms.  
**Note (BUG-004):** Searched "corsair" in the sidebar and received 6 results. Applied the Corsair brand filter separately and received 9 results. The discrepancy is specific to this brand. Raised as a defect.

### Filtering (TC-009 – TC-014)
All filter controls operate correctly. Category, brand, price, rating, and in-stock filters all produce the expected results. Clear button resets cleanly.

### Sorting (TC-015, TC-016)
Best Rated sort orders correctly. Price High to Low, Name A-Z, Name Z-A all work as expected.  
**Note (BUG-005):** When "Price: Low to High" is selected with the Components category active, the sort order is reversed — most expensive shown first. All other categories sort correctly under this option. Raised as a functional defect.

### Cart (TC-017 – TC-023)
Add to cart from listing and PDP both work. Free shipping threshold applies correctly. Cart persists across refresh.  
**Note (BUG-001):** Added product ID 7 (identified as a keyboard SKU in this test run) with quantity 2. Expected subtotal: ~£80. Displayed subtotal was ~£40 — equivalent to 1 unit. The cart correctly showed quantity 2 but calculated the price of 1.  
**Note (BUG-007):** Cart quantity "+" button has no stock cap. Tested with a product showing "Stock: 3" — was able to increase cart quantity to 10 without any restriction.

### Wishlist (TC-024 – TC-026)
Add and remove work correctly during session. Wishlist badge updates.  
**Note (BUG-009):** Successfully added 9 items to the wishlist during the session. After page refresh, only 8 were present. The 9th was silently dropped. No error or notification was shown.

### Authentication (TC-027 – TC-029)
Login and registration generally work.  
**Note (BUG-010):** Login with valid email + empty password submits to auth check rather than showing a password field validation error. This is a UX issue.  
**Note (BUG-011):** Registration accepted a 3-character password ("abc"). The placeholder text says "Min. 8 characters" but this is not enforced.

### Checkout (TC-030 – TC-032)
Checkout flow end-to-end works. Order success page renders correctly. Cart is cleared after order.  
**Note (BUG-008):** Postcode field appears required (asterisk visible) but submitting without a postcode raises no error.  
**Note (BUG-013):** Card number "1234" accepted — checkout completed successfully with a 4-digit card number.

### Mobile Navigation (TC-033)
Hamburger menu opens and closes. Navigation links work on mobile viewport. Menu closes correctly when a link is tapped.  
**Note (BUG-014):** Menu does not close when tapping outside the nav. Standard UX expectation not met.

### Navigation Links and Breadcrumbs (TC-034, TC-035)
All header navigation links route correctly. Breadcrumbs are accurate and all segments are clickable.

---

## Exploratory Testing Notes

Additional unscripted testing was carried out after formal test case execution.

- **Empty cart checkout redirect:** Navigating directly to `/checkout` with an empty cart shows a clean empty state message rather than a broken form. Handled gracefully.
- **Invalid product slug:** Navigating to `/products/not-a-real-product` shows the "Product Not Found" state correctly.
- **Wishlist from product card:** Tested adding to wishlist from catalogue cards — wishlist button on cards responds correctly.
- **Concurrent filter + search:** Combining sidebar search with active filters (category + brand) works correctly — all filters stack.
- **Order success without checkout:** Navigating to `/order-success` directly (without completing a checkout) renders the page but without an order reference, as no order data is in localStorage. No crash — a minor edge case.
- **Registration then logout:** Registering a new account, logging out, and then trying to log back in with the registered email fails (as expected — registration is session-only, not persisted as a valid credential).

---

## Defect Discovery Summary

| Bug ID | Discovery Method | Severity |
|--------|-----------------|---------|
| BUG-001 | Planned test (TC-019) | High |
| BUG-002 | Planned test (TC-006) | Medium |
| BUG-003 | Planned test (TC-004) | Medium |
| BUG-004 | Planned test (TC-008) | Medium |
| BUG-005 | Planned test (TC-015) | High |
| BUG-006 | Planned test (TC-004) | Low |
| BUG-007 | Planned test (TC-020) | Medium |
| BUG-008 | Planned test (TC-031) | Medium |
| BUG-009 | Planned test (TC-026) | Low |
| BUG-010 | Planned test (TC-027) | Medium |
| BUG-011 | Planned test (TC-028) | Medium |
| BUG-012 | Exploratory | Low |
| BUG-013 | Planned test (TC-031) | Medium |
| BUG-014 | Planned test (TC-033) | Low |
| BUG-015 | Exploratory | Low |
