# Test Execution Evidence Index
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Date:** March 2026

---

## Overview

This document indexes the evidence gathered during test execution. Evidence types include screenshots, screen recordings, and browser console logs. Each item is linked to the relevant test case or bug report.

In a live portfolio context, screenshots and recordings would be stored in an `/evidence/` subfolder within this directory and referenced below. Placeholder entries are included here as a template for real evidence attachment.

---

## Evidence Index

| Evidence ID | Type | Description | Linked Test Case | Linked Bug | Status |
|-------------|------|-------------|-----------------|------------|--------|
| EV-001 | Screenshot | Home page hero and featured products section | TC-001 | — | Placeholder |
| EV-002 | Screenshot | Product catalogue grid with 50+ products | TC-002 | — | Placeholder |
| EV-003 | Screenshot | Broken product image on Lenovo IdeaPad Flex 5 PDP | TC-004 | BUG-003 | Placeholder |
| EV-004 | Screenshot | MacBook Air PDP showing 'MacBoook' typo in H1 | TC-004 | BUG-006 | Placeholder |
| EV-005 | Screenshot | Dell Inspiron 15 specs table showing 4GB RAM | TC-006 | BUG-002 | Placeholder |
| EV-006 | Screenshot | Sidebar search 'corsair' result count vs brand filter result count | TC-008 | BUG-004 | Placeholder |
| EV-007 | Screenshot | Components category sorted descending under Price Low to High | TC-015 | BUG-005 | Placeholder |
| EV-008 | Screenshot | Cart subtotal showing one unit price when quantity is 2 (product ID 7) | TC-019 | BUG-001 | Placeholder |
| EV-009 | Screenshot | Cart quantity increased beyond stock level | TC-020 | BUG-007 | Placeholder |
| EV-010 | Screenshot | Wishlist showing 9 items during session | TC-026 | BUG-009 | Placeholder |
| EV-011 | Screenshot | Wishlist after refresh showing only 8 items | TC-026 | BUG-009 | Placeholder |
| EV-012 | Screenshot | Login form submitted with empty password — no password field error | TC-027 | BUG-010 | Placeholder |
| EV-013 | Screenshot | Registration accepted with 3-character password | TC-028 | BUG-011 | Placeholder |
| EV-014 | Screenshot | Checkout submitted successfully with 4-digit card number | TC-031 | BUG-013 | Placeholder |
| EV-015 | Screenshot | Checkout submitted without postcode — no error shown | TC-031 | BUG-008 | Placeholder |
| EV-016 | Screenshot | Mobile menu open — remains open after tapping outside | TC-033 | BUG-014 | Placeholder |
| EV-017 | Screenshot | Successful order confirmation page with order reference | TC-032 | — | Placeholder |
| EV-018 | Screenshot | Cart empty state after successful checkout | TC-032 | — | Placeholder |
| EV-019 | Screenshot | Free shipping applied at £50+ cart threshold | TC-022 | — | Placeholder |
| EV-020 | Screen Recording | End-to-end checkout flow from cart to order success | TC-030 to TC-032 | — | Placeholder |

---

## Evidence Storage

Evidence should be saved using the following naming convention:

`EV-XXX_[BugID-or-TCid]_[ShortDescription].[ext]`

Example:  
`EV-007_BUG-005_components-sort-descending.png`

Recommended tools for capturing evidence:
- **Screenshots:** Browser built-in (F12 > More tools > Screenshot) or Snipping Tool / macOS Screenshot
- **Screen recordings:** OBS Studio, Loom, or macOS Screen Recording
- **Annotating:** Annotate.app, Greenshot, or Skitch

---

## Notes

- All evidence placeholders are to be replaced with actual captured artefacts during live test execution.
- Evidence should be stored in a subfolder: `09_Test_Execution/evidence/`
- Sensitive data (e.g., real payment info) must never be captured in screenshots.
- Demo credentials used in all testing: `demo@qualicoretech.com` / `Demo1234`
