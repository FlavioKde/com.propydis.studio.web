# com.propydis.studio.web

## 📘 **web application for architecture**

```text
This frontend is part of the application propydis.studi.com, and is built with React and Vite. 
It connects with the backend developed in Spring Boot through a REST API, and displays information about projects and properties of the studio.

```
## 🚀 **Tech Stack**

- **React** – Main library to build the interface.
- **Vite** – Fast and modern development environment.
- **Axios** – To make HTTP requests to the backend.
- **React Router** – For navigation between views.
- **CSS Modules** / Tailwind /.

## 🔗 **Connecting to the Backend**

```text
This frontend communicates with a Spring Boot backend via a REST API. 
Initially, the project used the native Fetch API, but it was later replaced with Axios for better error handling, cleaner syntax, and easier scalability.

```
Example request:

```bash
axios.get('https://propydis-backend.onrender.com/api/projects');

```

**warning**⚠️ Make sure the backend is configured to allow CORS requests from the frontend domain. If you're using cookies or tokens, ensure withCredentials: true is set in Axios and the backend allows credentials.


## 📦 **Local Setup**

```bash
npm install
npm run dev

```


The app runs on http://localhost:5173 by default.

🔧 Environment Variables
To keep backend URLs configurable, use a .env file:
VITE_API_URL=https://propydis-backend.onrender.com


And access it in your code like this:
axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);

## 📥 **Cloning the Project**

To clone and run the frontend locally:

```bash
# Clone the repository
git clone https://github.com/your-username/propydis-frontend.git

# Navigate into the project folder
cd propydis-frontend

# Install dependencies
npm install

# Start the development server
npm run dev

```

The app will be available at http://localhost:5173 by default.
💡 Make sure the backend is running and accessible, and that your .env file points to the correct API URL.

🧠 Notes
- The frontend is designed to be functional and modular, focusing on clean integration with the backend.
- UI design is kept minimal to prioritize architecture, security, and maintainability.

Let me know if you'd like to add a section about routing, state management, or deployment instructions. We can also include a short “Technical Decisions” block to explain why you chose Vite, Axios, and React.





