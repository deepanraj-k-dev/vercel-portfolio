import React, { useState } from 'react';
import './Resume.css';
import { Element } from 'react-scroll';
import resume from '../Assets/Deepanraj K Resume.pdf';
import resumeData from '../Assets/ResumeData.json';
import { FiBriefcase, FiBookOpen, FiAward, FiDownload, FiMapPin, FiCalendar, FiCheck } from 'react-icons/fi';

const Resume = () => {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <Element name="resume">
            <div className='resume-container'>
                <div className='resume-left-card'>
                    <div className='resume-badge'>Portfolio</div>
                    <h2 className='resume-title'>My <span>Resume</span></h2>
                    <p className='resume-subtitle-text'>Explore my professional background, education history, and industry certifications.</p>
                    
                    {/* Tab Navigation Controls */}
                    <div className='resume-tabs'>
                        <button 
                            className={`resume-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                            onClick={() => setActiveTab('experience')}
                        >
                            <FiBriefcase className="tab-icon" /> Experience
                        </button>
                        <button 
                            className={`resume-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                            onClick={() => setActiveTab('education')}
                        >
                            <FiBookOpen className="tab-icon" /> Education
                        </button>
                        <button 
                            className={`resume-tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('certifications')}
                        >
                            <FiAward className="tab-icon" /> Certifications
                        </button>
                    </div>

                    <a href={resume} className='resume-download-btn' target="_blank" rel="noopener noreferrer">
                        <FiDownload /> Download Full PDF
                    </a>
                </div>

                <div className='resume-right-content'>
                    {activeTab === 'experience' && (
                        <div className="resume-timeline animate-fade-in">
                            {resumeData.experience.map((exp) => (
                                <div className="timeline-item" key={exp.id}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="card-header">
                                            <div>
                                                {exp.tag && <span className="role-tag">{exp.tag}</span>}
                                                <h3 className="item-title">{exp.role}</h3>
                                                <h4 className="item-subtitle">{exp.company}</h4>
                                            </div>
                                            <div className="item-meta">
                                                <span className="meta-info"><FiCalendar /> {exp.duration}</span>
                                                <span className="meta-info"><FiMapPin /> {exp.location}</span>
                                            </div>
                                        </div>
                                        <ul className="timeline-details">
                                            {exp.details.map((detail, idx) => (
                                                <li key={idx}>
                                                    <FiCheck className="check-icon" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className="resume-timeline animate-fade-in">
                            {resumeData.education.map((edu) => (
                                <div className="timeline-item" key={edu.id}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card">
                                        <div className="card-header">
                                            <div>
                                                {edu.tag && <span className="role-tag education">{edu.tag}</span>}
                                                <h3 className="item-title">{edu.degree}</h3>
                                                <h4 className="item-subtitle">{edu.institution}</h4>
                                            </div>
                                            <div className="item-meta">
                                                <span className="meta-info"><FiCalendar /> {edu.duration}</span>
                                                <span className="meta-info"><FiMapPin /> {edu.location}</span>
                                            </div>
                                        </div>
                                        <div className="timeline-body">
                                            <p>{edu.description}</p>
                                            {edu.score && (
                                                <div className="education-score">
                                                    <span className="score-label">Graduation Score</span>
                                                    <span className="score-value">{edu.score}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'certifications' && (
                        <div className="certifications-grid animate-fade-in">
                            {resumeData.certifications.map((cert) => (
                                <div className="cert-card" key={cert.id}>
                                    <div className="cert-badge"><FiAward /></div>
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <h4 className="cert-issuer">{cert.issuer}</h4>
                                    <span className="cert-date"><FiCalendar /> {cert.duration}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Element>
    );
};

export default Resume;
