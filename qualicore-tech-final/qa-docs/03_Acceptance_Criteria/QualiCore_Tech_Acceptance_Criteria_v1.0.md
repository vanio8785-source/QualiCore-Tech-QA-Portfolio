# QualiCore Tech — Acceptance Criteria v1.0

## AC-001: Product Catalog Display (US-001)
- **Given** the user navigates to /products
- **When** the page loads
- **Then** all products are displayed with image, name, price, and rating
- **And** products are paginated or fully listed

## AC-002: Product Detail Page (US-002)
- **Given** the user clicks a product card
- **When** the detail page loads
- **Then** the page shows product name, image, price, full description, specifications, rating, and availability
- **And** an "Add to Cart" button is visible

## AC-003: Search by Name (US-005)
- **Given** the user types a product name in the search bar
- **When** the search is triggered
- **Then** matching products are displayed (case-insensitive, partial match)
- **And** non-matching products are hidden

## AC-004: Search Empty State (US-007)
- **Given** the user searches for a term with no matches
- **When** results render
- **Then** a "No products found" message is displayed

## AC-005: Category Filter (US-008)
- **Given** the user selects a category filter
- **When** the filter is applied
- **Then** only products in that category are shown
- **And** the product count updates

## AC-006: Clear Filters (US-012)
- **Given** the user has active filters
- **When** "Clear Filters" is clicked
- **Then** all filters reset and the full catalog is shown

## AC-007: Sort by Price Low-High (US-013)
- **Given** the user selects "Price: Low to High"
- **When** sorting is applied
- **Then** products are ordered by price ascending

## AC-008: Add to Cart (US-016)
- **Given** the user clicks "Add to Cart" on a product
- **When** the action completes
- **Then** the product appears in the cart
- **And** the cart badge increments

## AC-009: Cart Quantity Update (US-018)
- **Given** the user changes quantity in the cart
- **When** the new quantity is set
- **Then** the subtotal recalculates
- **And** the cart badge updates

## AC-010: Remove from Cart (US-019)
- **Given** the user clicks remove on a cart item
- **When** the action completes
- **Then** the item is removed from the cart
- **And** totals and badge update

## AC-011: Cart Persistence (US-020)
- **Given** the user has items in cart
- **When** the page is refreshed
- **Then** cart items are still present

## AC-012: Add to Wishlist (US-022)
- **Given** the user clicks the wishlist icon on a product
- **When** the action completes
- **Then** the product appears on the wishlist page

## AC-013: Login with Demo Credentials (US-026)
- **Given** the user is on the login page
- **When** they enter demo@qualicoretech.com / Demo1234
- **Then** they are logged in and redirected

## AC-014: Checkout Validation (US-031)
- **Given** the user submits the checkout form with empty required fields
- **When** validation runs
- **Then** error messages appear on each empty required field
- **And** the form is not submitted

## AC-015: Order Confirmation (US-033)
- **Given** the user submits a valid checkout form
- **When** processing completes
- **Then** the user is redirected to the order success page
- **And** an order number is displayed

## AC-016: Free Shipping (US-034)
- **Given** the cart subtotal is £50 or more
- **When** the checkout summary loads
- **Then** shipping is shown as "FREE"

## AC-017: Mobile Responsiveness (US-035)
- **Given** the user views the app on a mobile viewport (<768px)
- **When** any page loads
- **Then** content is readable, buttons are tappable, and layout is single-column

## AC-018: Header Navigation (US-036)
- **Given** the user clicks a navigation link in the header
- **When** the link is clicked
- **Then** the correct page loads without errors
