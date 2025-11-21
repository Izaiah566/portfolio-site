import styles from "./About.module.css"

const About = () => {
    return (
        <>
            <div>
             <header>
              <h1>Nice to meet you.</h1>
              <p>I’m a Web developer passionate about creating responsive design and websites.</p>
             </header>


             <section>
              <h2>My Story</h2>
              <p>I specialize in helping startups and brands communicate visually through clean, modern, and meaningful design. 
                My approach blends research, creativity, and collaboration to deliver work that truly connects.</p>
              <p>Beyond design, I love exploring new tech tools and helping small teams find their visual identity.</p>
             </section>


             <section>
              <h2>Skills & Tools</h2>
              <ul>
               <li>Visual Studios</li>
               <li>Python</li>
               <li>HTML</li>
               <li>CSS</li>
               <li>JavaScript</li>
               <li>React</li>
              </ul>
             </section>

             <section>
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
              <button size="lg">Contact Me</button>
             </section>
            </div>
        </>
    );
};

export default About