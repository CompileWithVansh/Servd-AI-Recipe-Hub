# Servd AI Recipe Hub

A full-stack AI recipe platform with:
- Frontend: Next.js 16 (App Router)
- Backend: Strapi 5 (PostgreSQL)
- Auth: Clerk
- AI: Google Gemini
- Protection & Rate Limits: Arcjet

---

## Project Overview

Servd helps users:
- Generate recipes from pantry ingredients
- Save and manage recipes
- Scan pantry items (AI-powered)
- Explore categories/cuisines and recipe recommendations
- Use free/pro access patterns with rate limits

This repository is split into two apps:
- frontend/ → Next.js application
- backend/ → Strapi CMS/API

---

## Tech Stack

### Frontend (frontend/)
- Next.js 16.2.2
- React 19
- Tailwind CSS 4
- Clerk (@clerk/nextjs)
- Arcjet (@arcjet/next)
- Gemini SDK (@google/generative-ai)
- React PDF renderer

### Backend (backend/)
- Strapi 5.42.0
- PostgreSQL (pg)
- Users & permissions plugin

---

## Repository Structure

Servd-AI-Recipe-Hub/
├── frontend/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (main)/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.jsx
│   ├── actions/
│   │   ├── mealdb.actions.js
│   │   ├── pantry.actions.js
│   │   └── recipe.actions.js
│   ├── components/
│   │   ├── ui/
│   │   └── *.jsx
│   ├── hooks/
│   │   └── use-fetch.js
│   ├── lib/
│   │   ├── arcjet.js
│   │   ├── checkUser.js
│   │   ├── data.js
│   │   └── utils.js
│   ├── public/
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package.json
│   └── proxy.js
├── backend/
│   ├── config/
│   ├── database/
│   ├── src/
│   │   ├── api/
│   │   │   ├── pantry-item/
│   │   │   ├── recipe/
│   │   │   └── saved-recipe/
│   │   └── extensions/
│   ├── public/
│   ├── package.json
│   └── README.md
└── package-lock.json

---

## Environment Variables

Frontend required

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
ARCJET_KEY=
NEXT_PUBLIC_STRAPI_URL=
STRAPI_API_TOKEN=
GEMINI_API_KEY=

Frontend optional

UNSPLASH_ACCESS_KEY=

Backend

Configure Strapi/database environment values as per Strapi defaults:
- DB host
- DB name
- DB user
- DB password
- App keys
- Admin JWT secrets

---

## Local Development

1) Backend

cd backend  
npm install  
npm run develop  

Backend runs on port 1337

2) Frontend

cd frontend  
npm install  
npm run dev  

Frontend runs on port 3000

---

## Build Commands

Frontend

cd frontend  
npm run build  
npm run start  

Backend

cd backend  
npm run build  
npm run start  

---

## Deployment Guide

Frontend (Vercel)

- Framework Preset: Next.js  
- Root Directory: frontend  
- Build Command: npm run build  
- Install Command: npm install  

Add all frontend environment variables in Vercel settings.

Backend (Strapi)

Deploy using Railway / Render / Strapi Cloud with PostgreSQL.

After deployment, set:

NEXT_PUBLIC_STRAPI_URL=<your-backend-url>

---

## Key Functional Areas

- Auth + User context: Clerk + user sync logic
- Recipe generation: Gemini via server actions
- Pantry scanning: Gemini Vision
- Saved data: Strapi content types
- Abuse protection: Arcjet

---

## NPM Scripts

Frontend

npm run dev  
npm run build  
npm run start  
npm run lint  

Backend

npm run develop  
npm run build  
npm run start  
npm run deploy  
npm run upgrade  

---

## Notes

- Uses proxy.js for Arcjet + Clerk route protection
- Path alias: @/* → frontend root
- Frontend and backend deployed independently

---

## License

Personal project by Vansh Gupta
