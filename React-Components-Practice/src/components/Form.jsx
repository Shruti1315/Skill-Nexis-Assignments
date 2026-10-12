
import { useState } from "react";
import Button from "./Button";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedData({
      name: name.trim(),
      email: email.trim(),
    });
  }

  return (
    <section className="form-section" id="contact">
      <h2>Contact Form</h2>
      <p>Enter your details to test form handling in React.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <Button
  text="Submit Form"
  variant="primary"
  type="submit"
/>
      </form>

      {submittedData && (
        <div className="submission-result">
          <h3>Form Submitted Successfully!</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </section>
  );
}

export default Form;
