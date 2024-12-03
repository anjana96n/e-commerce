### **React E-Commerce Web Application**

This project is a simple, feature-rich e-commerce application built with React. It features user authentication, product management, and a shopping cart, all wrapped in a clean and responsive user interface.

---

## **Features**

1. **User Authentication**
   - **Sign Up**: Create a new account with name, email, and password.
   - **Login**: Securely log in with existing credentials.
   - **Persistent Authentication**: Authentication state is managed via `localStorage`.

2. **Product Listing**
   - Displays a hardcoded list of products, including details like name, price, description, and image.
   - Includes an "Add to Cart" button for each product.

3. **Shopping Cart**
   - Add items to the cart and adjust quantities.
   - Remove items from the cart.
   - Calculate and display the total cost of cart items.

4. **Responsive Design**
   - Optimized for both desktop and mobile devices.

---

## **Technologies Used**

- **React**: Core framework for building the application.
- **React Router**: Client-side navigation.
- **Formik and Yup**: Form handling and validation.
- **Material-UI (MUI)**: Responsive design and modern UI components.
- **LocalStorage**: Persistent state management for authentication and shopping cart data.

---

## **Getting Started**

Follow these steps to set up and run the application locally.

### **Prerequisites**

Ensure the following are installed on your system:
- **Node.js** (v14 or later)
- **npm** or **yarn** package manager

---

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/anjana96n/e-commerce.git
   cd react-ecommerce-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Or, if using Yarn:
   ```bash
   yarn install
   ```

3. **Start the Application**
   ```bash
   npm run dev
   ```
   Or, if using Yarn:
   ```bash
   yarn start
   ```

4. **Open in Browser**
   Navigate to [http://localhost:5173](http://localhost:5173) to view the application.

---

## **Folder Structure**

The project is structured as follows:

```
src/
├── assets/             # Static assets like images and styles
├── components/         # Reusable components
├── features/           # Feature-specific components (Auth, Products, Cart)
├── context/            # Context API setup for global state
├── hooks/              # Custom hooks for shared logic
├── pages/              # Main pages (Login, Signup, Product List, Cart)
├── services/           # API services or utility functions
├── routes/             # Route definitions
├── App.jsx             # Main application component
├── index.js            # Application entry point
```

---

## **Available Scripts**

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Launches the test runner.

---

## **Additional Setup**

### **Environment Variables**
If required, create a `.env` file in the root directory. Example:
```bash
REACT_APP_API_URL=http://localhost:3000
```
Add any necessary environment variables for the project.

### **Custom Product List**
Update the product details in `src/features/Products/data.js` to display your custom product information.

### **Styling**
Customize global styles in `src/assets/styles/global.css` or adjust the Material-UI theme for your preferred design.

---

## **Notes**
- No backend is used; all data is managed locally in the browser.
- Authentication and cart data persist using `localStorage`.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Acknowledgments**

Special thanks to the open-source tools and libraries used in this project:
- React
- React Router
- Formik and Yup
- Material-UI

--- 
