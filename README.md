# com.propydis.studio.web

📘 **## web application for architecture**

```text
This frontend is part of the application propydis.studi.com, and is built with React and Vite. 
It connects with the backend developed in Spring Boot through a REST API, and displays information about projects and properties of the studio.

```
🚀 **## Tech Stack**

- **React** – Main library to build the interface.
- **Vite** – Fast and modern development environment.
- **Axios** – To make HTTP requests to the backend.
- **React Router** – For navigation between views.
- **CSS Modules** / Tailwind /.

🔗 **##Connecting to the Backend**

```text
This frontend communicates with a Spring Boot backend via a REST API. Initially, the project used the native Fetch API, but it was later replaced with Axios for better error handling, cleaner syntax, and easier scalability.

```
Example request:

```bash
axios.get('https://propydis-backend.onrender.com/api/projects');

```

**warning**⚠️ Make sure the backend is configured to allow CORS requests from the frontend domain. If you're using cookies or tokens, ensure withCredentials: true is set in Axios and the backend allows credentials.


📦 **## Local Setup**

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



🧠 Notes
- The frontend is designed to be functional and modular, focusing on clean integration with the backend.
- UI design is kept minimal to prioritize architecture, security, and maintainability.

Let me know if you'd like to add a section about routing, state management, or deployment instructions. We can also include a short “Technical Decisions” block to explain why you chose Vite, Axios, and React.





This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
