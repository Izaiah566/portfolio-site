import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { projectData } from "../data/projectData";

const Home = () => {
    return (
        <>
            <div>
             {/* Hero Section */}
             <section className={styles.homeHero}>
              <div>
                <h2>Hi! My name is Izaiah!</h2>
                <h1 className={styles.heroTitle}>A web developer who loves to code and create responsive and fun websites.</h1>
                <Link to="/projects" className={styles.homeBtnPrimary}>View Projects</Link>
              </div>
              <div className={styles.heroImg}>
                <img src="images/IMG_6647.JPG"></img>
              </div>
             </section>


             {/* Featured Projects */}
             <section className={styles.homeProjectGrid}>
              {projectData.slice(0,3).map(project => (
              <div key={project.id} className={styles.homeProjectCard}>
               <div className={styles.homeProjectImg}><img src={project.image}/></div>
               <div className={styles.homeProjectBody}>
                 <h3>{project.title}</h3>
                 <p>{project.description}</p>
                 <Link to={`/Projects/${project.slug}`} className={styles.btnSecondary}>View Projects</Link>
               </div>
              </div>
             ))}
            </section>


            {/* CTA */}
             <section className={styles.homeCIA}>
              <h2>Let’s build something great together.</h2>
              <button>Contact Me</button>
             </section>
            </div>
        </>
    );
};

export default Home