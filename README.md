# 🏗️ Property Listing CMS

A headless CMS for real estate property listings built with **Strapi + Node.js**. Features dynamic filtering, image galleries, and lead capture forms via REST API.

## Features
- Full CRUD for property listings
- Filter by type, price, location, BHK
- Image gallery support
- Lead capture form with email notification
- Role-based access (admin, agent, viewer)
- REST API ready for any frontend

## Tech Stack
- Strapi v4 (Headless CMS)
- Node.js + SQLite (dev) / PostgreSQL (prod)
- Nodemailer for lead email alerts
- dotenv for environment config

## Quick Start
```bash
npm install
cp .env.example .env
npm run develop
```

Admin panel available at: `http://localhost:1337/admin`

API base URL: `http://localhost:1337/api`

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/properties | List all properties |
| GET | /api/properties/:id | Get property by ID |
| POST | /api/properties | Create property (auth required) |
| PUT | /api/properties/:id | Update property (auth required) |
| DELETE | /api/properties/:id | Delete property (auth required) |
| POST | /api/leads | Submit a lead inquiry |

## Property Filters
```
GET /api/properties?filters[type][$eq]=apartment&filters[price][$lte]=5000000&filters[city][$eq]=Gurugram
```

## Folder Structure
```
api/
├── property/       # Property content type
├── lead/           # Lead inquiry content type
config/
└── middlewares.js
services/
└── emailService.js
```
