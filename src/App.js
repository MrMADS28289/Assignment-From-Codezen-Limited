import TabsComponent from "./Components/TabsComponent";
import Header from "./Components/Header";
import "./App.css";
import DesignSystem from "./Components/DesignSystem";

function App() {
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

export default App;
