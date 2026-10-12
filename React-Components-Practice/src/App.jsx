
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Header",
      description: "Displays the website title and navigation links.",
      category: "Layout",
    },
    {
      id: 2,
      title: "Footer",
      description: "Displays copyright and additional information.",
      category: "Layout",
    },
    {
      id: 3,
      title: "Card",
      description: "Displays information in a reusable card layout.",
      category: "Content",
    },
  ];

  return (
    <div>
      <Header />

      <main id="home">
        <h2>Welcome to My React Project</h2>
        <p>
          I am learning to build reusable React components.
        </p>

        <section id="components">
          <h2>My Components</h2>

          <div className="card-container">
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                category={card.category}
              />
            ))}
          </div>
        </section>

        <section className="counter-section">
          <h2>Button Click Counter</h2>
          <p>You clicked the button {count} times.</p>

          <Button
            text="Increase Count"
            variant="primary"
            onClick={() => setCount(count + 1)}
          />

          <Button
            text="Reset Counter"
            variant="secondary"
            onClick={() => setCount(0)}
          />
        </section>

        <Form />
      </main>

      <Footer />
    </div>
  );
}

export default App;
