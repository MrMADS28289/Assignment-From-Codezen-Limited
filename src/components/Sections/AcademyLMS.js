import React from "react";
import DesignSystem from "../DesignSystem";
import TabsComponent from "../TabsComponent";
import Header from "../Header";
import "../../Styles/AcademyLMS.css";

export default function AcademyLMS() {
  return (
    <>
      <Header />
      <div className="parent-container">
        <TabsComponent />
        <DesignSystem />
      </div>
    </>
  );
}
