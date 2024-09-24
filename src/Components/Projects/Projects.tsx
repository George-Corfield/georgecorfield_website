import React from 'react';
import ProjectTile from '../ProjectTile/ProjectTile';
import { projects } from '../../data/projects';  // Adjust the path as needed

function Projects() {
    return (
        <div className='projects page'>
            <h2>Projects</h2>
            <div className='project-grid'>
                {Object.keys(projects).map((key) => {
                    const project = projects[key];
                    return (
                        <ProjectTile
                            key={key}
                            title={project.title}
                            image={project.image}
                            GitLink={project.GitLink}
                            WebLink={project.WebLink}
                            description={project.description}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Projects;