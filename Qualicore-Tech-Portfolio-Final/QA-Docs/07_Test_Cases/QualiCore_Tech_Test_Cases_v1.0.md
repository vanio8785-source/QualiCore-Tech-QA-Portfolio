# QualiCore Tech — Test Cases v1.0

## TC-001: Verify catalog page displays all products
- **Priority:** High
- **Related:** FR-001, US-001, TS-001
- **Preconditions:** App is running, user navigates to /products
- **Steps:**
  1. Open the Products page
  2. Scroll through the product list
  3. Count the number of product cards displayed
- **Expected Result:** All products from the catalog are visible with image, name, price, and rating
- **Test Data:** N/A

## TC-002: Verify product detail page shows specs
- **Priority:** High
- **Related:** FR-002, US-002, TS-002
- **Preconditions:** At least one product exists in the catalog
- **Steps:**
  1. Navigate to /products
  2. Click on a product card
  3. Verify the detail page loads
  4. Check for: name, image, price, description, specifications, rating, stock status
- **Expected Result:** All product information is displayed accurately
- **Test Data:** Any product from catalog

## TC-003: Verify sale badges on discounted products
- **Priority:** Medium
- **Related:** FR-004, US-004, TS-003
- **Preconditions:** App is running
- **Steps:**
  1. Navigate to /products
  2. Identify products with original prices (strikethrough pricing)
  3. Verify each has a "Sale" badge
  4. Verify non-sale products do not have the badge
- **Expected Result:** Sale badges appear only on genuinely discounted products
- **Test Data:** Check products with and without discounts

## TC-004: Verify search by product name
- **Priority:** High
- **Related:** FR-006, US-005, TS-004
- **Preconditions:** App is running
- **Steps:**
  1. Click the search bar in the header
  2. Type "Laptop"
  3. Press Enter or wait for results
  4. Verify matching products are displayed
- **Expected Result:** Products with "Laptop" in the name are shown
- **Test Data:** Search term: "Laptop"

## TC-005: Verify search with leading spaces
- **Priority:** Medium
- **Related:** FR-006, US-005, TS-029
- **Preconditions:** App is running
- **Steps:**
  1. Click the search bar
  2. Type "  Laptop" (with leading spaces)
  3. Observe results
- **Expected Result:** Leading spaces should be trimmed and results shown normally
- **Test Data:** Search term: "  Laptop"

## TC-006: Verify search across brand and category
- **Priority:** High
- **Related:** FR-007, US-006, TS-005
- **Preconditions:** App is running
- **Steps:**
  1. Search for a brand name (e.g., "ASUS")
  2. Verify brand-matching products appear
  3. Search for a category name (e.g., "Peripherals")
  4. Verify category-matching products appear
- **Expected Result:** Search matches across product name, brand, and category fields
- **Test Data:** Brand: "ASUS", Category: "Peripherals"

## TC-007: Verify category filter
- **Priority:** High
- **Related:** FR-010, US-008, TS-007
- **Preconditions:** App is running, on /products
- **Steps:**
  1. Select "Laptops" from the category filter
  2. Verify only laptop products are shown
  3. Select "Peripherals"
  4. Verify only peripheral products are shown
- **Expected Result:** Product list updates to show only the selected category
- **Test Data:** Categories: Laptops, Peripherals

## TC-008: Verify price range filter
- **Priority:** Medium
- **Related:** FR-012, US-010, TS-008
- **Preconditions:** App is running, on /products
- **Steps:**
  1. Set min price to 100 and max price to 500
  2. Apply the filter
  3. Verify all visible products fall within the price range
- **Expected Result:** Only products priced between £100 and £500 are displayed
- **Test Data:** Min: 100, Max: 500

## TC-009: Verify Clear Filters resets catalog
- **Priority:** High
- **Related:** FR-014, US-012, TS-009
- **Preconditions:** Filters are active on /products
- **Steps:**
  1. Apply a category filter and a price filter
  2. Click "Clear Filters"
  3. Verify all products are shown again
  4. Verify filter dropdowns/inputs are reset
- **Expected Result:** All filters reset and full catalog is displayed
- **Test Data:** N/A

## TC-010: Verify sort by price ascending
- **Priority:** High
- **Related:** FR-015, US-013, TS-010
- **Preconditions:** App is running, on /products
- **Steps:**
  1. Select "Price: Low to High" from sort dropdown
  2. Verify the first product has the lowest price
  3. Verify products are in ascending price order
- **Expected Result:** Products sorted by price from lowest to highest
- **Test Data:** N/A

## TC-011: Verify add to cart from catalog page
- **Priority:** High
- **Related:** FR-019, US-016, TS-012
- **Preconditions:** App is running, cart is empty
- **Steps:**
  1. Navigate to /products
  2. Click "Add to Cart" on any product
  3. Navigate to /cart
  4. Verify the product appears in the cart
- **Expected Result:** Product is added to cart with quantity 1
- **Test Data:** Any in-stock product

## TC-012: Verify cart quantity update recalculates subtotal
- **Priority:** High
- **Related:** FR-021, US-018, TS-013
- **Preconditions:** At least one item in cart
- **Steps:**
  1. Navigate to /cart
  2. Note the current subtotal
  3. Increase the quantity of an item by 1
  4. Verify the subtotal increases by the item's unit price
- **Expected Result:** Subtotal recalculates correctly based on updated quantities
- **Test Data:** Product with known price

## TC-013: Verify remove from cart
- **Priority:** High
- **Related:** FR-022, US-019, TS-014
- **Preconditions:** At least one item in cart
- **Steps:**
  1. Navigate to /cart
  2. Click "Remove" on an item
  3. Verify the item is removed
  4. Verify totals update
- **Expected Result:** Item removed, totals recalculated
- **Test Data:** N/A

## TC-014: Verify cart persistence on refresh
- **Priority:** High
- **Related:** FR-024, US-020, TS-015
- **Preconditions:** Items in cart
- **Steps:**
  1. Add items to cart
  2. Refresh the browser
  3. Navigate to /cart
  4. Verify items are still present
- **Expected Result:** Cart contents persist after page refresh
- **Test Data:** N/A

## TC-015: Verify add to wishlist
- **Priority:** Medium
- **Related:** FR-025, US-022, TS-016
- **Preconditions:** App is running
- **Steps:**
  1. Navigate to /products
  2. Click the wishlist/heart icon on a product
  3. Navigate to /wishlist
  4. Verify the product is listed
- **Expected Result:** Product appears on the wishlist page
- **Test Data:** Any product

## TC-016: Verify wishlist persistence on refresh
- **Priority:** Medium
- **Related:** FR-027, US-025, TS-018
- **Preconditions:** Items in wishlist
- **Steps:**
  1. Add items to wishlist
  2. Refresh the browser
  3. Navigate to /wishlist
  4. Verify items are still present
- **Expected Result:** Wishlist contents persist after refresh
- **Test Data:** N/A

## TC-017: Verify login with demo credentials
- **Priority:** High
- **Related:** FR-029, US-026, TS-019
- **Preconditions:** User is logged out
- **Steps:**
  1. Navigate to /login
  2. Enter email: demo@qualicoretech.com
  3. Enter password: Demo1234
  4. Click "Log In"
  5. Verify user is logged in
- **Expected Result:** User is authenticated and redirected
- **Test Data:** Email: demo@qualicoretech.com, Password: Demo1234

## TC-018: Verify checkout validation for empty fields
- **Priority:** High
- **Related:** FR-034, US-031, TS-021
- **Preconditions:** Cart has at least one item
- **Steps:**
  1. Navigate to /checkout
  2. Leave all fields empty
  3. Click "Place Order"
  4. Verify error messages appear on required fields
- **Expected Result:** Validation errors shown for all required fields, form not submitted
- **Test Data:** All fields empty

## TC-019: Verify free shipping threshold
- **Priority:** Medium
- **Related:** FR-036, US-034, TS-022
- **Preconditions:** Cart subtotal is at or above £50
- **Steps:**
  1. Add products totaling £50+ to cart
  2. Navigate to /checkout
  3. Check the order summary
  4. Verify shipping shows "FREE"
- **Expected Result:** Shipping is free for orders £50+
- **Test Data:** Products totaling ≥ £50

## TC-020: Verify product data consistency
- **Priority:** Medium
- **Related:** FR-001, US-003, TS-023
- **Preconditions:** App is running
- **Steps:**
  1. Navigate to /products
  2. Click on Product ID 15
  3. Compare the brand shown on the card vs. the detail page
  4. Check other products for data consistency
- **Expected Result:** Brand, category, specs, and pricing are consistent across catalog and detail views
- **Test Data:** Product IDs: 15, 22, 31, 38

## TC-021: Verify cart badge updates on add/remove
- **Priority:** Medium
- **Related:** FR-023, US-021, TS-026
- **Preconditions:** Cart is empty
- **Steps:**
  1. Note the cart badge shows 0 or is hidden
  2. Add a product to cart
  3. Verify badge shows 1
  4. Add another product
  5. Verify badge shows 2
  6. Remove one product
  7. Verify badge shows 1
- **Expected Result:** Badge count accurately reflects total items in cart
- **Test Data:** N/A

## TC-022: Verify mobile responsive layout
- **Priority:** High
- **Related:** NFR-002, US-035, TS-024
- **Preconditions:** App is running
- **Steps:**
  1. Open Chrome DevTools
  2. Set viewport to 375×812 (iPhone)
  3. Navigate through Home, Products, Cart, Checkout
  4. Verify layout adapts — single column, readable text, tappable buttons
- **Expected Result:** All pages render correctly on mobile viewport
- **Test Data:** Viewport: 375×812
