import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css"
import { projectData } from "../../public/projectData";

const Projects = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>
             <header>
                <h1>Selected Work</h1>
                <p>A collection of projects I've designed for startups, brands, and personal ideas.</p>
             </header>


            <section className={styles.cardGrid}>
             {projectData.map((project) => (
                <div key={project.id}  className={styles.card}>
                 <div className={styles.cardImg}><img src={project.image}/></div>
                 <div className={styles.cardBody}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className={styles.btnPrimary} onClick={() => navigate(`/Projects/${project.slug}`)}>View Project</button>
                 </div>
                </div>
              ))}
            </section>
            </div>
        </>
    );
};

export default Projects