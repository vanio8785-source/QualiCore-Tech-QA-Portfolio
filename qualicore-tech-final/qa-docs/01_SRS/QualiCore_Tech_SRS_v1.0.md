# Software Requirements Specification (SRS)
## QualiCore Tech — Manual QA Portfolio E-Commerce Application
**Document Version:** 1.0  
**Date:** March 2026  
**Status:** Approved for QA

---

## 1. Project Overview

QualiCore Tech is a demo e-commerce web application specialising in technology products including laptops, desktop PCs, monitors, components, storage, and accessories. The application is designed as a realistic single-page application (SPA) to provide a comprehensive environment for manual QA practice, test case design, bug reporting, exploratory testing, and portfolio presentation.

The application simulates a real-world UK-based tech retailer, complete with a product catalogue, search and filtering, shopping cart, wishlist, user authentication, and checkout flow. Prices are displayed in GBP (£).

---

## 2. Scope

### 2.1 In Scope

- Frontend web application (React SPA)
- Product browsing, search, filtering, and sorting
- Product detail pages with specifications
- Shopping cart with quantity management
- Wishlist functionality
- User authentication (login and registration)
- Checkout flow with form validation
- Responsive design for desktop and mobile
- Client-side data persistence via localStorage
- Static informational pages (About, Contact, Terms)

### 2.2 Out of Scope

- Backend API or database integration
- Real payment processing
- Email notifications
- Admin/vendor portal
- Real user account management
- Order history retrieval
- Third-party authentication (OAuth)

---

## 3. Goals

- Provide a realistic, visually professional e-commerce application for QA practice
- Include a sufficient range of features to support functional, exploratory, and regression testing
- Embed reproducible intentional defects across multiple functional areas
- Support test case design, bug reporting, and traceability practice
- Be deployable as a live portfolio project

---

## 4. User Roles

| Role | Description |
|------|-------------|
| Guest User | Can browse products, search, filter, view product details, and add items to cart and wishlist. Cannot access checkout without navigating directly. |
| Authenticated User | Can log in with demo credentials, access a personalised greeting, proceed through checkout, and log out. |
| Demo Account | Pre-seeded credential set: demo@qualicoretech.com / Demo1234 |

---

## 5. Functional Requirements

### FR-01 — Home Page
- The home page shall display a hero section with a call-to-action linking to the product catalogue.
- The home page shall display featured product sections (e.g., new arrivals, best sellers).
- Products displayed on the home page shall link to their respective product detail pages.

### FR-02 — Product Catalogue
- The system shall display all available products in a grid layout.
- Products shall be filterable by: category, brand, price range, minimum rating, and stock availability.
- Products shall be sortable by: newest, best rated, price low-to-high, price high-to-low, name A-Z, name Z-A.
- The system shall display a count of filtered results.
- Filters shall be clearable via a single action.

### FR-03 — Search
- The system shall allow users to search products by name, brand, category, and short description.
- Search shall be accessible from the header (navigates to catalogue with query applied) and from the catalogue sidebar.
- Search results shall update in real time as filters are applied in the sidebar.

### FR-04 — Product Detail Page
- Each product shall have a dedicated detail page accessible via its URL slug.
- The page shall display: product name, brand, images/gallery, price, old price (if discounted), discount badge, rating, review count, SKU, stock status, short description, full description, and specifications table.
- Users shall be able to select a quantity and add the product to the cart.
- Users shall be able to add or remove the product from their wishlist.
- Related products from the same category shall be displayed.

### FR-05 — Shopping Cart
- Users shall be able to add products to the cart from both the product card and product detail page.
- The cart shall support quantity increase and decrease per item.
- Removing an item at quantity 1 shall remove it from the cart.
- The cart shall display a subtotal, shipping cost, and total.
- Shipping shall be free for orders above £50; otherwise £5.99 applies.
- The cart icon in the header shall display the current item count.

### FR-06 — Wishlist
- Users shall be able to add products to a wishlist.
- The wishlist shall be accessible via a dedicated page.
- Users shall be able to remove items from the wishlist.
- The wishlist icon in the header shall display the current count.

### FR-07 — Authentication
- The system shall provide a login page accepting email and password.
- The system shall provide a registration page accepting first name, last name, email, password, and confirm password.
- On successful login, the user's name shall be displayed in the header.
- Users shall be able to log out via a dropdown menu.
- Authentication state shall persist via localStorage.

### FR-08 — Checkout
- The checkout page shall be accessible from the cart.
- The checkout form shall collect: first name, last name, email, phone, delivery address, city, postcode, card holder name, card number, expiry date, and CVV.
- Required fields shall be validated on form submission.
- On successful submission, the user shall be redirected to an order success page.
- An order reference number shall be generated and displayed.

### FR-09 — Static Pages
- The system shall include an About page, Contact page, and Terms & Conditions page.
- Navigation links to these pages shall be available in the footer.

### FR-10 — Navigation
- The header shall include: logo (links to home), search bar, wishlist icon, cart icon, and sign-in / account menu.
- The navigation bar shall include links to: Products, Laptops, Monitors, Accessories, and About.
- The mobile navigation menu shall collapse and expand correctly on smaller screen sizes.

---

## 6. Non-Functional Requirements

### NFR-01 — Performance
- Pages shall load within 2 seconds under normal conditions.
- Filtering and sorting shall respond within 500ms.

### NFR-02 — Usability
- The application shall be usable without prior training.
- Error messages shall be clear and actionable.

### NFR-03 — Compatibility
- The application shall function correctly on the latest versions of Chrome, Firefox, Safari, and Edge.
- The application shall be responsive across desktop (1280px+), tablet (768px–1279px), and mobile (< 768px) viewports.

### NFR-04 — Reliability
- Cart and wishlist data shall persist across page refreshes via localStorage.
- Authentication state shall persist until explicitly logged out.

### NFR-05 — Security (Demo Scope)
- No real payment data is processed.
- Credentials are demo-only and hardcoded.

---

## 7. Assumptions

- Users have a modern web browser with JavaScript enabled.
- No backend or real database is in use; all data is local and static.
- Product data is seeded from a local JSON file and does not change.
- The application is deployed as a static SPA (e.g., on Vercel).
- The demo credentials (demo@qualicoretech.com / Demo1234) are known to the user.

---

## 8. Constraints

- No server-side logic; all processing is client-side.
- No real payment gateway integration.
- Authentication is simulated; any registration "creates" a session without persistence beyond the browser.
- Product stock levels are static and do not decrement on purchase.

---

## 9. Exclusions

- Order history
- Account settings / profile editing
- Address book
- Discount codes / vouchers
- Delivery tracking
- Stock management
- Multi-currency support

---

## 10. Feature List Summary

| Feature | Included |
|---------|----------|
| Home Page | ✅ |
| Product Catalogue | ✅ |
| Category Filtering | ✅ |
| Brand Filtering | ✅ |
| Price Range Filter | ✅ |
| Rating Filter | ✅ |
| In-Stock Filter | ✅ |
| Sorting (6 options) | ✅ |
| Search (header + sidebar) | ✅ |
| Product Detail Page | ✅ |
| Gallery / Image Viewer | ✅ |
| Specs Table | ✅ |
| Related Products | ✅ |
| Shopping Cart | ✅ |
| Quantity Management | ✅ |
| Shipping Calculation | ✅ |
| Wishlist | ✅ |
| Login | ✅ |
| Registration | ✅ |
| Checkout Form | ✅ |
| Order Success Page | ✅ |
| Responsive Design | ✅ |
| About / Contact / Terms | ✅ |
| 404 Not Found Page | ✅ |
