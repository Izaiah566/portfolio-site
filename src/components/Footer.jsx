import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
         <div className={styles.footerInner}>
            <p>Izaiah</p>
         </div>

         <div className={styles.footerInner}>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
         </div>

         <div className={styles.footerInner}>
            <a href="https://github.com/Izaiah566" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.18 9.18 0 0 1 12 6.8c.85 0 1.72.12 2.52.36 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.94-2.34 4.8-4.58 5.06.36.33.68.97.68 1.96v2.91c0 .26.18.58.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
            </a>


            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
         </div>
         
         
         
        </footer>
    )
}

export default Footer