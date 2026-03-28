# Requirements Traceability Matrix (RTM)
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Date:** March 2026

---

## Overview

This matrix traces functional requirements through user stories, acceptance criteria, test scenarios, and test cases to ensure complete coverage. Defect linkage is noted where applicable.

---

## Traceability Table

| Req ID | Requirement Summary | User Story | Acceptance Criteria | Test Scenario | Test Case | Defect Coverage |
|--------|---------------------|------------|---------------------|---------------|-----------|-----------------|
| FR-01 | Home Page display | US-001 | AC-001 | TS-001 | TC-001 | — |
| FR-02 | Product Catalogue | US-002 | AC-002 | TS-002, TS-003 | TC-002, TC-003 | — |
| FR-02 | Category Filtering | US-013 | AC-006 | TS-008 | TC-009 | — |
| FR-02 | Brand Filtering | US-014 | AC-007 | TS-009 | TC-010 | — |
| FR-02 | Price Range Filter | US-015 | AC-008 | TS-010 | TC-011 | — |
| FR-02 | Rating Filter | US-016 | AC-009 | TS-011 | TC-012 | — |
| FR-02 | In-Stock Filter | US-017 | AC-010 | TS-012 | TC-013 | — |
| FR-02 | Clear Filters | US-018 | AC-011 | TS-013 | TC-014 | — |
| FR-02 | Sort Price Low-High | US-019 | AC-012 | TS-014 | TC-015 | BUG-005 |
| FR-02 | Sort Best Rated | US-022 | AC-013 | TS-015 | TC-016 | — |
| FR-03 | Header Search | US-009 | AC-004 | TS-006 | TC-007 | — |
| FR-03 | Sidebar Search | US-010, US-011, US-012 | AC-005 | TS-007 | TC-008 | BUG-004 |
| FR-04 | Product Detail Page | US-003 | AC-003 | TS-004 | TC-004, TC-005 | BUG-002, BUG-003, BUG-006 |
| FR-04 | Product Specs | US-005 | AC-003 | TS-005 | TC-006 | BUG-002 |
| FR-05 | Add to Cart (listing) | US-024 | AC-014 | TS-016 | TC-017 | — |
| FR-05 | Add to Cart (PDP) | US-025 | AC-015 | TS-017 | TC-018 | — |
| FR-05 | View Cart | US-026, US-029 | AC-016 | TS-018 | TC-019 | BUG-001 |
| FR-05 | Cart Quantity | US-027 | AC-017 | TS-019 | TC-020 | BUG-007, BUG-012 |
| FR-05 | Remove from Cart | US-028 | AC-017 | TS-020 | TC-021 | — |
| FR-05 | Free Shipping | US-030 | AC-018 | TS-021 | TC-022 | — |
| FR-05 | Cart Persistence | US-031 | AC-019 | TS-022 | TC-023 | — |
| FR-06 | Add to Wishlist | US-032 | AC-020 | TS-023 | TC-024 | BUG-009 |
| FR-06 | Remove from Wishlist | US-033 | AC-020 | TS-024 | TC-025 | — |
| FR-06 | View Wishlist | US-034, US-035 | AC-020 | TS-025 | TC-026 | — |
| FR-07 | Login | US-036, US-037 | AC-021 | TS-026 | TC-027 | BUG-010 |
| FR-07 | Registration | US-038 | AC-022 | TS-027 | TC-028 | BUG-011 |
| FR-07 | Authenticated State | US-039, US-040 | AC-021 | TS-028 | TC-029 | — |
| FR-08 | Checkout Form | US-041, US-042, US-043 | AC-023 | TS-029 | TC-030 | BUG-008, BUG-013 |
| FR-08 | Checkout Validation | US-044 | AC-023 | TS-030 | TC-031 | BUG-013 |
| FR-08 | Order Confirmation | US-046 | AC-024 | TS-031 | TC-032 | — |
| FR-10 | Mobile Navigation | US-047, US-048 | AC-025 | TS-032 | TC-033 | BUG-014, BUG-015 |
| FR-10 | Header Navigation | US-049 | — | TS-033 | TC-034 | — |
| FR-04 | Breadcrumb | US-050 | — | TS-034 | TC-035 | — |

---

## Coverage Summary

| Area | Requirements | User Stories | Test Scenarios | Test Cases | Defects Linked |
|------|-------------|--------------|----------------|------------|----------------|
| Home | 1 | 1 | 1 | 1 | 0 |
| Catalogue / Filters | 8 | 8 | 10 | 10 | 1 |
| Search | 2 | 4 | 2 | 2 | 1 |
| Product Details | 2 | 6 | 2 | 3 | 3 |
| Cart | 6 | 8 | 7 | 7 | 3 |
| Wishlist | 3 | 4 | 3 | 3 | 1 |
| Authentication | 3 | 5 | 3 | 3 | 2 |
| Checkout | 3 | 6 | 3 | 3 | 2 |
| Navigation / Responsive | 2 | 4 | 3 | 3 | 2 |
| **Total** | **30** | **46** | **34** | **35** | **15** |
