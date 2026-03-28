# Interview Talking Points
## QualiCore Tech — Manual QA Portfolio Project

---

## How to Talk About This Project in Interviews

Use this document to prepare confident, structured answers about your QualiCore Tech project. Each section maps to a common interview question type.

---

## "Tell me about a project you've worked on."

*Suggested answer:*

"I built and fully tested a manual QA portfolio project called QualiCore Tech — a React-based e-commerce demo application. I designed the whole QA cycle myself: I reviewed the requirements, wrote user stories and acceptance criteria, designed 35 test cases across all major functional areas, executed them, documented 15 bugs, and wrote a test summary report.

The app had features like product search, filtering, sorting, a shopping cart, wishlist, authentication, and checkout. I found bugs across all of those areas — things like a cart subtotal calculation error, a sorting defect that affected a whole product category, and missing validation in the checkout form.

It gave me experience with the full QA lifecycle from requirements to reporting."

---

## "What types of testing did you perform?"

- **Functional testing** — verified each feature worked as specified in the requirements
- **Negative testing** — tested invalid inputs (empty forms, wrong passwords, below-minimum card numbers)
- **Boundary testing** — tested price filter edges, stock quantity limits, wishlist capacity
- **Exploratory testing** — unscripted sessions to discover unexpected behaviours
- **Regression awareness** — verified that filtering changes didn't break sorting, and vice versa
- **UI/Responsive testing** — tested on desktop and mobile viewports using Chrome DevTools

---

## "How do you write a good bug report?"

*Reference BUG-001 or BUG-005 as examples:*

"I follow a structured format: Bug ID, title, module, severity and priority ratings, environment details, preconditions, step-by-step reproduction steps, the expected result, the actual result, reproducibility, and any supporting notes.

For example, I found a cart subtotal bug where a specific product was priced as if one fewer unit existed in the cart. The cart showed the right quantity — say, 2 — but charged for 1. I documented exactly which product triggered it, which steps to reproduce it reliably, the impact on financial trust, and the severity as High because it directly affects a monetary value shown to users."

---

## "How do you decide what to test first?"

"I prioritise by risk and user impact. I start with the main user flows — browsing, adding to cart, and checkout — because those are what the business depends on most. Then I move to edge cases and boundary conditions. I also look at areas that are historically bug-prone, like form validation and state management.

On this project, my test plan defined entry and exit criteria, and I mapped all test cases to requirements via an RTM so I could see which areas had coverage and which didn't."

---

## "What's an RTM and why is it useful?"

"A Requirements Traceability Matrix links requirements to the user stories, acceptance criteria, test scenarios, and test cases that cover them — and then to any bugs found. It gives you full traceability from the requirement all the way to evidence of testing.

On QualiCore Tech I built an RTM linking 33 requirements across all functional areas. It helped me identify gaps in coverage and show that every feature had at least one test case and scenario designed for it."

---

## "Tell me about a bug you found that you're proud of."

*Suggested — BUG-001 or BUG-005:*

"I found a sorting defect that only affected one specific product category — Components. When you selected 'Price: Low to High', every other category sorted correctly, but Components sorted in descending order instead of ascending. It was subtle because it only appeared when that specific category filter was active alongside that sort option.

I documented the exact steps to reproduce it and noted the impact: users browsing components by price would see the most expensive items first, which is the opposite of what they selected. It's a good example of a defect that wouldn't show up in basic smoke testing but surfaces when you test combinations of features together."

---

## "How do you handle a situation where you find many bugs?"

"I triage by severity and priority. Critical or High severity bugs — especially ones that block core user flows or affect financial data — get flagged immediately. Medium ones are documented thoroughly but don't necessarily block further testing. Low severity cosmetic issues I note and batch at the end.

On this project I found 15 bugs. I classified 2 as High (the cart calculation error and the sorting defect), 9 as Medium, and 4 as Low. My test summary report included a release recommendation based on that breakdown — I recommended the two High severity bugs be fixed before any production release."

---

## Key Numbers to Remember

| Metric | Value |
|--------|-------|
| Total test cases | 35 |
| Test scenarios | 37 |
| User stories | 50 |
| Bugs documented | 15 |
| Pass rate | 62.9% |
| High severity bugs | 2 |
| Medium severity bugs | 9 |
| Low severity bugs | 4 |
| Pages/routes tested | 13 |
| Products in catalogue | 50+ |
