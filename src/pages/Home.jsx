import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>
            <div>
             {/* Hero Section */}
             <section className={styles.hero}>
              <div>
                <h2>Hi! My name is Izaiah!</h2>
                <h1 className={styles.heroTitle}>A web developer who loves to code and create responsive and fun websites.</h1>
                <Link to="/projects" className={styles.btnPrimary}>View Projects</Link>
              </div>
              <div className={styles.heroImg}>
                <img src="images/my_photo.jpg"></img>
              </div>
                
              
             </section>


             {/* Featured Projects */}
             <section className={styles.cardGrid}>
              {[1,2,3].map((i) => (
              <div key={i} className={styles.card}>
               <div className={styles.cardImg}>Image</div>
               <div className={styles.cardBody}>
                 <h3>Project Title {i}</h3>
                 <p>Brief description of the project.</p>
               </div>
              </div>
             ))}
            </section>


            {/* CTA */}
             <section>
              <h2>Let’s build something great together.</h2>
              <button>Contact Me</button>
             </section>
            </div>
        </>
    );
};

export default Home