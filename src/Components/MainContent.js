// MainContent.js
import React from "react";
import Dashboard from "./Sections/Dashboard";
import Analytics from "./Sections/Analytics";
import Course from "./Sections/Course";
import Lessons from "./Sections/Lessons";
import Quizzes from "./Sections/Quizzes";
import Meeting from "./Sections/Meeting";
import TutorBooking from "./Sections/TutorBooking";
import Assignment from "./Sections/Assignment";
import Announcement from "./Sections/Announcement";
import QA from "./Sections/QA";
import WithdrawRequests from "./Sections/WithdrawRequests";
import Instructors from "./Sections/Instructors";
import Students from "./Sections/Students";
import Addons from "./Sections/Addons";
import Tools from "./Sections/Tools";
import Settings from "./Sections/Settings";

const MainContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Analytics":
        return <Analytics />;
      case "Course":
        return <Course />;
      case "Lessons":
        return <Lessons />;
      case "Quizzes":
        return <Quizzes />;
      case "Meeting":
        return <Meeting />;
      case "Tutor Booking":
        return <TutorBooking />;
      case "Assignment":
        return <Assignment />;
      case "Announcement":
        return <Announcement />;
      case "Q&A":
        return <QA />;
      case "Withdraw Requests":
        return <WithdrawRequests />;
      case "Instructors":
        return <Instructors />;
      case "Students":
        return <Students />;
      case "Add-ons":
        return <Addons />;
      case "Tools":
        return <Tools />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return <div className="main-content">{renderSection()}</div>;
};

export default MainContent;
