# QualiCore Tech — Test Execution Notes

## Execution Summary
- **Date:** 2026-03-28
- **Tester:** QA Tester
- **Environment:** Chrome 120, Windows 11, localhost:5173
- **Build:** QualiCore Tech v1.0

## Key Observations

### Search Module
- Basic search by product name works well
- Leading space handling is broken (BUG-005) — easy to reproduce
- Brand search excludes newer products (ID > 35) — affects catalog completeness

### Cart Module
- Core add/remove/update flows work correctly
- Subtotal calculation bug on product ID 7 is subtle but impactful
- Badge count lag is a minor UX issue but consistently reproducible

### Wishlist Module
- Add/remove works, but duplicates are allowed (no dedup check)
- Truncation on refresh is a data loss issue affecting power users

### Checkout Module
- Most validation works, but postcode and card length gaps exist
- Free shipping logic works correctly
- Order success flow completes as expected

### Product Data
- Several data inconsistencies found (brand, category, specs)
- Discount percentage calculation has edge case issues
- Image references are mostly intact

## Recommendations
1. Prioritize cart subtotal fix (BUG-003) — directly affects pricing
2. Address weak password validation (BUG-017) — security concern
3. Card number validation (BUG-012) — payment integrity
4. Other defects are lower severity and suitable for backlog
