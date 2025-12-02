import { Link } from "react-router-dom";
import styles from "./About.module.css"

const About = () => {
    return (
        <>
            <div className={styles.aboutWrapper}>
             <header>
              <h1 className={styles.aboutTitle}>Nice to meet you.</h1>
              <p className={styles.aboutText}>I’m a Web developer passionate about creating responsive design and websites.</p>
             </header>


             <section className={styles.aboutHighlights}>
              <h2 className={styles.highlightTitle}>My Story</h2>
              <p className={styles.hightlightDesc}>I specialize in helping startups and brands communicate visually through clean, modern, and meaningful design. 
                My approach blends research, creativity, and collaboration to deliver work that truly connects.</p>
              <p className={styles.hightlightDesc}>Beyond design, I love exploring new tech tools and helping small teams find their visual identity.</p>
             </section>


             <section className={styles.aboutSkills}>
              <h2 className={styles.aboutSkillsTitle}>Skills & Tools</h2>
              <ul className={styles.aboutSkillsList}>
               <li className={styles.skillTag}>Visual Studios</li>
               <li className={styles.skillTag}>Python</li>
               <li className={styles.skillTag}>HTML</li>
               <li className={styles.skillTag}>CSS</li>
               <li className={styles.skillTag}>JavaScript</li>
               <li className={styles.skillTag}>React</li>
              </ul>
             </section>

             <section>
                <h2>Resume</h2>
                <a
                  href="Izaiah Harrison - Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resumeButton}
                >
                    View Resume
                </a>
             </section>


             <section>
              <h2>Let’s Work Together</h2>
              <Link style={styles.contactBtn}>Contact Me</Link>
             </section>
            </div>
        </>
    );
};

export default About