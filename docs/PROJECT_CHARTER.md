# EDUSYNC PROJECT CHARTER

## Problem Statement
Ugandan secondary schools manage student records, attendance, and fees manually using paper or disconnected spreadsheets. This causes:
    - Lost or damaged records.
    - Slow fee tracking and payment follow-up.
    - No real time visibility into attendance.
    - Difficult report generation for administrators

Edutrack solves this by providing a centralised, web-based management system accessible from any browser.

## Stakeholders
  - School administrators - Manage the entire system
  - Teachers - mark attendance, view student records
  - Bursars - record and track fee payments
  - Parents - view their child's attendance, and fee balance
  - Pam Tech solutions - developer of the system

## Scope

### In Scope
    - Student registration and management
    - Teacher registration and management
    - Daily attendance marking and history
    - Fee payment recording and balance tracking
    - Dashboard with live school metrics
    - Reports for attendance and fees
    - Search across students and teachers
    - JWT-based, authentication and role management

### Out of Scope (version 1)
    - Mobile application
    - SMS notifications
    - Online fee payment integration (MTN Mobile money, airtel)
    - Multi-school management from one account
    - Student portal for self registration

## Constraints
    1. Must work on low-bandwidth internet connections.
    2. Must work on basic school computers and smartphones.
    3. Must display all amounts in UGX.
    4. Must be affordable for Ugandan schools.

## Assumptions
    1. Each school has atleast one administrator who manages the system.
    2. Schools have atleast basic internet access.
    3. Fee structures are set per term by the school administrator.

## Version Roadmap
  - v1.0 -- Core system, single school, local deployment
  - v2.0 -- Cloud deployment, multi-school support
  - v3.0 -- Commercial release, subscription billing ( UGX 200,000/month per school)