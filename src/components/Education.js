import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Technology in Artificial Intelligence",
      institution: "IIT Jodhpur, India",
      year: "2022 - 2025",
      details: (
        <>Paper accepted on <strong>CVPR</strong> workshop 2025 on GenPhoto - a Visual interactive system for TTI generation</>
      )
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "IET DAVV, India",
      year: "2011 - 2015",
      details: ""
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <br/>
        <h2>Education</h2>
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.year}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
