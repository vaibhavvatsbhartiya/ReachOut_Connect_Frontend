import React from 'react';
import serviceData from '../../data/servicecontent'; 

// use to show title and para
const ContentSection = () => {
  return (
    <div className="container mx-auto p-8">
      {serviceData.map((item, index) => (
        <div key={index} className="mb-8 p-4 border-4 ">
          <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
          <p className="text-lg">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
