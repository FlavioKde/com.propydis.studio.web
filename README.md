# com.propydis.studio.web - frontend

## 📘 **web application for architecture**

```text
This is the frontend module of the propydis.studio web application, developed with React and Vite.
It consumes the RESTful API exposed by the Spring Boot backend and delivers a fast, responsive interface for users to browse architectural projects and available properties.

```

## 🎯 **Purpose**

The frontend is designed to:

- Display public content such as properties for sale or rent.
- Showcase architectural projects completed by the studio.
- Provide an admin dashboard for authenticated users to manage content.
It supports role-based access, adapting the interface based on whether the user is a visitor or an administrator.

## 🚀 **Tech Stack**

- **React** – Main library to build the interface.
- **Vite** – Fast and modern development environment.
- **Axios** – To make HTTP requests to the backend.
- **React Router** – For navigation between views.
- **CSS Modules** / Tailwind / Styled Components – Depending on implementation.

## 🔗 **Connecting to the Backend**

```text
The frontend communicates with the backend via Axios.
Initially, the native Fetch API was used, but Axios was adopted for its cleaner syntax, better error handling, and scalability.

```
Example request:

```bash
axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);

```

⚠️ **warning**  Ensure CORS is properly configured in the backend to allow requests from the frontend domain. If using cookies or tokens, set withCredentials: true in Axios and configure the backend accordingly.


## 📦 **Local Setup**

```bash
npm install

```

```bash
npm run dev

```


The app runs on http://localhost:5173 by default.

🔧 Environment Variables
To keep backend URLs configurable, use a .env file:

```text
VITE_API_URL=https://propydis-backend.onrender.com

```

And access it in your code like this:

```bash
axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);

```

## 📥 **Cloning the Project**

To clone and run the frontend locally:

```bash
# Clone the repository
git clone https://github.com/FlavioKde/com.propydis.studio.web.git

# Navigate into the project folder
cd com.propydis.studio.web

# Install dependencies
npm install

# Configure backend API URL
echo "VITE_API_URL=http://localhost:8080" > .env

# Start the development server
npm run dev
```

The app will be available at http://localhost:5173 by default.

💡 Make sure the backend is running and accessible, and that your .env file points to the correct API URL.

## 🧠 Technical Decisions
- Axios over Fetch: Chosen for better error handling and cleaner integration with interceptors.
- Vite over CRA: Faster builds and better DX (developer experience).
- Modular structure: Components and services are organized for scalability and maintainability.


## 🧠 Notes
- The frontend is designed to be functional and modular, focusing on clean integration with the backend.
- UI design is kept minimal to prioritize architecture, security, and maintainability.

## 📈 Roadmap
- ✅ v0.1 – Public listings and admin dashboard
- 🧪 v0.2 – Chat integration and user roles
- 🔮 v0.3 – Microfrontend architecture (optional)

## 📬 Contact
Author: Flavio

Location: Barcelona, Cataluña, España

Email: [flaviodavirro@gmail.com]

LinkedIn: [www.linkedin.com/in/flavio-augusto-davirro]

GitHub: [https://github.com/FlavioKde]

# “Built with intention, improved through iteration – Kaizen in code.”







