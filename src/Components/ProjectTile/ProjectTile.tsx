import React from 'react';
import { ProjectProps } from '../../data/projects'; // Adjust the path as needed

const ProjectTile: React.FC<ProjectProps> = ({ title, image, GitLink, WebLink, description }) => {
    return (
        <div className="project-tile">
            <div className="project-image">
                {/* Replace 'image' with the actual image path or component if available */}
                <img src={`./projectImages/${image}.png`} alt={title} />
            </div>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-links">
                    {GitLink && <a href={GitLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {WebLink && <a href={WebLink} target="_blank" rel="noopener noreferrer">Website</a>}
                </div>
            </div>
        </div>
    );
};

export default ProjectTile;