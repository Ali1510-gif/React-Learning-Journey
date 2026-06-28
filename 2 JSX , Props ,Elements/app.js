/*
=========================================
        React Components & Props
=========================================

Topics Covered
--------------
1. Functional Components
2. JSX
3. Props
4. Object Props
5. Conditional Rendering
6. Component Composition
7. React Fragment

*/

// ==============================
// Header Component
// ==============================

function Header({ name }) {
  return (
    <header>
      <h1>Welcome {name} to the Indian Election Commission Website</h1>
      <hr />
    </header>
  );
}

// ==============================
// Main Component
// ==============================

function Main({ user }) {
  return (
    <main>
      <h2>Hello {user.name}</h2>

      <h3>
        {user.age >= 18
          ? "✅ You are eligible to vote."
          : "❌ You are not eligible to vote."}
      </h3>

      <p>📍 City : {user.city}</p>

      <hr />
    </main>
  );
}

// ==============================
// Footer Component
// ==============================

function Footer() {
  return (
    <footer>
      <h3>Thank you for visiting our website.</h3>
    </footer>
  );
}

// ==============================
// App Component
// Parent Component
// ==============================

function App() {
  const user = {
    name: "Rohit",
    age: 30,
    city: "Kotdwar",
  };

  return (
    <>
      <Header name="Rohit" />

      <Main user={user} />

      <Footer />
    </>
  );
}

// ==============================
// Render React App
// ==============================

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
