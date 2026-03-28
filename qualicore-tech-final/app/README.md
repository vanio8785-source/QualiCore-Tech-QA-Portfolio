# QualiCore Tech

**Manual QA Portfolio E-Commerce Project**

QualiCore Tech is a realistic demo e-commerce web application built for Manual QA practice, test case design, bug reporting, exploratory testing, and portfolio presentation. It simulates a UK-based technology retailer with a full product catalogue, shopping cart, wishlist, authentication, and checkout flow.

---

## 🔗 Live Demo

[https://YOUR-LIVE-LINK.vercel.app](https://YOUR-LIVE-LINK.vercel.app)

## 📂 Repository

[https://github.com/YOUR_USERNAME/qualicore-tech](https://github.com/YOUR_USERNAME/qualicore-tech)

---

## Project Overview

- 50+ products across 6 categories: Laptops, Desktop PCs, Monitors, Components, Accessories, Storage & Networking
- Product detail pages with image gallery, specifications table, ratings, and stock status
- Search by product name, brand, category, and description
- Filtering by category, brand, price range, minimum rating, and in-stock availability
- Sorting by price, name, rating, and newest
- Shopping cart with quantity management, subtotal, shipping calculation, and localStorage persistence
- Wishlist with add/remove and session persistence
- User authentication (login and registration) with demo credentials
- Checkout flow with form validation and order confirmation
- Responsive design for desktop, tablet, and mobile
- Intentional reproducible defects embedded for QA practice

---

## QA Scope

This project supports: Manual QA training, exploratory testing, functional testing, regression testing, bug reporting, and portfolio presentation.

Full QA documentation is available in the `qa-docs/` folder.

---

## Intentional Defects

The application contains reproducible defects across:

- Cart subtotal calculation, quantity stock cap
- Sorting order for a specific product category
- Search result inconsistency for a specific brand
- Product detail: broken image, incorrect spec, page title typo
- Authentication: missing password validation, weak password accepted
- Checkout: postcode not validated, card number accepts too few digits
- Wishlist: items beyond 8 lost on refresh

---

## Tech Stack

React 18 · Vite · React Router v6 · Tailwind CSS · localStorage (no backend)

---

## Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/qualicore-tech.git
cd qualicore-tech
npm install
npm run dev
```

## Demo Credentials

- **Email:** demo@qualicoretech.com
- **Password:** Demo1234

---

Built for QA learners and junior testers to strengthen practical testing skills and build portfolio-ready documentation.
