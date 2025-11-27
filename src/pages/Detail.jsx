import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { projectData } from "../data/projectData";

export default function Detail() {
  const { slug } = useParams();
  const project = projectData.find(p => p.slug === slug);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className={`container ${styles.detail}`}>
      <h1>{project.title}</h1>

      <div className={styles.image}>
        <img src={project.image} alt={project.title}/>
      </div>

      <p className={styles.description}>{project.longDescription}</p>

      <div className={styles.subHeader}>
        <h2>Problem</h2>
        <p className={styles.problem}>{project.problem}</p>
      </div>
      
      <div className={styles.subHeader}>
        <h2>Solution</h2>
        <p className={styles.solution}>{project.solution}</p>
      </div>
      
      <div className={styles.subHeader}>
        <h2>Improvement</h2>
        <p className={styles.improvement}>{project.improvment}</p>
      </div>
      {project.liveDemo ? (
        <a
          href={project.liveDemo}
          target="_blank"
          className={styles.demoButton}
        >
          Live Demo →
        </a>
      ) : (
        <p className={styles.noDemo}>Live demo not available</p>
      )}

    </div>
  );
}
