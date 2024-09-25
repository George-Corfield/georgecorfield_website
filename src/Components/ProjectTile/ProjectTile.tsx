import React from 'react';
import { ProjectProps } from '../../data/projects';
import { Link } from 'react-router-dom';

const ProjectTile: React.FC<ProjectProps> = ({ link, title, image, GitLink, WebLink, description }) => {
    return (
        <div className="project-tile">
            <div className="project-image">
                <img src={`/projectImages/${image}.png`} alt={title} />
            </div>
            <div className="project-info">
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="project-links">
                    <Link to={`/projects/${link}`}>
                        <button>More Info</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectTile;