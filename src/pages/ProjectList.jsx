// src/pages/ProjectList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css';

const ProjectList = ({ projects }) => {
    return (
        <div className='project-list-page'>
            <div className="project-list-header">
                <span className="project-list-badge">Portfolio</span>
                <h1>Creative <span>Works</span></h1>
                <p>A selection of projects demonstrating backend engineering, system architecture, and interactive user interfaces.</p>
            </div>

            <div className='project-card-grid'>
                {projects.map(project => {
                    const firstImage = project.individualContribution?.ScreenShots?.[0] || 'https://raw.githubusercontent.com/Deepanraj1508/images/main/NCG/1.png';
                    const skills = project.individualContribution?.skills || [];
                    
                    return (
                        <div key={project.id} className='project-card-wrapper'>
                            <div className="project-card-image-box">
                                <img src={firstImage} alt={project.projectName} className="project-card-image" />
                                <span className="project-card-domain-badge">{project.domain}</span>
                            </div>
                            
                            <div className="project-card-content">
                                <span className="project-card-duration">{project.duration}</span>
                                <h3 className="project-card-title">{project.projectName}</h3>
                                <p className="project-card-context">{project.context}</p>
                                
                                <div className="project-card-skills-row">
                                    {skills.slice(0, 5).map((skill, index) => (
                                        <div key={index} className="project-card-skill-icon-wrapper" title={skill.name}>
                                            {skill.image && <img src={skill.image} alt={skill.name} className="project-card-skill-icon" />}
                                        </div>
                                    ))}
                                    {skills.length > 5 && (
                                        <div className="project-card-skill-more">
                                            +{skills.length - 5}
                                        </div>
                                    )}
                                </div>

                                <Link to={`/project/${project.id}`} className='project-card-btn-link'>
                                    <button className='project-card-btn'>View Details</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectList;
