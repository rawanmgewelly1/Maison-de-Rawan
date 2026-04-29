# Maison de Rawan - Luxury Jewelry E-commerce 

A sophisticated, fully functional jewelry website developed as a semester project for the **Web Programming Course**. This project showcases modern web development techniques using HTML5, CSS3, JavaScript, and REST API integration.

##  Project Overview
Maison de Rawan is a high-end jewelry brand website that offers a seamless shopping experience. It features multiple collections including Indian Heritage and Limited Edition pieces.

 ## Key Features & Technologies

### 1. Frontend Technologies
* HTML5: Semantic structure for SEO and accessibility.
* CSS3 (Flexbox & Layout): Custom-styled navigation, product grids, and a luxury-themed UI.
* Typography:** Elegant use of 'Playfair Display' and 'Jost' fonts.

### 2. Core Functionalities (JavaScript)
* Dynamic Product Loading: Products are fetched dynamically from a `products.json` file using the **Fetch API (GET Request)**.
* Interactive UI: Custom-built image slider and responsive dropdown menus.
* Form Validation: The contact form includes JavaScript validation to ensure all fields are correctly filled before submission.
* Shopping Cart System: A persistent cart using `LocalStorage` with a simulated **REST API (POST Request)** to handle order data.

### 3. Data & API Integration
* JSON Database: All product information (30+ items) is stored in structured JSON format.
* Simple API Concept: Implements AJAX/Fetch to simulate a real-world backend environment.

##  Project Structure
project/
├── index.html          # Homepage with luxury slider
├── shop.html           # Products page with filtering & comparison table
├── about.html          # Brand story page
├── contact.html        # Contact form with validation
├── style.css           # External styling (Layout, Colors, Typography)
├── script.js           # Main logic (API, Validation, Cart, Slider)
├── products.json       # Product data source
├── db.json             # Database backup
└── img/                # High-quality product imagery
