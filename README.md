# Edusync
A school management system for Ugandan Secodary Schools (S1 - S6).

## Description
Edusync is a cloud hosted school management platform that manages students, teachers, attendance, and fees. Schools access it through any browser with no installation needed.

## Tech Stack
- HTML, CSS, JavaScript (Frontend)
- Node.js (Runtime)
- Express (Backend Framework)
- SQLite (Database - development), PostgreSQL (production)

## For schools
No installation needed. Visit the Edusync URL, login with your with your school credentials if you have an account or sign up and start managing your insitution immediately.

## For Developers
1. Install Node.js v24.13.0 from nodejs.org
2. Install Git from git-scm.com
3. Clone this repository
4. Open Git bash inside the project folder
5. Run: npm install
6. Run: node server.js

## How to Run
Open Git Bash in the edusync folder and run: node server.js
Then open your browser and go to : http://localhost:3000/api/health

## Project Structure
- /server     - backend routes, controllers, middleware
- /public     - frontend HTML, CSS, JavaScript
- /db         - database file and migration scripts
- /docs       - project documentation
- /tests      - test files

## Releases
- v1.0 -- Core system (students, teachers, attendance, fees)
- v2.0 -- Multi-school support, cloud deployment
- v3.0 -- Commercial release, subscription billing, mobile app