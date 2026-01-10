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
                <h1 className={styles.homeHeroTitle}>A web developer who loves to code and create responsive and fun websites.</h1>
                <Link to="/Projects" className={styles.homeBtnPrimary}>View Projects</Link>
              </div>
              <div>
                <img src="images/IMG_6647.JPG" className={styles.homeHeroImg}></img>
              </div>
             </section>


             {/* Featured Projects */}
             <section className={styles.homeProjectGrid}>
              {projectData.slice(0,3).map(project => (
              <div key={project.id} className={styles.homeProjectCard}>
               <img src={project.image} className={styles.homeProjectImg}/>
               <div className={styles.homeProjectBody}>
                 <h3>{project.title}</h3>
                 <p>{project.description}</p>
                 <Link to={`/Projects/${project.slug}`} className={styles.btnSecondary}>View Project</Link>
               </div>
              </div>
             ))}
            </section>


            {/* CTA */}
             <section className={styles.homeCIA}>
              <h2>Let’s build something great together.</h2>
              <Link to={'/Contact'} className={styles.contactBtn}>Contact Me</Link>
             </section>
            </div>
        </>
    );
};

export default Home