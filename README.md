# Academic Atelier

A premium frontend educational platform built with React and Vite.

Academic Atelier simulates a personalized learning experience where users can explore courses, complete enrollment, view dynamic curriculum pages, track progress, and watch course-specific video lessons.

## Live Demo

GitHub Pages URL:

https://shashwat-drona.github.io/AcademicWebsite/

## Project Highlights

- Frontend-only educational product prototype
- Dynamic multi-page flow with connected user journey
- Personalized learning layer with Studio Mood Engine
- Learning DNA Card page for learner identity profiling
- Course-specific curriculum and player behavior
- Fully deployable on GitHub Pages via GitHub Actions

## Core Features

### 1) Serialized Learning Flow

The project follows a structured flow:

Atelier -> Enrollment (Library) -> Curriculum -> Archive -> Player

This makes the platform feel like a real product journey, not disconnected static pages.

### 2) Dynamic Course Mapping

When a user selects a course in Atelier:

- The same course appears in Enrollment summary
- The same course opens in Curriculum page
- The same lesson/course appears in the Player page

This is handled through shared course data + persisted selected course key.

### 3) Studio Mood Engine (Novel Feature)

Dashboard includes three functional modes:

- Deep Focus
- Exploration
- Exam Sprint

Mode changes affect behavior, not only text. Examples:

- card visibility changes
- urgency emphasis changes
- quick action behavior changes
- progress and stats values change

### 4) Learning DNA Card (Novel Feature)

A dedicated personalized profile page with:

- Focus Index
- Curiosity Index
- Sprint Index
- USP evidence snapshot
- personalized recommendations
- weekly ritual plan

### 5) Smart Profile Dropdown

Top-right profile panel includes:

- user information
- My Courses tab
- Learning DNA tab

My Courses entries can open the player with mapped lesson context.

### 6) Dynamic Player

Course player no longer stays static.

- It reads selected lesson key
- Loads matching title and track
- Loads mapped video link
- Supports previous/next lesson switching

## Pages

- Atelier (Explore)
- Enrollment (Checkout)
- Curriculum (Course Details)
- Archive (Dashboard)
- Course Player
- Learning DNA

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Lucide React icons
- CSS (modular page/component styles)

## Project Structure (Key)

- src/pages/Explore.jsx
- src/pages/Checkout.jsx
- src/pages/CourseDetails.jsx
- src/pages/Dashboard.jsx
- src/pages/CoursePlayer.jsx
- src/pages/LearningDNA.jsx
- src/components/Navbar.jsx
- src/data/courses.js

## Run Locally

1) Install dependencies:

```bash
npm install
```

2) Start development server:

```bash
npm run dev
```

3) Open:

http://localhost:5173/AcademicWebsite/

## Build

```bash
npm run build
```

## GitHub Pages Deployment

This repo is configured to deploy with GitHub Actions.

### One-time setup

1. Go to repository Settings -> Pages
2. Under Build and deployment, set Source to GitHub Actions

### Deploy

Any push to main triggers deployment automatically.

Workflow file:

.github/workflows/deploy.yml

## Current Scope

This is intentionally frontend-only:

- no backend API
- no database
- no real authentication
- no real payment gateway

All personalization is simulated through frontend state and localStorage to demonstrate product behavior and UX.

## USP Summary

Academic Atelier is not a static course site. It is a personalized learning experience with:

- behavior-based study modes
- learner DNA profiling
- dynamic course continuity across pages

This makes it presentation-ready as a frontend product concept with strong novelty.
