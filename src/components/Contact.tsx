import { useState } from 'react';
import type { FormEvent } from 'react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section section--muted">
      <div className="container contact__grid">
        <div>
          <h2 className="section__title">Get In Touch</h2>
          <p className="section__subtitle">
            Open to opportunities, collaborations, and interesting projects.
          </p>

          <ul className="contact__links">
            <li>
              <span>Email</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">
                @Teja65
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                konakalla-teja-venkatesh
              </a>
            </li>
            <li>
              <span>Location</span>
              <strong>{personalInfo.location}</strong>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
            />
          </label>
          <button type="submit" className="btn btn--primary btn--full">
            Send Message
          </button>
          {sent && (
            <p className="contact__note">
              Your email client should open with the message pre-filled to{' '}
              {personalInfo.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
