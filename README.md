# DreamPilot Analytics Platform UI

A modern, animated **Analytics Dashboard UI** built with strict feature-based architecture and premium motion design.

This repository is a reusable **DreamPilot template** designed for OpenClaw-driven project initialization.

---

## Purpose

This project provides a production-ready analytics foundation for:

- SaaS dashboards
- Product analytics
- Finance insights
- CRM metrics
- Operational reporting systems

It is designed to be **cloned and extended**, not modified structurally.

---

## Core Features

### Overview
- KPI summary cards
- Time range selector
- Traffic and growth trends
- Conversion highlights

### Realtime
- Active users counter
- Live event feed (mocked)
- Auto-refresh indicator
- Live status badge

### Reports
- Saved reports list
- Filters and segmentation
- Export preview panel

### Funnels
- Multi-step funnel visualization
- Drop-off indicators
- Conversion percentages

### Cohorts
- Cohort retention grid
- Retention curves
- Heatmap visualization

### Retention
- Daily / weekly / monthly retention
- Churn metrics
- Trend comparisons

### Performance
- Load time metrics
- Error rate indicators
- Service performance summaries

### Exports
- CSV / PDF export UI
- Export job status tracking
- Download history panel

---

## UX & Design System

- Floating collapsible navigation
- Icon-first sidebar with hover expansion
- Subtle motion transitions (150–250ms)
- Animated KPI counters
- Chart mount animations
- Skeleton loaders (no blocking spinners)
- Dark & light mode support
- Financial-style semantic colors:
  - Green → Positive
  - Amber → Warning
  - Red → Negative

---

## Folder Structure (Strict)

src/
├─ components/ # Shared UI primitives
├─ features/
│ └─ analytics/
│ ├─ overview/
│ ├─ realtime/
│ ├─ reports/
│ ├─ funnels/
│ ├─ cohorts/
│ ├─ retention/
│ ├─ performance/
│ └─ exports/
├─ layouts/ # App shell & navigation
├─ hooks/ # Shared hooks
├─ lib/ # Utilities
├─ pages/ # Thin composition-only pages


---

## Architecture Rules

- Pages contain ZERO business logic
- No cross-feature imports
- All feature logic lives inside `features/analytics/*`
- Each feature exposes public exports via `index.ts`
- Shared UI primitives live in `components/`
- TypeScript strict mode enforced

Violating these rules breaks DreamPilot compatibility.

---

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- Lucide Icons

---

## Development

### Requirements
- Node.js 18+
- npm

### Setup
```sh
git clone <REPO_URL>
cd <PROJECT_NAME>
npm install
npm run dev

Deployment

Designed for deployment via Lovable.

Automatic commits

Preview builds

Production publishing

Custom domain support

Intended Usage

Ideal for:

SaaS analytics dashboards

Admin reporting systems

Startup MVPs

Enterprise data platforms

AI-extended internal tools
