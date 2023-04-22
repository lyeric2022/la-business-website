import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Our Hours
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          Weekdays : 10:00 AM - 9:00 PM<br/>
          Weekends : 10:00 AM - 9:00 PM
        </ul>
      )}
    </div>
  );
}

export default Dropdown;