# Edusync
A school management system for Ugandan Secodary Schools (S1 - S6).

## Description
Edusync is a locally hosted web application that manages students, teachers, attendance, and fees. It runs offline once installed and requires no internet to operate.

## Tech Stack
- HTML, CSS, JavaScript (Frontend)
- Node.js (Runtime)
- Express (Backend Framework)
- SQLite (Database)

## Setup Instructions
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