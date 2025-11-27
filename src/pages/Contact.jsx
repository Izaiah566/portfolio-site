import {useState} from "react"
import styles from "./Contact.module.css"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); 
  // idle | sending | success | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      // --- simulate sending ---
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // --- simulate success ---
      setStatus("success");

      // reset form
      setForm({ name: "", email: "", message: "" });

    } catch (err) {
      setStatus("error");
    }
  }

    return (
        <>
         <div>
          <header>
            <h1>Thanks for stopping by!</h1>
            <p>I'd love to connect or talk about new opportunities.</p>
          </header>


         <form className={styles.contactForm} onSubmit={handleSubmit}>
           <input 
           name="name"
           type="text" 
           placeholder="Your Name"
           value={form.name}
           onChange={handleChange}
           className={styles.contactInput} 
           required
           />

           <input 
           name="email"
           type="email" 
           placeholder="Your Email" 
           value={form.email}
           onChange={handleChange}
           className={styles.contactInput} 
           required
           />

           <textarea 
           name="message"
           placeholder="Your Message" 
           value={form.message}
           onChange={handleChange}
           rows={5} 
           required
           />

           <button 
           size="lg" 
           type="submit" 
           className={styles.contactBtn} 
           disabled={status === "sending"}
           >
            {status === "sending" ? "Sending..." : "Send Message"}
            </button>
         </form>

         {/* SUCCESS MESSAGE */}
         {status === "success" && (
           <p className={styles.successMsg}>Your message was sent successfully! 🎉</p>
         )}

         {/* ERROR MESSAGE */}
         {status === "error" && (
           <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
         )}



          <div >
            <p>Or reach me directly at <a href="mailto:izaiahlharrison@gmail.com" className="underline">izaiahlharrison@gmail.com</a></p>
            <p className="mt-2">Connect: LinkedIn · GitHub</p>
          </div>
         </div>
        </>
    )
}

export default Contact