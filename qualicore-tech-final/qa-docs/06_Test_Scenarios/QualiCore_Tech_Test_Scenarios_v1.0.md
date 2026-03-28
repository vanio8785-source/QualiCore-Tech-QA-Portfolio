# Test Scenarios
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Date:** March 2026

---

## Home Page

**TS-001 — Home page loads and displays key content**  
Verify that the home page loads without errors, displays the hero section, and shows at least one product section with working links to product detail pages.

---

## Product Catalogue

**TS-002 — All products display on catalogue page**  
Verify that navigating to /products loads and displays all products in a grid layout with a correct product count.

**TS-003 — Product card displays core product information**  
Verify that each product card displays the product name, image, price, rating, and an "Add to Cart" button.

---

## Search

**TS-006 — Header search navigates to catalogue with results**  
Verify that entering a search term in the header search bar and submitting navigates to /products with the term applied and shows matching results.

**TS-007 — Sidebar search filters products inline**  
Verify that typing in the sidebar search field on /products filters the visible products in real time and updates the result count.

---

## Product Detail Page

**TS-004 — Product detail page displays all product data**  
Verify that a product detail page displays name, brand, price, old price (if applicable), discount badge, rating, review count, SKU, stock status, description, and specifications table.

**TS-005 — Product specs table is accurate and consistent with listing data**  
Verify that the specifications displayed on the product detail page match the expected product data and are consistent with any information shown on the catalogue listing.

---

## Filtering

**TS-008 — Category filter narrows product results**  
Verify that selecting a category in the filter sidebar shows only products from that category and the count updates.

**TS-009 — Brand filter narrows product results**  
Verify that selecting a brand from the dropdown filters results to that brand only.

**TS-010 — Price range slider filters out products above max price**  
Verify that adjusting the max price slider removes products priced above the selected value from the results.

**TS-011 — Rating filter removes products below minimum**  
Verify that selecting a minimum rating hides products rated below that threshold.

**TS-012 — In-Stock filter hides out-of-stock products**  
Verify that enabling "In Stock Only" removes all products with a stock value of zero.

**TS-013 — Clear filters button resets all active filters**  
Verify that clicking Clear resets all filter controls to defaults and restores the full product list.

---

## Sorting

**TS-014 — Price Low to High sorts products correctly**  
Verify that selecting "Price: Low to High" sorts all visible products in ascending price order consistently across all categories.

**TS-015 — Best Rated sort orders products by descending rating**  
Verify that "Best Rated" places the highest-rated products first.

**TS-016b — Newest First is the default sort order**  
Verify that on initial page load, products flagged as new appear first.

---

## Cart

**TS-016 — Add to Cart from product listing**  
Verify that clicking "Add to Cart" on a product card adds the item to the cart and increments the header badge.

**TS-017 — Add to Cart from product detail page with custom quantity**  
Verify that selecting a quantity on the PDP and adding to cart reflects the correct quantity in the cart.

**TS-018 — Cart page shows correct items, prices, and totals**  
Verify that the cart page displays each added item, correct unit price, quantity, line subtotal, overall subtotal, shipping, and total.

**TS-019 — Cart quantity controls update totals**  
Verify that increasing or decreasing quantity on the cart page updates the line subtotal and cart total accordingly.

**TS-020 — Removing an item from the cart updates the cart**  
Verify that clicking the remove button deletes the item and the cart totals recalculate.

**TS-021 — Free shipping applied when subtotal reaches threshold**  
Verify that the shipping line shows "FREE" and does not add shipping cost when the subtotal is £50 or more.

**TS-022 — Cart persists after page refresh**  
Verify that cart contents and quantities are preserved after refreshing the browser.

---

## Wishlist

**TS-023 — Adding a product to the wishlist**  
Verify that clicking the wishlist button on a product adds it to the wishlist, changes the button state, and increments the header badge.

**TS-024 — Removing a product from the wishlist**  
Verify that clicking the wishlist button again on a wishlisted product removes it and updates the badge count.

**TS-025 — Wishlist page reflects current wishlist contents**  
Verify that the /wishlist page shows all added items and allows removal.

---

## Authentication

**TS-026 — Login with valid and invalid credentials**  
Verify that submitting correct credentials logs in the user and redirects to home; submitting invalid credentials shows an error.

**TS-027 — Registration form validation and successful registration**  
Verify that all required fields are validated, password mismatch is caught, and a valid submission registers the user and redirects to home.

**TS-028 — Authenticated state and logout**  
Verify that after login the user's name appears in the header, and clicking logout ends the session and returns the Sign In button.

---

## Checkout

**TS-029 — Checkout page displays order summary and form**  
Verify that the checkout page shows the order summary with correct items and totals, and the form has all required fields.

**TS-030 — Checkout form validation**  
Verify that submitting an incomplete checkout form shows appropriate validation errors for each missing required field.

**TS-031 — Successful checkout flow**  
Verify that completing the checkout form with valid data and submitting redirects to /order-success with an order reference number and clears the cart.

---

## Navigation and Responsive

**TS-032 — Mobile navigation menu opens and closes**  
Verify that on a narrow viewport the hamburger icon is visible, tapping it opens the navigation menu, and tapping again (or navigating) closes it.

**TS-033 — Header navigation links reach correct pages**  
Verify that each link in the navigation bar leads to the expected page (Products, Laptops filter, Monitors filter, Accessories filter, About).

**TS-034 — Breadcrumb navigation on product detail page**  
Verify that breadcrumbs on the PDP are accurate and each segment links to the correct page.

---

## Data Consistency

**TS-035 — Product price on listing matches price on detail page**  
Verify that the price displayed on a product card is the same as the price shown on the product's detail page.

**TS-036 — Out-of-stock products cannot be added to cart**  
Verify that the "Add to Cart" button is disabled or absent for out-of-stock products, and that the product cannot be added to the cart through any available UI.

**TS-037 — Discount badge calculation is correct**  
Verify that where an old price is present, the displayed discount percentage accurately reflects the difference between old price and current price.
