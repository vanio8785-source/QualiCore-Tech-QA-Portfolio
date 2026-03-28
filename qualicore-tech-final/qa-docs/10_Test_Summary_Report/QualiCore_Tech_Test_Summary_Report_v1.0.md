# Test Summary Report
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Report Date:** March 2026  
**Testing Period:** March 2026  
**Prepared By:** QA Portfolio  
**Application Version:** v1.0  
**Status:** Final

---

## 1. Executive Summary

Manual QA testing of the QualiCore Tech e-commerce application has been completed. A total of 35 test cases were executed covering all major functional areas of the application. 15 defects were identified and documented. The majority of critical user flows — browsing, cart management, authentication, and checkout — operate correctly. Identified defects range in severity from High (affecting financial accuracy and data consistency) to Low (cosmetic and minor UX issues).

The application is fit for use as a QA training and portfolio demonstration environment. It is not recommended for public production use in its current state due to the known intentional and incidentally-discovered defects.

---

## 2. Scope Summary

Testing was conducted against the following functional areas:

| Area | In Scope |
|------|----------|
| Home Page | ✅ |
| Product Catalogue | ✅ |
| Search | ✅ |
| Filtering (Category, Brand, Price, Rating, Stock) | ✅ |
| Sorting | ✅ |
| Product Detail Pages | ✅ |
| Shopping Cart | ✅ |
| Wishlist | ✅ |
| Authentication (Login / Register / Logout) | ✅ |
| Checkout and Order Confirmation | ✅ |
| Navigation and Responsive Behaviour | ✅ |
| Static Pages (About, Contact, Terms) | Partially (smoke tested) |

---

## 3. Test Execution Summary

| Metric | Value |
|--------|-------|
| Total Test Cases Planned | 35 |
| Total Test Cases Executed | 35 |
| Test Cases Passed | 22 |
| Test Cases Failed | 13 |
| Pass Rate | 62.9% |
| Total Defects Logged | 15 |
| Defects: Critical | 0 |
| Defects: High | 2 |
| Defects: Medium | 9 |
| Defects: Low | 4 |
| Exploratory Defects Found | 2 (BUG-012, BUG-015) |

---

## 4. Pass / Fail Results by Area

| Area | Tests Executed | Passed | Failed | Pass Rate |
|------|---------------|--------|--------|-----------|
| Home Page | 1 | 1 | 0 | 100% |
| Product Catalogue | 2 | 2 | 0 | 100% |
| Search | 2 | 1 | 1 | 50% |
| Filtering | 6 | 6 | 0 | 100% |
| Sorting | 2 | 1 | 1 | 50% |
| Product Detail | 3 | 1 | 2 | 33% |
| Cart | 7 | 5 | 2 | 71% |
| Wishlist | 3 | 2 | 1 | 67% |
| Authentication | 3 | 1 | 2 | 33% |
| Checkout | 3 | 1 | 2 | 33% |
| Navigation / Responsive | 3 | 2 | 1 | 67% |
| **Total** | **35** | **22** | **13** | **62.9%** |

---

## 5. Defect Summary

| Bug ID | Title | Area | Severity | Priority | Status |
|--------|-------|------|----------|---------|--------|
| BUG-001 | Cart subtotal wrong for product ID 7 at qty > 1 | Cart | High | High | Open |
| BUG-002 | Incorrect RAM spec on product ID 2 PDP | Product Detail | Medium | High | Open |
| BUG-003 | Broken primary image on product ID 3 PDP | Product Detail | Medium | Medium | Open |
| BUG-004 | Corsair sidebar search returns fewer results than brand filter | Search | Medium | High | Open |
| BUG-005 | Price Low to High sorts Components descending | Sorting | High | High | Open |
| BUG-006 | Typo in MacBook Air H1 page title | Product Detail | Low | Low | Open |
| BUG-007 | Cart quantity has no stock cap | Cart | Medium | High | Open |
| BUG-008 | Postcode not validated on checkout | Checkout | Medium | Medium | Open |
| BUG-009 | Wishlist silently truncated to 8 items on refresh | Wishlist | Low | Medium | Open |
| BUG-010 | Login does not validate password as required | Authentication | Medium | High | Open |
| BUG-011 | Registration accepts passwords below stated minimum length | Authentication | Medium | Medium | Open |
| BUG-012 | Cart badge can briefly desync after item removal | Cart | Low | Medium | Open |
| BUG-013 | Checkout accepts 4-digit card numbers | Checkout | Medium | Medium | Open |
| BUG-014 | Mobile menu does not close on tap outside | Navigation | Low | Low | Open |
| BUG-015 | Product count shows stale loading state on back navigation | Catalogue | Low | Low | Open |

---

## 6. Defect Severity Distribution

| Severity | Count | Percentage |
|----------|-------|------------|
| Critical | 0 | 0% |
| High | 2 | 13% |
| Medium | 9 | 60% |
| Low | 4 | 27% |
| **Total** | **15** | **100%** |

---

## 7. Quality Assessment

### Strengths
- All core user flows (browsing, search, filtering, add to cart, checkout) are functional end-to-end.
- Responsive design works well on both desktop and mobile viewports.
- Filtering and sorting operate correctly across most combinations.
- localStorage persistence for cart, wishlist, and auth state is reliable.
- Form validation provides clear error messages for most required fields.
- Error handling is present in edge cases (empty cart, invalid routes, broken images).

### Weaknesses
- Financial accuracy defect (BUG-001) affects cart subtotal for a specific product — high risk in production.
- Data consistency issues (BUG-002, BUG-006) reduce product information trustworthiness.
- Validation gaps in authentication and checkout (BUG-008, BUG-010, BUG-011, BUG-013) represent incomplete form hardening.
- Sorting logic defect (BUG-005) affects a full product category, impacting discoverability.
- Wishlist persistence edge case (BUG-009) silently loses user data without feedback.

---

## 8. Release Recommendation

**Recommendation: NOT RECOMMENDED for production release without defect resolution.**

The following defects should be resolved before any production deployment consideration:

**Must Fix (blocking):**
- BUG-001 — Cart subtotal calculation error (financial data integrity)
- BUG-005 — Sorting defect for Components category

**Should Fix (high priority):**
- BUG-004 — Corsair search returning incomplete results
- BUG-007 — Cart quantity exceeding stock
- BUG-010 — Login password field not validated as required

**Nice to Fix (improvement):**
- BUG-002, BUG-003, BUG-006 — Product data and presentation issues
- BUG-008, BUG-011, BUG-013 — Checkout and registration validation gaps
- BUG-009 — Wishlist truncation on refresh
- BUG-012, BUG-014, BUG-015 — Minor UX polish items

---

## 9. Conclusion

The QualiCore Tech application successfully demonstrates a functional, visually professional e-commerce environment suitable for manual QA training and portfolio purposes. The intentional defect set provides realistic, varied, and reportable bugs across a range of functional areas — covering data consistency, financial calculation, form validation, sorting logic, and UI/UX behaviour.

This test cycle produced 15 documented defects with full reproduction steps, severity/priority ratings, and professional write-ups. The test artefacts (test plan, scenarios, cases, execution log, and this report) form a complete QA documentation portfolio that demonstrates practical manual testing skills to potential employers.
