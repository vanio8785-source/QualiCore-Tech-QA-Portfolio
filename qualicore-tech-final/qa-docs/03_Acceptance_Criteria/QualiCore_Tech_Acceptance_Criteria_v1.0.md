# Acceptance Criteria
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Date:** March 2026

---

## AC-001 — Home Page Display (US-001)
- Given the user navigates to the root URL
- When the page loads
- Then the hero section is displayed with a headline and a call-to-action button linking to `/products`
- And at least one featured product section is visible
- And all featured product cards link to their correct product detail pages

---

## AC-002 — Product Catalogue Load (US-002)
- Given the user navigates to `/products`
- When the page loads
- Then all products from the catalogue are displayed in a grid
- And a count of visible products is shown
- And each product card displays the product name, image, price, and rating

---

## AC-003 — Product Detail Page (US-003, US-004, US-005, US-006, US-007)
- Given the user clicks on a product card or navigates to a product slug
- When the product detail page loads
- Then the product name, brand, price, rating, review count, and SKU are displayed
- And the product image is shown (or a fallback placeholder if broken)
- And a specifications table is present and populated
- And if the product has an old price, the discount percentage and savings amount are shown
- And the stock status is shown as "In Stock" or "Out of Stock"
- And the "Add to Cart" button is disabled if the product is out of stock

---

## AC-004 — Header Search (US-009)
- Given the user enters a search term in the header search bar and submits
- When the search is submitted
- Then the user is navigated to `/products?search=<term>`
- And the catalogue displays only products matching the search term by name, brand, category, or description

---

## AC-005 — Sidebar Search (US-010, US-011, US-012)
- Given the user is on the `/products` page
- When the user types a search term into the sidebar search input
- Then the product grid updates to show only matching results
- And the results count updates to reflect the number of matching products
- And submitting an empty search removes the search filter

---

## AC-006 — Category Filter (US-013)
- Given the user is on the `/products` page
- When the user selects a category radio button
- Then only products in that category are displayed
- And the result count updates accordingly
- And selecting "All Categories" shows all products

---

## AC-007 — Brand Filter (US-014)
- Given the user is on the `/products` page
- When the user selects a brand from the brand dropdown
- Then only products from that brand are displayed
- And the result count updates accordingly

---

## AC-008 — Price Range Filter (US-015)
- Given the user is on the `/products` page
- When the user moves the price range slider to a value below the maximum
- Then only products priced at or below the selected value are displayed

---

## AC-009 — Rating Filter (US-016)
- Given the user is on the `/products` page
- When the user selects a minimum rating option
- Then only products with a rating greater than or equal to that value are shown

---

## AC-010 — In-Stock Filter (US-017)
- Given the user is on the `/products` page
- When the user checks "In Stock Only"
- Then products with a stock value of 0 are removed from the results

---

## AC-011 — Clear Filters (US-018)
- Given the user has applied one or more filters
- When the user clicks the "Clear" button
- Then all filter values are reset to their defaults
- And all products are shown again
- And the filter count badge is removed

---

## AC-012 — Sort: Price Low to High (US-019)
- Given the user is on the `/products` page
- When the user selects "Price: Low to High"
- Then all visible products are sorted in ascending order by price
- And the sorting is consistent across all product categories

---

## AC-013 — Sort: Best Rated (US-022)
- Given the user is on the `/products` page
- When the user selects "Best Rated"
- Then products are sorted from highest to lowest rating

---

## AC-014 — Add to Cart from Listing (US-024)
- Given the user can see a product card with an "Add to Cart" button
- When the user clicks "Add to Cart"
- Then the product is added to the cart with a quantity of 1
- And the cart badge count in the header increases by 1
- And a success toast notification appears

---

## AC-015 — Add to Cart from PDP with Quantity (US-025)
- Given the user is on a product detail page for an in-stock product
- When the user selects a quantity greater than 1 and clicks "Add to Cart"
- Then the product is added to the cart with the specified quantity
- And the cart badge updates accordingly

---

## AC-016 — View Cart (US-026, US-029)
- Given the user has items in their cart and navigates to `/cart`
- When the cart page loads
- Then all cart items are displayed with name, image, unit price, quantity, and line subtotal
- And the cart summary shows the correct subtotal, shipping cost, and total

---

## AC-017 — Cart Quantity Management (US-027, US-028)
- Given the user is on the cart page
- When the user increases or decreases item quantity using the controls
- Then the item subtotal and cart total update accordingly
- When the user removes an item
- Then the item is removed from the cart and the totals recalculate

---

## AC-018 — Free Shipping Threshold (US-030)
- Given the user's cart subtotal is at or above £50
- When the cart page is viewed
- Then the shipping line shows "FREE"
- And the total equals the subtotal

---

## AC-019 — Cart Persistence (US-031)
- Given the user has items in their cart
- When the user refreshes the page or navigates away and returns
- Then the cart items and quantities are preserved

---

## AC-020 — Wishlist Add and Remove (US-032, US-033, US-034)
- Given the user clicks the wishlist button on a product
- Then the product is added to the wishlist and the button state changes
- When the user clicks the wishlist button again on the same product
- Then the product is removed from the wishlist
- And the wishlist page reflects the current state

---

## AC-021 — Login Validation (US-036, US-037)
- Given the user navigates to `/login`
- When the user submits the form with a blank email
- Then an error message is displayed for the email field
- When the user enters incorrect credentials and submits
- Then a general error message is displayed
- When the user enters correct credentials (demo@qualicoretech.com / Demo1234) and submits
- Then the user is logged in and redirected to the home page

---

## AC-022 — Registration Validation (US-038)
- Given the user navigates to `/register`
- When the user submits the form with any required field blank
- Then validation errors are shown for each missing field
- When the user enters a password and a non-matching confirm password
- Then a "Passwords do not match" error is shown
- When all fields are valid
- Then the user is registered and redirected to the home page

---

## AC-023 — Checkout Validation (US-044)
- Given the user is on the checkout page
- When the user submits the form with required fields empty
- Then validation errors are shown for each missing required field
- And the order is not submitted

---

## AC-024 — Order Confirmation (US-046)
- Given the user completes checkout with valid details
- When the order is submitted
- Then the user is redirected to `/order-success`
- And an order reference number is displayed
- And the cart is cleared

---

## AC-025 — Mobile Navigation (US-047, US-048)
- Given the user is on a mobile-width viewport (< 768px)
- When the user taps the hamburger menu icon
- Then the navigation menu opens
- When the user taps it again or navigates to a page
- Then the menu closes
