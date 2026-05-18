"use client";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea rows={5} placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
}
