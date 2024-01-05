import React from 'react';
// import 
import imga from '../Images/9.png';
import imgb from '../Images/8.png';
import imgc from '../Images/7.png';

const Card = ({ image, title, description }) => {
  return (
    <div className="w-full   sm:w-1/2 md:w-1/4 ml-auto mr-auto  p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
        <img src={image} alt={title} className="w-60 h-auto " />
        <div className="p-4 ">
          <h3 className="text-xl text-center font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function CardList() {
  const cards = [
    {
      image: imga,
      title: 'Volunteers',
      description: 'Support causes, organizations, or communities for the betterment of society.',
    },
    {
      image: imgb,
      title: 'Cyber Fighters',
      description: 'Cybersecurity Services: Protecting systems from cyber threats and attacks.',
    },
    {
      image: imgc,
      title: 'Utilities and Essential Services',
      description: 'Telecommunications Services: Phone, internet, cable services, etc.',
    },
    // Add more card objects as needed
  ];

  return (
    <div className="flex flex-wrap -mx-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
