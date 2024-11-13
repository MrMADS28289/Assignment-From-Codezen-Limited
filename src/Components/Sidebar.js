// Sidebar.js
import React from "react";
import "../Styles/Sidebar.css";

const Sidebar = ({ setActiveSection }) => {
  const menuItems = [
    "Dashboard",
    "Analytics",
    "Course",
    "Lessons",
    "Quizzes",
    "Meeting",
    "Tutor Booking",
    "Assignment",
    "Announcement",
    "Q&A",
    "Withdraw Requests",
    "Instructors",
    "Students",
    "Add-ons",
    "Tools",
    "Settings",
  ];

  return (
    <div className="sidebar">
      <h2>Academy LMS</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item} onClick={() => setActiveSection(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
