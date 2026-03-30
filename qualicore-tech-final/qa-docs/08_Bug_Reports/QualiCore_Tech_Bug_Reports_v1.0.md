# QualiCore Tech — Bug Reports v1.0

## BUG-001: Product brand mismatch on product ID 15
- **Module:** Product Data
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11, localhost:5173
- **Preconditions:** App is running
- **Steps to Reproduce:**
  1. Navigate to /products
  2. Find product with ID 15
  3. Note the brand shown on the product card
  4. Click into the product detail page
  5. Compare the brand
- **Expected Result:** Brand is consistent between catalog card and detail page
- **Actual Result:** Brand displayed on the card does not match the brand on the detail page
- **Reproducibility:** Always
- **Status:** Open

## BUG-002: Category mismatch on product ID 22
- **Module:** Product Data
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** App is running
- **Steps to Reproduce:**
  1. Navigate to /products
  2. Filter by the category assigned to product ID 22
  3. Verify if product ID 22 appears under the correct category
  4. Open the product detail page and check the displayed category
- **Expected Result:** Product is listed under its correct category
- **Actual Result:** Product appears under an incorrect or mismatched category
- **Reproducibility:** Always
- **Status:** Open

## BUG-003: Cart subtotal calculation error for product ID 7
- **Module:** Cart
- **Severity:** High
- **Priority:** P2
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** Cart is empty
- **Steps to Reproduce:**
  1. Add product ID 7 to cart
  2. Set quantity to 3
  3. Calculate expected subtotal: price × 3
  4. Compare with displayed subtotal
- **Expected Result:** Subtotal = unit price × 3
- **Actual Result:** Subtotal is calculated as unit price × 2 (one unit appears free/missing from calculation)
- **Reproducibility:** Always
- **Status:** Open
- **Notes:** Only affects product ID 7 with quantity > 1

## BUG-004: Cart badge count does not update on remove
- **Module:** Cart
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** Items in cart
- **Steps to Reproduce:**
  1. Add 2 different products to cart
  2. Note badge count (should show total quantity)
  3. Remove one product from cart page
  4. Check the badge count in header
- **Expected Result:** Badge count decreases by the removed item's quantity
- **Actual Result:** Badge count does not update until next cart action or page refresh
- **Reproducibility:** Always
- **Status:** Open

## BUG-005: Search does not trim leading spaces
- **Module:** Search
- **Severity:** Low
- **Priority:** P4
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** App is running
- **Steps to Reproduce:**
  1. Click the search bar
  2. Type "  Laptop" (with 2 leading spaces)
  3. Submit search
  4. Observe results
- **Expected Result:** Leading spaces are trimmed, results for "Laptop" are shown
- **Actual Result:** No results or incorrect results returned due to untrimmed input
- **Reproducibility:** Always
- **Status:** Open

## BUG-006: Search excludes some brands for products with ID > 35
- **Module:** Search
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** App is running, products with ID > 35 exist
- **Steps to Reproduce:**
  1. Identify a brand used by a product with ID > 35
  2. Search for that brand name
  3. Check if the product appears in results
- **Expected Result:** All products matching the brand are displayed
- **Actual Result:** Products with ID > 35 are excluded from brand search results
- **Reproducibility:** Always
- **Status:** Open

## BUG-007: Sort by price reversed for Components category
- **Module:** Sorting
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** On /products, filter by Components category
- **Steps to Reproduce:**
  1. Filter products by "Components"
  2. Select "Price: Low to High"
  3. Check the order of products
- **Expected Result:** Products sorted by price ascending
- **Actual Result:** Products appear in descending price order (reversed)
- **Reproducibility:** Always
- **Status:** Open

## BUG-008: Clear Filters does not reset URL parameters
- **Module:** Filters
- **Severity:** Low
- **Priority:** P4
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** Filters are active with URL parameters
- **Steps to Reproduce:**
  1. Apply category and brand filters on /products
  2. Note the URL contains filter parameters
  3. Click "Clear Filters"
  4. Check the URL
- **Expected Result:** URL parameters are cleared
- **Actual Result:** URL still contains old filter parameters
- **Reproducibility:** Always
- **Status:** Open

## BUG-009: Checkout accepts empty postcode
- **Module:** Checkout / Validation
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** Cart has items, user is on /checkout
- **Steps to Reproduce:**
  1. Fill in all required fields except postcode
  2. Leave postcode empty
  3. Click "Place Order"
- **Expected Result:** Validation error shown for postcode
- **Actual Result:** Order is submitted without postcode validation
- **Reproducibility:** Always
- **Status:** Open

## BUG-010: Wishlist allows duplicate entries
- **Module:** Wishlist
- **Severity:** Low
- **Priority:** P4
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** App is running
- **Steps to Reproduce:**
  1. Add product X to wishlist
  2. Navigate away and return to catalog
  3. Add product X to wishlist again
  4. Navigate to /wishlist
- **Expected Result:** Product X appears only once
- **Actual Result:** Product X appears twice (duplicate entry)
- **Reproducibility:** Always
- **Status:** Open

## BUG-011: Wishlist truncates to 8 items on page refresh
- **Module:** Wishlist
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** More than 8 items in wishlist
- **Steps to Reproduce:**
  1. Add 10+ products to wishlist
  2. Verify all are listed on /wishlist
  3. Refresh the browser
  4. Check the wishlist count
- **Expected Result:** All 10+ items are preserved
- **Actual Result:** Only 8 items remain after refresh
- **Reproducibility:** Always
- **Status:** Open

## BUG-012: Checkout accepts card number shorter than 16 digits
- **Module:** Checkout / Validation
- **Severity:** High
- **Priority:** P2
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** Cart has items
- **Steps to Reproduce:**
  1. Navigate to /checkout
  2. Fill all fields, enter card number "1234" (4 digits)
  3. Click "Place Order"
- **Expected Result:** Validation error — card number must be 16 digits
- **Actual Result:** Order is accepted with a 4-digit card number
- **Reproducibility:** Always
- **Status:** Open

## BUG-013: False sale badges on non-discounted low-stock items
- **Module:** Catalog / UI
- **Severity:** Low
- **Priority:** P4
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** App is running
- **Steps to Reproduce:**
  1. Navigate to /products
  2. Find low-stock products (stock < 5)
  3. Check if they display a "Sale" badge
  4. Verify if the product actually has a discount
- **Expected Result:** Sale badge only on products with actual discounts
- **Actual Result:** Some low-stock products show a Sale badge without any discount
- **Reproducibility:** Intermittent (depends on stock level)
- **Status:** Open

## BUG-014: Negative discount displayed on product ID 5
- **Module:** Pricing
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** App is running
- **Steps to Reproduce:**
  1. Navigate to /products
  2. Find product ID 5
  3. Check the displayed discount percentage
- **Expected Result:** Discount percentage is a positive value or not shown
- **Actual Result:** A negative discount value is displayed (original price lower than sale price)
- **Reproducibility:** Always
- **Status:** Open

## BUG-015: RAM specification mismatch on product ID 2
- **Module:** Product Data
- **Severity:** Medium
- **Priority:** P3
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** App is running
- **Steps to Reproduce:**
  1. Navigate to product ID 2 detail page
  2. Check the RAM specification in the specs table
  3. Compare with the RAM mentioned in the product description
- **Expected Result:** RAM value is consistent between specs and description
- **Actual Result:** Specs table and description show different RAM values
- **Reproducibility:** Always
- **Status:** Open

## BUG-016: Empty cart checkout button links to homepage
- **Module:** Cart / Navigation
- **Severity:** Low
- **Priority:** P4
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** Cart is empty
- **Steps to Reproduce:**
  1. Navigate to /cart with no items
  2. Click the "Browse Products" / CTA button
- **Expected Result:** User is taken to /products
- **Actual Result:** User is taken to the homepage (/)
- **Reproducibility:** Always
- **Status:** Open

## BUG-017: Registration accepts password without validation
- **Module:** Auth / Validation
- **Severity:** High
- **Priority:** P2
- **Environment:** Chrome 120, Windows 11
- **Preconditions:** On /register page
- **Steps to Reproduce:**
  1. Enter a valid name and email
  2. Enter password "1" (single character)
  3. Submit the form
- **Expected Result:** Validation error for weak/short password
- **Actual Result:** Registration succeeds with a 1-character password
- **Reproducibility:** Always
- **Status:** Open
