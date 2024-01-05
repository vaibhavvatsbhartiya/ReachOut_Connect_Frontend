import React, { useState } from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What is this app about?",
      answer:
        "This app is a comprehensive platform designed to facilitate immediate assistance and support during critical situations. It connects individuals facing emergencies with essential services, volunteers, and a community-driven network. Our goal is to empower users by providing a seamless interface for seeking aid, reporting incidents, and fostering a collaborative environment for ensuring safety and well-being.",
    },
    {
      question: "How can I get help in emergencies?",
      answer:
        "In case of emergencies, our app offers a user-friendly interface that allows individuals to swiftly access emergency services, alert nearby volunteers, and seek immediate assistance. Users can utilize the app to report emergencies, share their location, and connect directly with relevant authorities or nearby volunteers who can provide aid and support in critical situations. Additionally, our app provides resources, guides, and real-time alerts to ensure users have access to the help they need promptly.",
    },
    {
      question: "How does this app ensure user privacy and data security?",
      answer: "Our app prioritizes user privacy and employs robust security measures. We utilize encryption protocols to safeguard user data and ensure secure transmission of information. User consent is fundamental, and we strictly adhere to data protection regulations. We implement stringent access controls and regularly update our security protocols to uphold the highest standards of privacy for our users.",
    },
    {
        question: "Can volunteers contribute to the app, and how does it benefit the community?",
        answer: "Yes, volunteers play a crucial role in our app's ecosystem. They can sign up to offer their assistance during emergencies, participate in community-driven initiatives, and provide support to those in need. By joining forces with volunteers, our app fosters a culture of collective responsibility, empowering communities to respond swiftly and effectively to emergencies. Their contributions enrich the support network, enabling quicker responses and enhancing overall community resilience.",
      },
      {
        question: "How does this web app revolutionize emergency response?",
        answer: " This web app revolutionizes emergency response by creating a centralized platform that seamlessly connects individuals in distress, emergency services, and a network of volunteers. It facilitates rapid communication and coordination during critical moments, significantly reducing response times. By leveraging technology and community engagement, it transforms the traditional emergency response paradigm, empowering users to take an active role in their safety and creating a more efficient, decentralized system for aid and support.",
      },
      {
        question: "What sets this app apart and how will it redefine safety standards?",
        answer: "Our app stands out by offering a holistic approach to safety. It integrates real-time alerts, community engagement, and immediate access to emergency services into a single platform. Its user-centric design prioritizes ease of use, making safety measures accessible to all. By embracing innovation and collaboration, it sets new benchmarks for safety standards, transforming how individuals, communities, and authorities interact during emergencies, ultimately redefining safety norms for the better.",
      },
    // Add more FAQ items as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto p-4 lg:w-2/3 w-full">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="cursor-pointer bg-white rounded-lg shadow-md p-4"
            onClick={() => handleToggle(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            {expandedIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
