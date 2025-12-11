import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  return (
    <div className={styles.contactWrapper}>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      <p className={styles.contactDesc}>Feel free to reach out anytime.</p>

      <form ref={formRef} onSubmit={sendEmail} className={styles.contactForm}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className={styles.contactInput}
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className={styles.contactInput}
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          required
          className={styles.contactTextarea}
        />

        <button type="submit" className={styles.contactSubmit}>
          Send Message
        </button>

        {/* SUCCESS / ERROR STATES */}
        {status === "sending" && (
          <p className={styles.contactInfo}>Sending...</p>
        )}
        {status === "success" && (
          <p className={styles.contactInfo} style={{ color: "green" }}>
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className={styles.contactInfo} style={{ color: "red" }}>
            Failed to send message. Try again.
          </p>
        )}
      </form>
    </div>
  );
}
