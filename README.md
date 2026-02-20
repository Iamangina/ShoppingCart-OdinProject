# 🛒 Shopping Cart – React Project

Live demo: https://iamangina.github.io/ShoppingCart-OdinProject/

---

## About the project

This project is a **mock e-commerce shopping cart application** built with React as part of *The Odin Project* curriculum.

The application simulates a small online store. Users can browse products, add them to the cart, change quantities and see the final calculated price in real time.

The UI and behavior are inspired by my own real online store.
All product images used in this project are my own property.

---

## Features

* Multi-page application using **React Router**
* Home page with image mini-carousel
* Shop page with product cards
* Add products to cart
* Increase / decrease quantity
* Real-time cart item counter in the navbar
* Automatic total price calculation
* Removing items from the cart
* CSS Modules styling

> No checkout or payment system is implemented — this project focuses on frontend behavior and state handling.

---

## Pages

### 🏠 Home

* Landing page
* Simple content and an image carousel
* Navigation bar visible on all pages

### 🛍 Shop

Each product card contains:

* Product title
* Image
* “Add to Cart” button

### 🧺 Cart

* Displays all added products
* Increasing quantity merges duplicate products
* Decreasing quantity removes items when reaching 0
* Real-time total price calculation
* Navbar shows current number of items in cart

---

## Tech Stack

* React
* React Router DOM
* CSS Modules

---
## Future improvements

* Persistent cart (localStorage)
* Product search & filtering
* Sorting (price / category)
* Better mobile responsiveness
* UI animations
* React Testing Library

---
