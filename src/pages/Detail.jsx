import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { projectData } from "../../public/projectData"

const Detail = () => {

    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setLoading(true)

                const foundProject = projectData.find(
                    (item) => String(item.id) === id
                );
                if(!foundProject) throw new Error("Project not found.");
                setProject(foundProject);
            } catch (err) {
                console.error(err);
                setError(err.message || "Error loading project");
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    // ✅ Loading or error states
    if (loading) return <p className="text-center mt-10">Loading listing...</p>;
    if (error)
        return (
        <div className="text-center text-red-500 mt-10">
            <p>❌ {error}</p>
        </div>
        );

    return (
        <>
            <div>
                <h1>Project title: {project.title}</h1>
                <img src={project.img} alt={project.title}/>
                <p>Problem: {project.problem}</p>
                <p>Solution: {project.solution}</p>
                <p>Improvement: {project.improvment}</p>
            </div>
        </>
    )
}

export default Detail