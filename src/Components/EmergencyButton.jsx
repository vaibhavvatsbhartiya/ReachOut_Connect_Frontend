import React from 'react';

const EmergencyButton = (props) => {
  // Function to handle the emergency button click
  const handleEmergencyClick = () => {
    // Add your logic here for emergency actions (e.g., alerts, notifications, etc.)
    // This function will be triggered when the emergency button is clicked
    console.log('Emergency button clicked');
  };

  return (
    <button
      className="bg-red-400 hover:bg-red-600 text-white font-bold uppercase w-40 py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      onClick={handleEmergencyClick}
    >
      {props.inputText}
    </button>
  );
};

export default EmergencyButton;
