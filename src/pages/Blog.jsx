import styles from "./Blog.module.css"

const Blog = () => {
    return (
        <>
            <div>
                <header>
                    <h1>Insights & Design Notes</h1>
                    <p>Ideas, experiments, and lessons from my design journey.</p>
                </header>


                <section className={styles.cardGrid}>
                    {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardBody}>
                                <h3>Blog Post {i}</h3>
                                <p>Short preview of the article goes here...</p>
                                <button variant="link">Read More</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Blog