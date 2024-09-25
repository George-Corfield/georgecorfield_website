import React from "react";
import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Link } from "react-router-dom";


const IndividualProjects: React.FC = () => {
    const { projectId } = useParams();


    if (projectId && projects[projectId] !== undefined) {
        return (
            <div className="individual page">
                <div className="headings">
                    <Link to={`/projects`}>
                        <button>
                            <img src="/back_arrow.svg" />
                            Back
                        </button>
                    </Link>
                    <h2>{projects[projectId].title}</h2>
                </div>
                <div className="project-descriptions">
                    <div className="project-image">
                        <img src={`/projectImages/${projects[projectId].image}.png`} alt={projects[projectId].title} />
                    </div>
                    <div className="project-info">
                        <p>{projects[projectId].description}</p>
                        <div className="project-links">
                            {projects[projectId].GitLink && <a href={projects[projectId].GitLink} target="_blank" rel="noopener noreferrer">
                                <img src="/github-mark.svg" />
                                GitHub
                            </a>}
                            {projects[projectId].WebLink && <a href={projects[projectId].WebLink} target="_blank" rel="noopener noreferrer">Website</a>}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>Project not found!</div>
    }



    
}

export default IndividualProjects;