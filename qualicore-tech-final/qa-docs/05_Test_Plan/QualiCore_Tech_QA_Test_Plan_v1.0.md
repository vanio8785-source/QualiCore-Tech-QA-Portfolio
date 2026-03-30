# QualiCore Tech — QA Test Plan v1.0

## 1. Introduction
This test plan defines the testing approach for QualiCore Tech, a demo e-commerce web application used for Manual QA training and portfolio development.

## 2. Objectives
- Verify all core e-commerce functionality works as specified
- Identify and document defects with professional bug reports
- Validate UI/UX across desktop and mobile viewports
- Ensure data consistency across product catalog
- Practice structured QA methodology

## 3. Scope

### 3.1 In Scope
- Home page layout and hero section
- Product catalog browsing, pagination
- Product detail pages (specs, images, pricing)
- Search functionality (name, brand, category)
- Filter functionality (category, brand, price, availability)
- Sort functionality (price, name, rating)
- Shopping cart (add, remove, update, persist)
- Wishlist (add, remove, persist)
- User authentication (login, register, logout)
- Checkout form and validation
- Order confirmation flow
- Responsive design (mobile, tablet, desktop)
- Static pages (About, Contact, Terms)
- Navigation and routing

### 3.2 Out of Scope
- Backend/API testing (no backend exists)
- Performance/load testing
- Security/penetration testing
- Accessibility compliance auditing (WCAG)
- Cross-browser testing beyond Chrome/Firefox/Edge
- Payment processing (demo only)

## 4. Test Types
| Type | Description |
|------|-------------|
| Smoke Testing | Verify app launches and core navigation works |
| Functional Testing | Verify each feature against requirements |
| Exploratory Testing | Unscripted investigation to discover unexpected defects |
| Regression Testing | Re-test after fixes to ensure no new issues |
| UI/UX Testing | Verify layout, styling, responsiveness |
| Boundary/Edge Testing | Test limits (empty cart, max quantity, long strings) |

## 5. Test Environment
| Component | Detail |
|-----------|--------|
| Application | QualiCore Tech (React + Vite) |
| Browser | Chrome 120+, Firefox 120+, Edge 120+ |
| OS | Windows 11, macOS Sonoma |
| Viewport | Desktop (1920×1080), Tablet (768×1024), Mobile (375×812) |
| Data | Static JSON, localStorage persistence |

## 6. Entry Criteria
- Application builds and runs without fatal errors
- All pages are accessible via navigation
- Product data loads correctly
- Test environment is set up

## 7. Exit Criteria
- All planned test cases executed
- All critical/high bugs documented
- Test summary report completed
- No blocking defects remain for core flows

## 8. Defect Management
- Defects logged with: ID, title, severity, priority, steps to reproduce, expected/actual results
- Severity levels: Critical, High, Medium, Low
- Priority levels: P1 (Urgent), P2 (High), P3 (Medium), P4 (Low)

## 9. Risks
| Risk | Mitigation |
|------|-----------|
| localStorage data loss | Document as known limitation |
| No backend validation | Test client-side validation thoroughly |
| Intentional defects mixed with real bugs | Use defect map for reference |
| Static data may not cover all edge cases | Design test data to supplement |

## 10. Assumptions
- Tester has access to Chrome DevTools
- App is tested locally via `npm run dev`
- No real payment or email functionality exists
- Demo credentials are documented in README
