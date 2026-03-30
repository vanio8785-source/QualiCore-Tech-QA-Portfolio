# QualiCore Tech — Portfolio Submission Guide

## What This Package Contains

```
qualicore-tech-final/
├── app/                          ← The runnable web application
│   ├── src/                      ← React source code
│   ├── public/                   ← Static assets
│   ├── package.json              ← Dependencies and scripts
│   ├── README.md                 ← Project documentation
│   ├── vercel.json               ← Deployment config
│   └── vite.config.ts            ← Build config
│
├── qa-docs/                      ← Complete QA documentation
│   ├── 01_SRS/                   ← Software Requirements Specification
│   ├── 02_User_Stories/          ← User stories with backlog
│   ├── 03_Acceptance_Criteria/   ← Acceptance criteria matrix
│   ├── 04_RTM/                   ← Requirements Traceability Matrix
│   ├── 05_Test_Plan/             ← Test plan document
│   ├── 06_Test_Scenarios/        ← 30 test scenarios
│   ├── 07_Test_Cases/            ← 22+ detailed test cases
│   ├── 08_Bug_Reports/           ← 17+ professional bug reports
│   ├── 09_Test_Execution/        ← Execution logs and evidence index
│   ├── 10_Test_Summary_Report/   ← Final test summary
│   └── 11_Portfolio_Assets/      ← CV, LinkedIn, interview materials
│
└── portfolio-readme/
    └── Portfolio_Submission_Guide.md  ← This file
```

## How to Run the App

```bash
cd app
npm install
npm run dev
```

The app will start at http://localhost:5173 (or the next available port).

To build for production:
```bash
npm run build
npm run preview
```

## Demo Credentials
- **Email:** demo@qualicoretech.com
- **Password:** Demo1234

## How to Deploy

### Vercel (Recommended)
1. Push the `app/` folder to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will auto-detect the Vite config and deploy
4. The `vercel.json` file handles SPA routing

### Alternative
Any static hosting that supports SPA routing will work (Netlify, GitHub Pages with redirect config, etc.).

## How to Use the QA Documents

### For GitHub
Upload the entire `qa-docs/` folder to your GitHub repository. It demonstrates your full QA lifecycle capability.

### For Job Applications
- Use `11_Portfolio_Assets/QualiCore_Tech_CV_Project_Description.md` for your CV/resume
- Use `11_Portfolio_Assets/QualiCore_Tech_LinkedIn_Project_Description.md` for your LinkedIn profile
- Review `11_Portfolio_Assets/QualiCore_Tech_Interview_Talking_Points.md` before interviews

### For Interview Discussions
Be prepared to discuss:
1. How you created the test plan and test cases
2. How you traced requirements → stories → tests → defects (RTM)
3. Specific bugs you found, how you reproduced them, and how you documented them
4. Your approach to severity vs. priority assessment
5. What types of testing you performed (smoke, functional, exploratory, regression)

## What to Upload to GitHub

**Option A — Single Repository:**
Upload everything to one repo:
```
qualicore-tech/
├── app/
├── qa-docs/
└── README.md (use the app README or create a root-level one)
```

**Option B — Separate Repositories:**
- Repo 1: `qualicore-tech` — the app source code
- Repo 2: `qualicore-tech-qa` — the QA documentation

## What to Include in Your CV

Under **Projects** or **Portfolio**:

> **QualiCore Tech — Manual QA Portfolio Project**
> - Tested a full-featured e-commerce web application (React/Vite)
> - Created SRS, user stories, test plan, 22+ test cases, and 17+ bug reports
> - Built RTM tracing requirements through to defects
> - Practiced exploratory, functional, regression, and UI testing

## What to Include on LinkedIn

Add as a **Featured Project** with:
- Title: "QualiCore Tech — QA Portfolio Project"
- Description: Use the content from `11_Portfolio_Assets/QualiCore_Tech_LinkedIn_Project_Description.md`
- Link: Your GitHub repo URL and/or live demo URL

## Tips for Interviews

1. **Know the app** — Be able to demo the app and show bugs live
2. **Know your docs** — Be able to explain your test plan, RTM, and bug reports
3. **Know the defects** — Pick 3-4 bugs you can describe in detail with steps, expected vs actual, and severity rationale
4. **Show process** — Emphasize that you followed a structured QA methodology, not just random clicking
5. **Be honest** — This is a training project with intentional defects. Frame it as demonstrating your ability to find, document, and communicate issues professionally
