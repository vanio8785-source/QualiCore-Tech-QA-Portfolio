# QualiCore Tech — Execution Evidence Index

## Purpose
This document serves as an index for test execution evidence. In a real QA workflow, each entry would link to screenshots, screen recordings, or log files.

## Evidence Format Guide
For portfolio purposes, evidence can include:
- Browser screenshots (captured via DevTools or Snipping Tool)
- Console log outputs (copied from Chrome DevTools)
- Screen recordings (using OBS or Loom)
- Network tab captures (for API-related checks)

## Evidence Index

| Evidence ID | Test Case | Bug ID | Type | Description |
|-------------|-----------|--------|------|-------------|
| EV-001 | TC-002 | BUG-015 | Screenshot | RAM spec mismatch on product ID 2 detail page |
| EV-002 | TC-003 | BUG-013 | Screenshot | False sale badge on low-stock non-discounted product |
| EV-003 | TC-005 | BUG-005 | Screenshot | Empty results when searching with leading spaces |
| EV-004 | TC-010 | BUG-007 | Screenshot | Reversed sort order in Components category |
| EV-005 | TC-012 | BUG-003 | Screenshot | Incorrect subtotal for product ID 7, qty 3 |
| EV-006 | TC-016 | BUG-011 | Screenshot | Wishlist before and after refresh showing truncation |
| EV-007 | TC-018 | BUG-009 | Screenshot | Checkout form submitted without postcode |
| EV-008 | TC-020 | BUG-001 | Screenshot | Brand mismatch between card and detail page for ID 15 |
| EV-009 | TC-021 | BUG-004 | Screen recording | Badge count not updating after item removal |
| EV-010 | — | BUG-017 | Screenshot | Registration form accepting 1-character password |

## Notes
- Evidence files should be stored in a `/evidence/` folder alongside this index
- File naming convention: `EV-XXX_TCXXX_description.png`
- For portfolio presentation, include 3-5 key screenshots demonstrating testing methodology
