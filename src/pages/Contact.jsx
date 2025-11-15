import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <>
         <div>
          <header>
            <h1>Thanks for stopping by!</h1>
            <p>I'd love to connect or talk about new opportunities.</p>
          </header>


         <form className={styles.contactForm}>
           <input type="text" placeholder="Your Name" className={styles.contactInput} />
           <input type="email" placeholder="Your Email" className={styles.contactInput} />
           <textarea placeholder="Your Message" rows={5} />
           <button size="lg" type="submit" className={styles.contactBtn} >Send Message</button>
         </form>


          <div >
            <p>Or reach me directly at <a href="mailto:you@example.com" className="underline">you@example.com</a></p>
            <p className="mt-2">Connect: LinkedIn · GitHub</p>
          </div>
         </div>
        </>
    )
}

export default Contact