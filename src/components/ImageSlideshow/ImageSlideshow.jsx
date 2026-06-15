import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import projectData from '../Assets/ProjectData.json';
import './ImageSlideshow.css'; // Custom styles

import project_one from '../Assets/projects/ncg.png';
import project_two from '../Assets/projects/Ecom.png';
import project_three from '../Assets/projects/onlinequiz.png';
import project_four from '../Assets/projects/bank.png';
import project_five from '../Assets/projects/EcomShop.png';

const ImageSlideshow = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const slideProjects = [
    { ...projectData.find(p => p.id === 2), localImage: project_one },
    { ...projectData.find(p => p.id === 1), localImage: project_two },
    { ...projectData.find(p => p.id === 7), localImage: project_three },
    { ...projectData.find(p => p.id === 3), localImage: project_four },
    { ...projectData.find(p => p.id === 4), localImage: project_five }
  ].filter(p => p.id); // Safeguard in case find returns undefined

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slideProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovering, slideProjects.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev - 1 + slideProjects.length) % slideProjects.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev + 1) % slideProjects.length);
  };

  return (
    <div 
      className="premium-slider-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="slideshow-slides-wrapper">
        {slideProjects.map((project, index) => {
          const description = project.projectDescription || project.ProjectDescription || project.context;
          const isActive = index === currentIndex;
          
          return (
            <div 
              className={`slideshow-slide ${isActive ? 'active' : ''}`} 
              key={project.id}
            >
              {/* Left Column: Project details */}
              <div className="slide-details">
                <span className="project-category">{project.domain || "Web Development"}</span>
                <h2 className="project-title">{project.projectName}</h2>
                <p className="project-description">
                  {description.length > 180 ? `${description.slice(0, 180)}...` : description}
                </p>
                
                {/* Tech Badge capsules */}
                <div className="tech-badges-container">
                  {project.individualContribution?.skills?.slice(0, 4).map((skill, sIdx) => (
                    <span className="tech-badge" key={sIdx}>
                      {skill.image && <img src={skill.image} alt={skill.name} className="tech-badge-icon" />}
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <button 
                  className="slide-cta-btn"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  View Case Study <FiArrowRight className="cta-icon" />
                </button>
              </div>

              {/* Right Column: Project Image Mockup */}
              <div className="slide-media" onClick={() => navigate(`/project/${project.id}`)}>
                <div className="media-card-wrapper">
                  <div className="glass-reflection-overlay"></div>
                  <img src={project.localImage} alt={project.projectName} className="media-image" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow-btn prev" onClick={handlePrev} aria-label="Previous Project">
        <FiChevronLeft />
      </button>
      <button className="slider-arrow-btn next" onClick={handleNext} aria-label="Next Project">
        <FiChevronRight />
      </button>

      {/* Progress Dots */}
      <div className="slider-dots-container">
        {slideProjects.map((_, index) => (
          <button 
            key={index}
            className={`slider-dot-btn ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
