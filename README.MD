# Expense Tracker

## Overview

Expense Tracker is a web application that helps users manage their personal finances by recording and organizing their daily expenses. Users can create an account, securely log in, categorize their expenses, set budgets, and monitor their spending in one place.

---

## Screenshots

### Home Page

### Dashboard

### Expenses Page

### Categories Page
*(Add screenshot here)*

### Budget Page
*(Add screenshot here)*

---

## Technologies Used

- HTML
- CSS3
- JavaScript
- Node.js
- MongoDB


---

## Getting Started

---

## Installation

---

## User Stories

- As a user, I want to create an account so I can securely manage my expenses.
- As a user, I want to log in and log out securely.
- As a user, I want to add new expenses.
- As a user, I want to edit my expenses.
- As a user, I want to delete expenses.
- As a user, I want to organize expenses into categories.
- As a user, I want to create budgets for different categories.
- As a user, I want to view all of my expenses in one place.

---

## Database Design
![alt text](<Expness Tracker.jpg>)
---

## Routes

| Method | Route | Description |
|---------|-------|-------------|
| GET | / | Home page |
| GET | /auth/sign-up | Sign up page |
| POST | /auth/sign-up | Create account |
| GET | /auth/sign-in | Login page |
| POST | /auth/sign-in | Login user |
| GET | /auth/sign-out | Logout user |
| GET | /expenses | View all expenses |
| GET | /expenses/new | New expense form |
| POST | /expenses | Create expense |
| GET | /expenses/:id | View expense |
| GET | /expenses/:id/edit | Edit expense form |
| PUT | /expenses/:id | Update expense |
| DELETE | /expenses/:id | Delete expense |
| GET | /categories | View categories |
| POST | /categories | Create category |
| GET | /budgets | View budgets |
| POST | /budgets | Create budget |

---

## Features

- User authentication
- Session-based authorization
- Full CRUD operations
- Expense management
- Category management
- Budget management
- Responsive user interface

---

## Future Enhancements

- Expense charts and graphs
- Monthly financial reports
- Search and filter expenses
- Export expenses to PDF or Excel
- Recurring expenses
- Dark mode

---

## Credits

- General Assembly
- Omar Kamal
- Zaid 
- Israa
- Aysha