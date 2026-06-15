import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './Hero.css';
import '../Responsive/Responsive.css';
import vector_img_up from '../Assets/hero/Vector-1.png';
import vector_img_down from '../Assets/hero/Vector-2.png';
import quotes from '../Assets/hero/quote-up.png';
import up_arrow from '../Assets/hero/up right.png';
import main_back from '../Assets/hero/back.png';
import main_front from '../Assets/hero/frontss.png';
import main_middle from '../Assets/hero/middle-.png';
import star from '../Assets/hero/Star.png';
import resume from '../Assets/Deepanraj K Resume.pdf';
import resumeData from '../Assets/ResumeData.json';

const calculateExperience = (experienceList) => {
    if (!experienceList || !Array.isArray(experienceList)) return "2 Years 6 Months";
    
    let totalMonths = 0;
    const monthNames = {
        jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
        jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
        january: 0, february: 1, march: 2, april: 3, june: 5,
        july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
    };

    const parseDateStr = (str) => {
        const clean = str.trim().toLowerCase();
        if (clean === 'present' || clean === 'till date' || clean === 'till-date' || clean === 'tilldate' || clean.includes('till date')) {
            return new Date();
        }
        
        const parts = clean.split(/\s+/);
        if (parts.length >= 2) {
            const mStr = parts[0];
            const yStr = parts[1];
            const month = monthNames[mStr.substring(0, 3)] ?? 0;
            const year = parseInt(yStr, 10);
            if (!isNaN(year)) {
                return new Date(year, month, 1);
            }
        }
        return new Date();
    };

    experienceList.forEach(exp => {
        const duration = exp.duration || "";
        const parts = duration.split(/\s+to\s+|\s*-\s*/);
        if (parts.length >= 2) {
            const startDate = parseDateStr(parts[0]);
            const endDate = parseDateStr(parts[1]);
            
            const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
            if (months > 0) {
                totalMonths += months;
            }
        }
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    let result = "";
    if (years > 0) {
        result += `${years} ${years === 1 ? 'Year' : 'Years'}`;
    }
    if (months > 0) {
        if (result) result += " ";
        result += `${months} ${months === 1 ? 'Month' : 'Months'}`;
    }
    return result || "0 Months";
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const experienceValue = calculateExperience(resumeData.experience);

  return (
    <Element name="home">
    <div className='hero-page'>
        <div className={`main-content ${isHovered ? 'hide' : ''}`}>
            <div className="main-btn">
                <button>Hello!</button>
                <img src={vector_img_up} alt="" />
            </div>
            <div className="main-data">
                <h1>Hi, I'm <span>Deepanraj,</span></h1>
                <h1>Full Stack Developer</h1>
                <img src={vector_img_down} alt="" />
            </div>
        </div>
        <div className='main-content-img'>
            <div className={`main-left ${isHovered ? 'show' : ''}`}>
                <img src={quotes} alt="" />
                <p>I am a passionate individual dedicated to working on end-to-end products that develop sustainable and scalable social and technical systems, creating a meaningful impact.</p>
            </div>
            <div 
              className="main-middle" 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
                <img src={main_back} alt="Back" className="main-back" />
                <img 
                  src={main_middle} 
                  alt="Middle" 
                  className={`main-middle-img ${isHovered ? 'show' : ''}`}
                />
                <img src={main_front} alt="Front" className="main-front" />
                <div className="main-img-btn">
                    <a className='btn-arrow' href={'https://github.com/Deepanraj1508' } target="_blank" rel="noopener noreferrer">GitHub <img src={up_arrow} alt="" /></a>
                    <a className='btn-arrow' href={resume} target="_blank" rel="noopener noreferrer">Resume <img src={up_arrow} alt="" /></a>
                </div>
            </div>
            <div className={`main-right ${isHovered ? 'show' : ''}`}>
                <div className="main-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <h1>{experienceValue}</h1>
                <p>Experience</p>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default Hero;
