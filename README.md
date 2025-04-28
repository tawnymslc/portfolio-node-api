# 📡 portfolio-api-node

This repository contains the backend API for my personal portfolio website. Built with Node.js and Express, it powers features like domain search via Unstoppable Domains and mock payment processing using Stripe.

## 🚀 Features

Unstoppable Domains Integration: Search for available Web3 domains using the Unstoppable Domains Partner API.

Stripe Payment Flow: Simulate domain purchases with a mock payment flow using Stripe's CardElement.

Modular Routing: Organized routes for scalability and maintainability.

CORS Support: Configured to handle cross-origin requests from the frontend hosted on Bluehost.

## 🛠️ Technologies Used

Backend: Node.js, Express.js

APIs: Unstoppable Domains Partner API, Stripe API

Deployment: Render​

## ⚙️ Getting Started

### Prerequisites

Node.js and npm installed

Accounts with Unstoppable Domains and Stripe for API access​

## 📬 API Endpoints

### Unstoppable Domains
Search Domains: GET /unstoppable/domains?search=keyword​

### Stripe
Create Payment Intent: POST /stripe/payment

Body Parameters:

amount (number): Amount in cents

paymentMethodType (string): Payment method, e.g., "card"

currency (string): Currency code, e.g., "usd"

## 🌐 Deployment

Frontend: Hosted on Bluehost at https://tawny-mathi.com

Backend: Deployed on Render at https://portfolio-node-api-ehr8.onrender.com

## 📌 Roadmap

 Implement Unstoppable Domains Partner API (Completed)

 Migrate Stripe mock payment flow (Completed)

 Migrate Spotify's API for Artist, Tracks, and details (In progress)
