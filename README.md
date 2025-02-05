# **QuickSend - Parcel Delivery Management System - Frontend**  

🔗 **Live Demo:** [QuickSend](https://quick-send-f2412.web.app/)  

Welcome to the **QuickSend - Parcel Delivery Management System**! This is the **frontend repository** for managing parcel bookings, deliveries, and assignments, designed to ensure seamless interaction between users, delivery personnel, and admins.  

## **Features**  

1. **Responsive Design**  
   - A fully responsive and mobile-friendly interface that ensures compatibility across all devices.  

2. **Dynamic Parcel Management**  
   - View all parcels in a dynamic table with detailed information such as user details, booking dates, delivery costs, and current status.  

3. **Real-time Status Updates**  
   - Easily track and manage the status of parcels (e.g., Pending, On The Way, Delivered, Canceled) with live updates.  

4. **Filter by Status**  
   - Includes a filtering system to sort parcels based on their status, making parcel management simple and efficient.  

5. **Delivery Man Assignment**  
   - Assign parcels to delivery personnel dynamically using a modal with options to set approximate delivery dates.  

6. **Interactive Table Management**  
   - Hover and click functionalities in tables for better user interaction, along with status highlighting.  

7. **Top Delivery Men Section**  
   - Displays the top 3 delivery personnel based on the number of parcels delivered and average ratings.  

8. **Toast Notifications**  
   - Provides instant feedback on user actions (e.g., successful assignments or error messages) using real-time toast notifications.  

9. **Date Picker Integration**  
   - Users can set or modify delivery dates with a simple and intuitive date-picker component.  

10. **Secure API Integration**  
    - Communicates with a backend API securely using `axios` and `react-query`, ensuring seamless data flow and updates.  

11. **Helmet for SEO**  
    - Improved SEO and dynamic page titles using the `react-helmet-async` package.  

---

## **🛠️ Dependencies Used**  

Here are the key dependencies used in the project:  

### **Frontend Dependencies**  

| Dependency           | Purpose |
|----------------------|---------|
| **React**           | Core library for building UI components. |
| **React Router**    | Enables navigation and routing in the app. |
| **React Query**     | Handles API requests, caching, and state management. |
| **Axios**          | Fetches data from the backend efficiently. |
| **Tailwind CSS**    | Provides utility-based styling for responsive design. |
| **React Hot Toast** | Displays real-time toast notifications. |
| **React DatePicker** | Allows users to select delivery dates easily. |
| **React Helmet Async** | Improves SEO and dynamically updates page titles. |

---

## **🚀 How to Run the Project Locally**  

### **Prerequisites**  
Ensure you have the following installed on your system:  
- **Node.js** (Latest LTS version recommended)  
- **npm** or **yarn** (Package manager)  

### **Step-by-Step Guide**  

1️⃣ **Clone the Repository:**  
```sh
git clone https://github.com/your-github-username/quicksend-frontend.git
```
2️⃣ **Navigate to the Project Directory:**  
```sh
cd quicksend-frontend
```
3️⃣ **Install Dependencies:**  
```sh
npm install
```
or  
```sh
yarn install
```
4️⃣ **Create a `.env` File (If Required)**  
If your project uses environment variables, create a `.env` file and add required API keys. Example:  
```env
REACT_APP_API_BASE_URL=https://your-api-url.com
```
5️⃣ **Start the Development Server:**  
```sh
npm start
```
or  
```sh
yarn start
```
6️⃣ **Open in Browser:**  
After running the command, open **[http://localhost:3000](http://localhost:3000)** in your browser to see the app in action!  

---

This README is now **more detailed and beginner-friendly**! 🚀 Let me know if you need any modifications. 😊

