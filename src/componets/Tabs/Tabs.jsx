import React from "react";
import cls from "./tabsStyles.module.scss";


export const Tabs = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
  
    <div className={className}>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`${cls.btn} ${activeTab == index ? cls.active : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

