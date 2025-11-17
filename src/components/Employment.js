import React from 'react';

const Employment = () => {
  const empData = [
    {
      company: "Generative AI Data Scientist | ACQUIA",  
      year: " Mar 2024 - Nov 2024",
      details: ""
    },
    {
      company: "Senior Data Scientist | ZS Associates",  
      year: " Apr 2022 - Dec 2023",
      details: ""
    },
    {
      company: " Data Scientist | IBM",  
      year: " Aug 2018 - Mar 2022",
      details: ""
    },
    {
      company: "Software Engineer | Infosys",  
      year: "July 2015 - Aug 2018",
      details: ""
    },
    
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <h2>Education</h2>
        {empData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.company}</h3>
            <p>{edu.year}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Employment;
