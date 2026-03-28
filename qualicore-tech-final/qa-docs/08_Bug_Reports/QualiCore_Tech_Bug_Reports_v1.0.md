# Bug Reports
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Date:** March 2026  
**Environment:** Chrome (latest) / localhost:5173 / Windows 10

---

## BUG-001 — Cart Subtotal Incorrectly Calculated for Specific Product

**Module:** Cart  
**Severity:** High  
**Priority:** High  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
The cart is empty. The user adds a product which maps to a known internal ID.

**Steps to Reproduce:**
1. Navigate to `/products`
2. Add the product "SteelSeries Apex 3 TKL" (or any product where internal ID is 7) to the cart
3. Navigate to `/cart`
4. Increase the quantity to 2 (or add the same product a second time)
5. Observe the displayed subtotal

**Expected Result:**  
The subtotal for the item should equal the unit price multiplied by the quantity (e.g. £39.99 × 2 = £79.98).

**Actual Result:**  
The subtotal is calculated as if the quantity were one less than shown (e.g. quantity 2 shows the price of 1 unit). The cart badge and displayed quantity are correct, but the monetary value is wrong.

**Impact:**  
Users are shown a lower total than they will actually be charged. This is a data integrity defect affecting trust and financial accuracy.

**Notes:**  
The issue appears to affect a single specific product only. Other products calculate correctly. Behaviour appears to be an intentional fault in the subtotal calculation logic.

---

## BUG-002 — Product Specification Shows Incorrect RAM Value

**Module:** Product Detail Page  
**Severity:** Medium  
**Priority:** High  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
User navigates to the detail page of the Dell Inspiron 15 laptop.

**Steps to Reproduce:**
1. Navigate to `/products`
2. Find and click on "Dell Inspiron 15" (product ID 2)
3. Scroll to the Specifications table
4. Locate the RAM row

**Expected Result:**  
The RAM specification should match the product's advertised specification (e.g. 8GB DDR4 or 16GB as stated in the product listing/description).

**Actual Result:**  
The Specifications table displays "4GB DDR4" for the RAM field, which contradicts the product name and marketing description.

**Impact:**  
Customers comparing technical specifications before purchase may be misled. This is a data consistency defect that could affect purchasing decisions.

**Notes:**  
The discrepancy exists only on the product detail page; the product listing card does not display the RAM spec directly.

---

## BUG-003 — Primary Product Image Fails to Load on Product Detail Page

**Module:** Product Detail Page  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
User navigates to the detail page of a specific product.

**Steps to Reproduce:**
1. Navigate to `/products`
2. Click on "Lenovo IdeaPad Flex 5" (product ID 3)
3. Observe the main product image

**Expected Result:**  
The primary product image should load and display correctly.

**Actual Result:**  
The main image fails to load. A fallback placeholder image ("Image Unavailable") is shown instead.

**Impact:**  
Users cannot see the main product image, which reduces confidence in the product and may result in abandonment before purchase.

**Notes:**  
The image URL for the first gallery image is invalid. Thumbnail navigation is still present. Fallback handling works as expected (placeholder is shown).

---

## BUG-004 — Sidebar Search for "corsair" Returns Fewer Results Than Brand Filter

**Module:** Search / Filtering  
**Severity:** Medium  
**Priority:** High  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
User is on the `/products` page with no active filters.

**Steps to Reproduce:**
1. Navigate to `/products`
2. In the sidebar search field, type "corsair"
3. Note the number of results displayed
4. Clear the search field
5. Select "Corsair" from the brand filter dropdown
6. Note the number of results displayed

**Expected Result:**  
Both the search for "corsair" and the brand filter for "Corsair" should return the same set of Corsair products.

**Actual Result:**  
Searching "corsair" returns fewer products than applying the brand filter. Several Corsair products with higher internal IDs are excluded from search results but appear when the brand filter is used.

**Impact:**  
Users searching by brand name receive incomplete results, reducing product discoverability and introducing an inconsistent UX.

**Notes:**  
The issue is specific to the brand "Corsair". Other brand searches appear unaffected.

---

## BUG-005 — "Price: Low to High" Sorts Components Category in Descending Order

**Module:** Sorting  
**Severity:** High  
**Priority:** High  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
User is on the `/products` page.

**Steps to Reproduce:**
1. Navigate to `/products`
2. Select "Components" from the category filter
3. Select "Price: Low to High" from the sort dropdown
4. Observe the order of products in the grid

**Expected Result:**  
Products should be ordered from the lowest price to the highest price.

**Actual Result:**  
Products in the Components category are displayed in descending price order (highest to lowest) when "Price: Low to High" is selected.

**Impact:**  
Users browsing components by price are shown the most expensive items first, contrary to the selected sort option. This could lead to user confusion and missed purchases.

**Notes:**  
The issue is isolated to the Components category. All other categories sort correctly under "Price: Low to High".

---

## BUG-006 — Product Page Title Contains Typographical Error

**Module:** Product Detail Page  
**Severity:** Low  
**Priority:** Low  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
None.

**Steps to Reproduce:**
1. Navigate to the product detail page for "Apple MacBook Air 13 M2" (product ID 6)
2. Observe the page heading (H1 title)

**Expected Result:**  
The title should read "Apple MacBook Air 13 M2".

**Actual Result:**  
The title reads "Apple MacBoook Air 13 M2" — the word "MacBook" contains an extra 'o', making it "MacBoook".

**Impact:**  
Minor credibility issue. The product is still identifiable, but the typo appears unprofessional and may affect SEO in a real-world context.

**Notes:**  
The product listing card and URL slug display the correct name. The typo is only present in the page-level H1 heading.

---

## BUG-007 — Cart Quantity Can Exceed Product Stock Level

**Module:** Cart  
**Severity:** Medium  
**Priority:** High  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
An in-stock product with a stock value of less than 10 is in the cart with quantity 1.

**Steps to Reproduce:**
1. Add an in-stock product to the cart (note its stock level from the product detail page)
2. Navigate to `/cart`
3. Click the "+" (increase) quantity button repeatedly
4. Continue clicking beyond the product's stated stock level

**Expected Result:**  
The quantity should not exceed the product's available stock. The "+" button should be disabled when the maximum stock quantity is reached.

**Actual Result:**  
The "+" button remains active and the quantity can be increased indefinitely beyond the product's stock level.

**Impact:**  
Users can add more units to their cart than are in stock. In a real system this would result in failed orders or overselling.

**Notes:**  
The quantity selector on the Product Detail Page correctly limits the quantity to the stock level. The same validation is missing on the cart page.

---

## BUG-008 — Postcode Field Not Validated on Checkout Submission

**Module:** Checkout  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
Cart has at least one item. User is on the checkout page.

**Steps to Reproduce:**
1. Navigate to the checkout page
2. Fill in all fields except the Postcode field
3. Click "Place Order"

**Expected Result:**  
A validation error should appear on the Postcode field indicating it is required.

**Actual Result:**  
The form submits successfully without a postcode. No error is shown for the postcode field despite the field being labelled with an asterisk (*) indicating it is required.

**Impact:**  
Orders can be placed with incomplete delivery addresses. This would result in undeliverable orders in a real e-commerce context.

**Notes:**  
The postcode field has error state management in the component, but the validate() function does not include a check for the postcode value.

---

## BUG-009 — Wishlist Items Beyond 8 Lost on Page Refresh

**Module:** Wishlist  
**Severity:** Low  
**Priority:** Medium  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
Wishlist is empty.

**Steps to Reproduce:**
1. Add 9 different products to the wishlist
2. Observe the wishlist badge — it shows 9
3. Navigate to `/wishlist` — all 9 items visible
4. Refresh the page
5. Observe the wishlist badge and page

**Expected Result:**  
All 9 wishlist items should persist across refresh.

**Actual Result:**  
After refresh, the wishlist is silently truncated to 8 items. The 9th item disappears without any notification to the user.

**Impact:**  
Users lose saved items without explanation. The behaviour is inconsistent — adding a 9th item appears to succeed during the session, but the item is lost on reload.

**Notes:**  
The localStorage load logic applies `.slice(0, 8)` on init, but the add function has no cap. Items added after the 8th are written to storage but discarded on next load.

---

## BUG-010 — Login Form Does Not Validate Password Field as Required

**Module:** Authentication / Login  
**Severity:** Medium  
**Priority:** High  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
User is on the `/login` page.

**Steps to Reproduce:**
1. Navigate to `/login`
2. Enter the email address: demo@qualicoretech.com
3. Leave the password field completely empty
4. Click "Sign In"

**Expected Result:**  
A validation error should appear on the Password field indicating it is required. The form should not be submitted.

**Actual Result:**  
The form proceeds to the authentication check with an empty password. No validation error is shown for the password field. The login attempt fails with a general "Invalid email or password" error, but no specific field-level error is shown for the password.

**Impact:**  
Users are not given clear, actionable feedback when they forget to enter their password. The UX is confusing, as the user receives a credentials error rather than a clear "Password is required" message.

**Notes:**  
The `validate()` function in LoginPage only checks for email presence. Password presence is not validated client-side.

---

## BUG-011 — Registration Allows Weak Passwords Without Minimum Length Check

**Module:** Authentication / Registration  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
User is on the `/register` page. The password placeholder reads "Min. 8 characters".

**Steps to Reproduce:**
1. Navigate to `/register`
2. Fill in first name, last name, and a valid email address
3. Enter "abc" as the password (3 characters)
4. Enter "abc" in the confirm password field (matching)
5. Click "Create Account"

**Expected Result:**  
A validation error should appear stating that the password must be at least 8 characters long.

**Actual Result:**  
The registration succeeds with a 3-character password. No minimum length validation is enforced despite the placeholder text suggesting an 8-character minimum.

**Impact:**  
Users can create accounts with insecure passwords. In a real system this would be a security defect. Here it creates a misleading UX where the UI implies a rule that is not enforced.

**Notes:**  
The `validate()` function only checks that a password field is present (non-empty). Minimum length is not validated.

---

## BUG-012 — Cart Badge Count Can Desync From Actual Cart Count

**Module:** Cart / Header  
**Severity:** Low  
**Priority:** Medium  
**Status:** Open  
**Reproducibility:** Intermittent

**Preconditions:**  
Cart contains at least one item.

**Steps to Reproduce:**
1. Add an item to the cart — note the badge count (e.g. 1)
2. Navigate to `/cart`
3. Remove the item using the remove (✕) button
4. Observe the cart badge count in the header

**Expected Result:**  
After removing the item, the cart badge count should update to 0 (or disappear).

**Actual Result:**  
In some scenarios, the badge count may not immediately reflect the removal, briefly showing a count that does not match the actual number of items in the cart.

**Impact:**  
Minor visual inconsistency. Users may briefly see an incorrect item count in the header. The issue resolves on subsequent interactions.

**Notes:**  
The badge count is maintained as a separate state variable (`badgeCount`) that is only updated in `addToCart` and `updateQuantity`. The `removeFromCart` function updates the cart array but does not explicitly update `badgeCount`.

---

## BUG-013 — Checkout Accepts Card Numbers With Only 4 Digits

**Module:** Checkout  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
Cart has items. User is on the checkout page.

**Steps to Reproduce:**
1. Navigate to checkout
2. Fill in all other required fields with valid data
3. Enter "1234" (4 digits) in the Card Number field
4. Click "Place Order"

**Expected Result:**  
A validation error should appear indicating the card number must be 16 digits (or at minimum a realistic length such as 13–19 digits).

**Actual Result:**  
The order is accepted and the user is redirected to the order success page with a 4-digit card number entered.

**Impact:**  
The checkout does not enforce meaningful card number validation, which would allow malformed payment data through in a real payment integration context.

**Notes:**  
The validation only checks that the card number, after stripping spaces, has a length of at least 4 characters. A real card number is 13–19 digits.

---

## BUG-014 — Mobile Navigation Menu Does Not Close When Tapping Outside

**Module:** Navigation / Responsive  
**Severity:** Low  
**Priority:** Low  
**Status:** Open  
**Reproducibility:** Always

**Preconditions:**  
Application viewed on a mobile viewport (< 768px). Mobile menu is open.

**Steps to Reproduce:**
1. Open the application on a mobile viewport
2. Tap the hamburger menu icon to open the navigation
3. Tap anywhere on the page content outside the navigation menu

**Expected Result:**  
The navigation menu should close when the user taps outside of it.

**Actual Result:**  
The navigation menu remains open when tapping outside. The user must tap the ✕ button or navigate to a page to close the menu.

**Impact:**  
Minor UX friction on mobile. Users expect menus to dismiss when tapping outside.

**Notes:**  
The header does include a click-outside handler for the user account dropdown, but not for the mobile navigation menu.

---

## BUG-015 — Product Count Label Shows Stale "..." During Reload Navigation

**Module:** Product Catalogue  
**Severity:** Low  
**Priority:** Low  
**Status:** Open  
**Reproducibility:** Sometimes

**Preconditions:**  
User is on the products page and applies a filter or navigates using browser back/forward.

**Steps to Reproduce:**
1. Navigate to `/products`
2. Apply a category filter
3. Quickly navigate back to all products using the browser back button
4. Observe the product count text immediately after navigation

**Expected Result:**  
The product count should display the correct number immediately or show a neutral loading indicator.

**Actual Result:**  
The product count briefly shows "..." (the loading state) even when returning to a cached page state, which may feel jarring.

**Impact:**  
Minor visual polish issue. No functional impact.

**Notes:**  
The loading state is triggered unconditionally on component mount via a `useEffect` with a 400ms timeout, regardless of whether data is already available.
