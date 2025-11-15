import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className={styles.header}>
         <div className={`container ${styles.headerInner}`}>
            <h1>Izaiah's Portfolio</h1>
            <nav className={styles.navLinks}>
                <Link to="/">Home</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </nav>

            <button className={styles.hamburger} onClick={() => setOpen(!open)}>
                ☰
            </button>
         </div>

            {open && (
              <nav className={`container ${styles.mobileMenu}`}>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/Blog" onClick={() => setOpen(false)}>Blog</Link>
                <Link to="/About" onClick={() => setOpen(false)}>About</Link>
                <Link to="/Projects" onClick={() => setOpen(false)}>Projects</Link>
                <Link to="/Contact" onClick={() => setOpen(false)}>Contact</Link>
              </nav>
            )}


        </header>
    )
}

export default Header