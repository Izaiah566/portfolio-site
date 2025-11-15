import styles from "./Projects.module.css"

const Projects = () => {
    return (
        <>
            <div>
             <header>
                <h1>Selected Work</h1>
                <p>A collection of projects I've designed for startups, brands, and personal ideas.</p>
             </header>


            <section className={styles.cardGrid}>
             {[1,2,3,4,5].map((i) => (
                <div key={i}  className={styles.card}>
                 <div className={styles.cardBody}>
                  <h3>Project Title {i}</h3>
                  <p>Category / Client Name</p>
                 </div>
                </div>
              ))}
            </section>
            </div>
        </>
    );
};

export default Projects