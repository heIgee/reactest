import { useState, useEffect } from 'react';
import './SignupForm.css';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    password: null,
  });
  console.log(formData);

  const [count, setCount] = useState(0);

  const handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="SignupForm">
      <p>
        <label htmlFor="firstname">First Name: </label>
        <input
          id="firstname"
          name="firstName"
          type="text"
          placeholder="monkey"
          value={formData.firstName}
          onChange={(ev) => handleChange(ev)}
        />
      </p>
      <p>
        <label htmlFor="lastname">Last Name: </label>
        <input
          id="lastname"
          name="lastName"
          type="text"
          placeholder="donkey"
          value={formData.lastName}
          onChange={(ev) => handleChange(ev)}
        />
      </p>
      <p>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="secret"
          value={formData.password}
          onChange={(ev) => handleChange(ev)}
        />
      </p>

      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
}
