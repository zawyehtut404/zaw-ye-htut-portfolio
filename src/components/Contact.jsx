import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact from " + form.name);
    const body = encodeURIComponent(form.message + "\n\nFrom: " + form.name + " (" + form.email + ")");
    window.location.href = `mailto:zaw233312@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div>
      <h2>Contact</h2>
      <div className="contact-box">
        <div className="card">
          <p>
            <strong>Email:</strong> zaw233312@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +959 980 378 041
          </p>
          <p>
            <strong>Location:</strong> Thidar St, 13 yard, Hlaing Township, Yangon
          </p>
        </div>
        <form className="card form" onSubmit={handleSubmit}>
          <label>
            Name
            <input className="input" name="name" value={form.name} onChange={update} required />
          </label>
          <label>
            Email
            <input className="input" type="email" name="email" value={form.email} onChange={update} required />
          </label>
          <label>
            Message
            <textarea className="input" name="message" rows={5} value={form.message} onChange={update} required />
          </label>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
