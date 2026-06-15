import React from 'react';
import { Element } from 'react-scroll';
import { FiMapPin, FiCode, FiCpu, FiDatabase, FiServer, FiTrendingUp } from 'react-icons/fi';
import './AboutPage.css';
import '../Responsive/Responsive.css';
import img_prev from '../Assets/about/img-prev2.png';
import img_after from '../Assets/about/image-after.png';

const AboutPage = () => {
  return (
    <Element name="about">
      <div className="about-section">
        <div className="about-wrapper">
          {/* Right Side: Images Framed Card */}
          <div className="about-image-card">
            <div className="about-img-container">
              <img className="about-img-after" src={img_after} alt="Deepanraj Hover" />
              <div className="about-avatar-wrapper">
                <img className="about-img-prev" src={img_prev} alt="Deepanraj" />
              </div>
            </div>
          </div>

          {/* Right Side: Content Block */}
          <div className="about-content-column">
            <div className="about-title-block">
              <span className="about-badge">About Me</span>
              <h2 className="about-main-title">Who <span>I Am</span></h2>
            </div>
            
            <p className="about-intro-text">
              I am a passionate Software Developer based in Tamil Nadu, India, specializing in building robust back-end systems, database architectures, and interactive user interfaces.
            </p>

            <p className="about-body-text">
              With hands-on experience in Python, Django, React, and SQL, I love bridging the gap between back-end data engineering and seamless front-end user experiences. I focus on writing clean, testable code and structuring scalable databases to create meaningful software solutions.
            </p>

            {/* Stats/Details Grid */}
            <div className="about-details-grid">
              <div className="about-detail-card">
                <div className="detail-icon"><FiCode /></div>
                <div>
                  <h4>Role</h4>
                  <p>Software Developer</p>
                </div>
              </div>

              <div className="about-detail-card">
                <div className="detail-icon"><FiMapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>

              <div className="about-detail-card">
                <div className="detail-icon"><FiCpu /></div>
                <div>
                  <h4>AI & LLM</h4>
                  <p>OpenAI Integrations</p>
                </div>
              </div>

              <div className="about-detail-card">
                <div className="detail-icon"><FiTrendingUp /></div>
                <div>
                  <h4>SEO & Dev</h4>
                  <p>Optimization Focus</p>
                </div>
              </div>
            </div>

            {/* Strengths List */}
            <div className="about-strengths-section">
              <h3>Technical Focus</h3>
              <div className="strengths-list">
                <div className="strength-item">
                  <div className="strength-bullet"><FiServer /></div>
                  <div>
                    <strong>Back-end Engineering:</strong> Building secure RESTful APIs and backend services using Django & Flask.
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-bullet"><FiDatabase /></div>
                  <div>
                    <strong>Database Optimization:</strong> Managing and optimizing SQL schemas, queries, and relations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutPage;
