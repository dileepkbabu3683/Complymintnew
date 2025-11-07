import React from "react";
import "./index.css";

function App() {
  return (
    <div className="container">
      <header>
        <img src="/logo.png" alt="Complymint Logo" className="logo" />
        <h1>Welcome to Complymint 🌿</h1>
        <p>Your trusted partner for AML & Compliance knowledge.</p>
      </header>

      <main>
        <section>
          <h2>Our Mission</h2>
          <p>
            To make AML and Compliance education accessible to everyone —
            through free resources, expert insights, and training tools.
          </p>
        </section>

        <section>
          <h2>Coming Soon</h2>
          <ul>
            <li>Free AML training modules</li>
            <li>Compliance templates and guides</li>
            <li>Interactive regulatory updates</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Complymint. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
