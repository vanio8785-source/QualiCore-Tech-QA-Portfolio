# Test Cases
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Date:** March 2026

---

## TC-001 — Home Page Loads Correctly

**Scenario:** TS-001  
**Priority:** Medium  
**Related Requirement:** FR-01 / US-001 / AC-001  
**Preconditions:** Application is running. Browser has no cached state.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the root URL `/` | Page loads without console errors |
| 2 | Observe the hero section | A headline and call-to-action button are visible |
| 3 | Click the CTA button | User is navigated to `/products` |
| 4 | Return to home; scroll down | At least one featured product section is visible |
| 5 | Click a featured product card | User is navigated to the correct product detail page |

---

## TC-002 — Product Catalogue Loads All Products

**Scenario:** TS-002  
**Priority:** High  
**Related Requirement:** FR-02 / US-002 / AC-002  
**Preconditions:** Application running. No active filters.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to `/products` | Page loads without errors |
| 2 | Observe the product grid | Products are displayed in a multi-column grid |
| 3 | Note the product count display | Count matches total number of products in the catalogue |
| 4 | Scroll through all products | No empty cards or broken layouts visible |

---

## TC-003 — Product Card Displays Correct Information

**Scenario:** TS-003  
**Priority:** High  
**Related Requirement:** FR-02 / US-002  
**Preconditions:** At least one product visible on catalogue page.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to `/products` | Products load |
| 2 | Inspect a product card | Product name is visible |
| 3 | Inspect the same card | Product image is displayed (or placeholder if broken) |
| 4 | Inspect the same card | Price is shown in £ format |
| 5 | Inspect the same card | Star rating is displayed |
| 6 | Click the product card | User navigates to the product detail page |

---

## TC-004 — Product Detail Page Shows All Required Fields

**Scenario:** TS-004  
**Priority:** High  
**Related Requirement:** FR-04 / US-003 / AC-003  
**Preconditions:** A product with an old price and discount exists in the catalogue.  
**Test Data:** Navigate to any discounted product (e.g., a laptop with `oldPrice` set)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click on a discounted product from the catalogue | Product detail page loads |
| 2 | Observe the product name and brand | Both are displayed prominently |
| 3 | Observe the price area | Current price, old price (strikethrough), and discount badge visible |
| 4 | Observe the rating section | Stars, numeric rating, and review count shown |
| 5 | Observe the SKU | SKU code is displayed |
| 6 | Observe the stock indicator | "In Stock" or "Out of Stock" label is present |
| 7 | Observe the product description | Full description text is shown |
| 8 | Scroll to the specifications section | Specifications table is populated with key-value pairs |

---

## TC-005 — Out-of-Stock Product Cannot Be Added to Cart

**Scenario:** TS-036  
**Priority:** High  
**Related Requirement:** FR-04, FR-05 / US-007 / AC-003  
**Preconditions:** At least one product with `stock: 0` exists.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Find a product marked as out of stock in the catalogue | Product card is visible |
| 2 | Attempt to click "Add to Cart" on the card | Button is disabled or absent; nothing is added to cart |
| 3 | Navigate to the product's detail page | Page loads |
| 4 | Observe the Add to Cart button | Button shows "Out of Stock" and is disabled |
| 5 | Observe the quantity selector | Increase button is disabled |
| 6 | Observe the stock indicator | "Out of Stock" is clearly indicated |

---

## TC-006 — Product Specs Consistency Check

**Scenario:** TS-005  
**Priority:** High  
**Related Requirement:** FR-04 / US-005 / AC-003  
**Preconditions:** Access to product detail pages.  
**Test Data:** Product ID 2 (a laptop with a RAM spec override)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the detail page of the target laptop | Page loads |
| 2 | Read the short description and product name for RAM details | Note any RAM mention |
| 3 | Scroll to the Specifications table | Table is visible |
| 4 | Locate the RAM specification row | RAM value is displayed |
| 5 | Compare RAM value in specs to product name/description | Values should be consistent — **note if discrepancy found** |

---

## TC-007 — Header Search Returns Correct Results

**Scenario:** TS-006  
**Priority:** High  
**Related Requirement:** FR-03 / US-009 / AC-004  
**Preconditions:** User is on the home page.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Locate the search bar in the header | Search bar is visible |
| 2 | Type "gaming" into the search bar | Input updates as typed |
| 3 | Press Enter or click the search button | User is navigated to `/products?search=gaming` |
| 4 | Observe the product results | Only products matching "gaming" by name/brand/category/description are shown |
| 5 | Note the result count | Count reflects the filtered results |
| 6 | Clear the search and search for a non-existent term e.g. "zzzzzz" | Empty state message is displayed |

---

## TC-008 — Sidebar Search Filters Products

**Scenario:** TS-007  
**Priority:** High  
**Related Requirement:** FR-03 / US-010, US-011, US-012 / AC-005  
**Preconditions:** User is on `/products`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to `/products` | All products visible |
| 2 | Type "corsair" into the sidebar search field | Results update |
| 3 | Observe the result count | Count reflects filtered results |
| 4 | Compare the count with brand filter set to "Corsair" | **Note if sidebar search and brand filter return different counts for Corsair** |
| 5 | Clear the search | All products return |

---

## TC-009 — Category Filter Works Correctly

**Scenario:** TS-008  
**Priority:** High  
**Related Requirement:** FR-02 / US-013 / AC-006  
**Preconditions:** User is on `/products`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select "Laptops" from the category filter | Only laptop products are shown |
| 2 | Note the result count | Matches the known number of laptop products |
| 3 | Select "Monitors" | Only monitor products are shown |
| 4 | Select "All Categories" | All products are shown again |

---

## TC-010 — Brand Filter Works Correctly

**Scenario:** TS-009  
**Priority:** Medium  
**Related Requirement:** FR-02 / US-014 / AC-007  
**Preconditions:** User is on `/products`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select a brand (e.g. "Samsung") from the brand dropdown | Only Samsung products shown |
| 2 | Note the count | Count matches expected Samsung product count |
| 3 | Select "All Brands" | Full product list restored |

---

## TC-011 — Price Range Filter

**Scenario:** TS-010  
**Priority:** High  
**Related Requirement:** FR-02 / US-015 / AC-008  
**Preconditions:** User is on `/products`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Set the max price slider to £500 | Label updates to show £500 |
| 2 | Observe the product grid | No products priced above £500 are shown |
| 3 | Reduce to £100 | Only products at or below £100 remain |
| 4 | Set back to £2000 | All products visible again |

---

## TC-012 — Rating Filter

**Scenario:** TS-011  
**Priority:** Medium  
**Related Requirement:** FR-02 / US-016 / AC-009  
**Preconditions:** User is on `/products`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select "4★ & up" | Only products rated 4.0 or higher shown |
| 2 | Select "3★ & up" | More products appear (includes 3.x ratings) |
| 3 | Select "Any Rating" | All products restored |

---

## TC-013 — In-Stock Filter

**Scenario:** TS-012  
**Priority:** Medium  
**Related Requirement:** FR-02 / US-017 / AC-010  
**Preconditions:** At least one product is out of stock.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enable "In Stock Only" checkbox | Out-of-stock products are removed from results |
| 2 | Compare count before and after | Count decreases by the number of out-of-stock products |
| 3 | Disable the checkbox | All products return |

---

## TC-014 — Clear Filters

**Scenario:** TS-013  
**Priority:** Medium  
**Related Requirement:** FR-02 / US-018 / AC-011  
**Preconditions:** At least two filters applied.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Apply category "Laptops" and brand filter | Filtered results shown |
| 2 | Note the active filter count shown on the Clear button | Count reflects active filters |
| 3 | Click the Clear button | All filters reset; full product list shown; Clear button disappears |

---

## TC-015 — Sort: Price Low to High

**Scenario:** TS-014  
**Priority:** High  
**Related Requirement:** FR-02 / US-019 / AC-012  
**Preconditions:** User is on `/products` with no filters active.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select "Price: Low to High" from the sort dropdown | Products reorder |
| 2 | Check the first few products in the grid | Lowest priced products should appear first |
| 3 | Select the "Components" category filter | Filter to components only |
| 4 | Observe the sort order of components | **Note if components are sorted descending instead of ascending** |

---

## TC-016 — Sort: Best Rated

**Scenario:** TS-015  
**Priority:** Medium  
**Related Requirement:** FR-02 / US-022 / AC-013  
**Preconditions:** User is on `/products`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select "Best Rated" from the sort dropdown | Products reorder |
| 2 | Check the first product's rating | Should be the highest-rated product |
| 3 | Check the last visible product's rating | Should be lower-rated than those above |

---

## TC-017 — Add to Cart from Product Listing

**Scenario:** TS-016  
**Priority:** High  
**Related Requirement:** FR-05 / US-024 / AC-014  
**Preconditions:** Cart is empty.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to `/products` | Products visible |
| 2 | Click "Add to Cart" on an in-stock product | Toast notification appears confirming addition |
| 3 | Observe the cart badge in the header | Badge shows "1" |
| 4 | Add the same product again | Badge shows "2" |
| 5 | Navigate to `/cart` | Cart page shows the item with quantity 2 |

---

## TC-018 — Add to Cart from PDP with Custom Quantity

**Scenario:** TS-017  
**Priority:** High  
**Related Requirement:** FR-05 / US-025 / AC-015  
**Preconditions:** Cart is empty.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to an in-stock product's detail page | Page loads |
| 2 | Click the "+" quantity button 2 times | Quantity shows 3 |
| 3 | Click "Add to Cart" | Toast confirms addition |
| 4 | Navigate to `/cart` | Item appears with quantity 3 |
| 5 | Verify the line subtotal | Equals unit price × 3 |

---

## TC-019 — Cart Page Totals Calculation

**Scenario:** TS-018  
**Priority:** High  
**Related Requirement:** FR-05 / US-026, US-029 / AC-016  
**Preconditions:** At least one item in the cart.  
**Test Data:** Add product ID 7 (any identifiable product) with quantity > 1

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Add a product with quantity 2 and navigate to `/cart` | Cart shows item |
| 2 | Note the unit price and quantity | Record values |
| 3 | Calculate expected line subtotal manually | unit price × 2 |
| 4 | Compare to displayed line subtotal | Values should match — **note if discrepancy** |
| 5 | Observe overall subtotal vs sum of all line subtotals | Should match |
| 6 | Verify total = subtotal + shipping | Should be correct |

---

## TC-020 — Cart Quantity Controls

**Scenario:** TS-019  
**Priority:** High  
**Related Requirement:** FR-05 / US-027 / AC-017  
**Preconditions:** One item in the cart with quantity 1.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "+" on the cart item | Quantity increases to 2 |
| 2 | Observe the line subtotal | Updates to unit price × 2 |
| 3 | Observe the cart total | Updates accordingly |
| 4 | Continue clicking "+" beyond the product's stock level | **Note if quantity can exceed available stock** |
| 5 | Click "−" until quantity reaches 1 | Quantity shows 1 |
| 6 | Click "−" once more | Item is removed from cart |

---

## TC-021 — Remove Item from Cart

**Scenario:** TS-020  
**Priority:** High  
**Related Requirement:** FR-05 / US-028 / AC-017  
**Preconditions:** Two different items in the cart.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to `/cart` | Both items visible |
| 2 | Click the remove (✕) button on the first item | Item disappears from cart |
| 3 | Observe the cart totals | Recalculate to reflect only the remaining item |
| 4 | Toast notification appears | Confirms removal |

---

## TC-022 — Free Shipping Threshold

**Scenario:** TS-021  
**Priority:** Medium  
**Related Requirement:** FR-05 / US-030 / AC-018  
**Preconditions:** Cart is empty.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Add products totalling less than £50 to cart | Cart subtotal < £50 |
| 2 | Navigate to `/cart` | Shipping shows £5.99 |
| 3 | Note the helper text about free shipping threshold | Text shows remaining amount needed |
| 4 | Add items to bring subtotal to £50 or above | Shipping shows "FREE" |
| 5 | Confirm total = subtotal | No shipping added |

---

## TC-023 — Cart Persistence After Refresh

**Scenario:** TS-022  
**Priority:** High  
**Related Requirement:** FR-05 / US-031 / AC-019  
**Preconditions:** Cart contains items.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Add 2 different products to cart | Cart badge shows correct count |
| 2 | Refresh the browser (F5) | Page reloads |
| 3 | Observe the cart badge | Count is preserved |
| 4 | Navigate to `/cart` | Both items and quantities are intact |

---

## TC-024 — Add to Wishlist

**Scenario:** TS-023  
**Priority:** Medium  
**Related Requirement:** FR-06 / US-032 / AC-020  
**Preconditions:** Wishlist is empty.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to a product detail page | Page loads |
| 2 | Click the wishlist (♡) button | Button changes to ♥ (filled); toast confirms |
| 3 | Observe the wishlist badge in the header | Badge appears showing 1 |
| 4 | Navigate to `/wishlist` | The product appears on the wishlist page |

---

## TC-025 — Remove from Wishlist

**Scenario:** TS-024  
**Priority:** Medium  
**Related Requirement:** FR-06 / US-033 / AC-020  
**Preconditions:** At least one item in the wishlist.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to `/wishlist` | Wishlist items displayed |
| 2 | Click remove on one item | Item removed from wishlist |
| 3 | Observe the wishlist badge | Count decrements |
| 4 | Navigate back to the product's detail page | Wishlist button shows ♡ (unfilled) |

---

## TC-026 — Wishlist Persistence Limit

**Scenario:** TS-025  
**Priority:** Low  
**Related Requirement:** FR-06 / US-034 / AC-020  
**Preconditions:** Wishlist is empty.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Add 8 products to the wishlist | Wishlist badge shows 8 |
| 2 | Add a 9th product | Badge shows 9 |
| 3 | Refresh the page | **Note if 9th item disappears after refresh** |

---

## TC-027 — Login Validation and Success

**Scenario:** TS-026  
**Priority:** High  
**Related Requirement:** FR-07 / US-036, US-037 / AC-021  
**Preconditions:** User is logged out. Navigate to `/login`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Submit the login form with both fields empty | Email error shown; **note if password error is absent** |
| 2 | Enter a valid email but leave password blank | Note validation behaviour |
| 3 | Enter email: demo@qualicoretech.com and password: wrongpass | General error message displayed |
| 4 | Enter email: demo@qualicoretech.com and password: Demo1234 | User logged in; redirected to home |
| 5 | Observe the header | User's name visible; Sign In button replaced |

---

## TC-028 — Registration Validation

**Scenario:** TS-027  
**Priority:** High  
**Related Requirement:** FR-07 / US-038 / AC-022  
**Preconditions:** User is on `/register`.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Submit the form with all fields empty | Validation errors shown for required fields |
| 2 | Fill first name, last name, email only; submit | Password error shown |
| 3 | Enter password "abc123" and confirm password "abc456" | "Passwords do not match" error shown |
| 4 | Fill all fields correctly with matching passwords | Account created; user redirected to home |
| 5 | Observe the header | User's first name visible |

---

## TC-029 — Logout

**Scenario:** TS-028  
**Priority:** High  
**Related Requirement:** FR-07 / US-040 / AC-021  
**Preconditions:** User is logged in.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click the user avatar in the header | Dropdown opens showing name and email |
| 2 | Click "Sign Out" | User is logged out |
| 3 | Observe the header | Sign In button replaces the avatar |
| 4 | Refresh the page | User remains logged out |

---

## TC-030 — Checkout Page Layout and Summary

**Scenario:** TS-029  
**Priority:** High  
**Related Requirement:** FR-08 / US-041, US-045 / AC-023  
**Preconditions:** At least one item in the cart.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to `/cart` and click "Proceed to Checkout" | Checkout page loads |
| 2 | Observe the order summary panel | All cart items, quantities, and prices shown |
| 3 | Observe the subtotal, shipping, and total in summary | Values match those on the cart page |
| 4 | Observe the form sections | Customer Details, Delivery Address, and Payment Details sections all present |

---

## TC-031 — Checkout Form Validation

**Scenario:** TS-030  
**Priority:** High  
**Related Requirement:** FR-08 / US-044 / AC-023  
**Preconditions:** At least one item in cart. User is on checkout page.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Place Order" without filling any fields | Validation errors appear |
| 2 | Observe which fields show errors | First Name, Last Name, Email, Address, City, Card Holder, Card Number, Expiry, CVV |
| 3 | Note whether Postcode shows a validation error | **Note if postcode has no error despite being required** |
| 4 | Enter card number "1234" (4 digits) and submit | **Note if this passes card number validation** |
| 5 | Fill all required fields correctly | Errors clear on valid fields |

---

## TC-032 — Successful Checkout

**Scenario:** TS-031  
**Priority:** High  
**Related Requirement:** FR-08 / US-046 / AC-024  
**Preconditions:** Cart has items. User is on the checkout page.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Fill in all checkout form fields with valid data | No validation errors |
| 2 | Click "Place Order" | Loading state shown briefly |
| 3 | Observe redirect | User arrives at `/order-success` |
| 4 | Observe the page | Order reference number (QC-XXXXXX format) displayed |
| 5 | Navigate to `/cart` | Cart is empty |

---

## TC-033 — Mobile Navigation Menu

**Scenario:** TS-032  
**Priority:** High  
**Related Requirement:** FR-10 / US-047, US-048 / AC-025  
**Preconditions:** Browser DevTools set to mobile viewport (e.g. 375px width).

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load the application on a mobile viewport | Hamburger (☰) icon visible in header |
| 2 | Click the hamburger icon | Navigation menu slides open |
| 3 | Observe menu items | Products, Laptops, Monitors, Accessories, About all visible |
| 4 | Click a navigation link | User navigates to that page; menu closes |
| 5 | Reopen menu and click ✕ | Menu closes |

---

## TC-034 — Header Navigation Links

**Scenario:** TS-033  
**Priority:** High  
**Related Requirement:** FR-10 / US-049  
**Preconditions:** Application running on desktop viewport.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Click "Products" in the nav bar | Navigates to `/products` with all products |
| 2 | Click "Laptops" | Navigates to `/products?category=laptops` showing only laptops |
| 3 | Click "Monitors" | Navigates to `/products?category=monitors` showing only monitors |
| 4 | Click "Accessories" | Navigates to `/products?category=accessories` |
| 5 | Click "About" | Navigates to `/about` |

---

## TC-035 — Product Detail Page Breadcrumb

**Scenario:** TS-034  
**Priority:** Low  
**Related Requirement:** FR-04 / US-050  
**Preconditions:** User navigates to any product detail page.

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to a product detail page | Breadcrumb trail visible below header |
| 2 | Confirm breadcrumb reads: Home › Products › [Category] › [Product Name] | All four segments present |
| 3 | Click "Home" in breadcrumb | Navigates to `/` |
| 4 | Return to PDP; click "Products" | Navigates to `/products` |
| 5 | Click the category segment | Navigates to `/products?category=<category>` |
