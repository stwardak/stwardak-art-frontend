import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message
    };

    axios.post('http://localhost:3000/contact', data)
      .then(response => {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
        setStatus('There was an error sending your message.');
      });
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Stephanie Twardak</p>
      <p>stwardakart@gmail.com</p>
      <p>815.272.0446</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Contact;
