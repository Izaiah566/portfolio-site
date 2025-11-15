import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css"

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Dungeon Adventure RPG",
            description: "An optimized game app created with python with an add-on Pygame.",
            image: "dungeon.rpg"
        },

        {
            id: 2,
            title: "8-ball Website",
            description: "A fully stacked website using React.",
            image: "8ball.jpg"
        },

        {
            id: 3,
            title: "Airlines Website",
            description: "A Javascript utilized website upgraded with React components.",
            image: "airlines.jpg"
        },

        {
            id: 4,
            title: "Marketplave Community App",
            description: "A full-stack community marketplace using Supabase + FastAPI.",
            image: "marketplace.jpg"
        },

        {
            id: 5,
            title: "Portfolio Website",
            description: "My fully responsive portfolio using React + CSS Modules.",
            image: "portfolio.jpg"
        }
    ];

    return (
        <>
            <div>
             <header>
                <h1>Selected Work</h1>
                <p>A collection of projects I've designed for startups, brands, and personal ideas.</p>
             </header>


            <section className={styles.cardGrid}>
             {projects.map(project => (
                <div key={project.id}  className={styles.card}>
                 <div className={styles.cardBody}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link className={styles.btnPrimary}>View Project</Link>
                 </div>
                </div>
              ))}
            </section>
            </div>
        </>
    );
};

export default Projects