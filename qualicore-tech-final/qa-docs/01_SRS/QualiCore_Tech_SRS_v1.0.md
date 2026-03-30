# QualiCore Tech — Software Requirements Specification (SRS) v1.0

## 1. Introduction

### 1.1 Purpose
This document defines the functional and non-functional requirements for QualiCore Tech, a demo e-commerce web application built for Manual QA training and portfolio practice.

### 1.2 Scope
QualiCore Tech simulates a realistic online electronics retail store. It allows users to browse products, search, filter, sort, manage a cart and wishlist, register/login, and complete a checkout flow. The application is frontend-only with localStorage persistence.

### 1.3 Goals
- Provide a realistic e-commerce user experience
- Support Manual QA practice including test case design, exploratory testing, and bug reporting
- Serve as a portfolio-ready project for junior QA professionals

## 2. User Roles

| Role | Description |
|------|-------------|
| Guest | Can browse, search, filter, sort, view products, add to cart/wishlist |
| Registered User | Can log in with demo credentials, same capabilities as Guest |
| QA Tester | Uses the app to practice testing workflows (not an in-app role) |

## 3. Functional Requirements

### 3.1 Product Catalog (FR-001 to FR-005)
- **FR-001**: Display all products on the catalog page with image, name, price, and rating
- **FR-002**: Each product links to a detail page with full specifications
- **FR-003**: Products belong to categories: Laptops, Desktops, Components, Peripherals, Networking, Storage, Audio
- **FR-004**: Products display discount/sale pricing where applicable
- **FR-005**: Out-of-stock products are visually indicated

### 3.2 Search (FR-006 to FR-009)
- **FR-006**: Search bar available in the header on all pages
- **FR-007**: Search matches product name, brand, and category (case-insensitive)
- **FR-008**: Partial matches are supported
- **FR-009**: Empty search results display a helpful empty state

### 3.3 Filtering (FR-010 to FR-014)
- **FR-010**: Filter by category
- **FR-011**: Filter by brand
- **FR-012**: Filter by price range
- **FR-013**: Filter by availability (in-stock / out-of-stock)
- **FR-014**: Clear all filters resets the view

### 3.4 Sorting (FR-015 to FR-018)
- **FR-015**: Sort by price (low to high)
- **FR-016**: Sort by price (high to low)
- **FR-017**: Sort by name (A-Z)
- **FR-018**: Sort by rating (high to low)

### 3.5 Cart (FR-019 to FR-024)
- **FR-019**: Add products to cart from catalog or detail page
- **FR-020**: View cart with item list, quantities, and subtotal
- **FR-021**: Update item quantity in cart
- **FR-022**: Remove items from cart
- **FR-023**: Cart badge shows total item count in header
- **FR-024**: Cart persists across page refreshes via localStorage

### 3.6 Wishlist (FR-025 to FR-028)
- **FR-025**: Add/remove products to/from wishlist
- **FR-026**: View wishlist page with saved items
- **FR-027**: Wishlist persists across page refreshes
- **FR-028**: Wishlist count shown in header

### 3.7 Authentication (FR-029 to FR-032)
- **FR-029**: Login page with email and password fields
- **FR-030**: Register page with name, email, and password fields
- **FR-031**: Demo credentials: demo@qualicoretech.com / Demo1234
- **FR-032**: Logout clears session

### 3.8 Checkout (FR-033 to FR-037)
- **FR-033**: Checkout form with customer details, delivery address, and payment fields
- **FR-034**: Required field validation on submission
- **FR-035**: Order summary sidebar with item list, subtotal, shipping, and total
- **FR-036**: Free shipping for orders over £50
- **FR-037**: Order confirmation page after successful submission

### 3.9 Static Pages (FR-038 to FR-040)
- **FR-038**: About page with brand information
- **FR-039**: Contact page with contact details
- **FR-040**: Terms & Conditions page

## 4. Non-Functional Requirements

| ID | Requirement | Target |
|----|------------|--------|
| NFR-001 | Performance | Pages load within 3 seconds on broadband |
| NFR-002 | Responsiveness | Usable on 320px–1920px viewports |
| NFR-003 | Browser Support | Chrome, Firefox, Edge (latest) |
| NFR-004 | Accessibility | Basic keyboard navigation and semantic HTML |
| NFR-005 | Data Persistence | localStorage for cart, wishlist, auth state |

## 5. Assumptions
- No real payment processing occurs
- No backend server or database is used
- Product data is static JSON
- Authentication is simulated (no server validation)

## 6. Constraints
- Frontend-only (React + Vite)
- No API integrations
- No real user accounts
- localStorage has ~5MB limit per origin

## 7. Exclusions
- Order history beyond current session
- Real email notifications
- Admin panel
- Inventory management
- Multi-language support
- Payment gateway integration
