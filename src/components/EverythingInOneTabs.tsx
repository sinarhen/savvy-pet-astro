import React, { useState } from "react";
import { tabsData } from "@/data/tabData";
import TabContentCard from "./TabContentCard";

export default function EverythingInOneTabs() {
  const [activeTab, setActiveTab] = useState("salon-owners");

  const currentTab = tabsData.find(tab => tab.id === activeTab);

  return (
    <div className="flex flex-row gap-8 h-[500px] items-center justify-start p-0 relative w-full">
      {/* Left Navigation Sidebar */}
      <div className="bg-[#ffffff] flex flex-col gap-6 items-start justify-start px-0 py-4 relative shrink-0 w-[254px]">
        {tabsData.map((tab, index) => (
          <React.Fragment key={tab.id}>
            {/* Tab Button */}
            {tab.id === "mobile-inhouse" ? (
              // Non-clickable tab (as per original design)
              <div className="flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
                <div className="h-[22px] overflow-clip relative shrink-0 w-[21px]">
                  <div 
                    className="absolute flex flex-col font-['Font_Awesome_6_Free',_sans-serif] justify-center leading-[0] not-italic size-[33.75px] text-[#a2cfdd] text-[16px] text-center tracking-[-0.96px] translate-x-[-50%] translate-y-[-50%]" 
                    style={{ top: "calc(50% - 0.125px)", left: "calc(50% + 0.375px)" }}
                  >
                    <p className="adjustLetterSpacing block leading-[normal]">{tab.icon}</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Onest',_sans-serif] font-medium justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#a2cfdd] text-[16px] text-left text-nowrap">
                  <p className="[text-overflow:inherit] block leading-[22px] overflow-inherit whitespace-pre">{tab.label}</p>
                </div>
              </div>
            ) : (
              // Clickable tab
              <button 
                className="cursor-pointer flex flex-row gap-2 items-start justify-start overflow-visible p-0 relative shrink-0"
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
                  <div className="h-[22px] overflow-clip relative shrink-0 w-[21px]">
                    <div 
                      className="absolute flex flex-col font-['Font_Awesome_6_Free',_sans-serif] justify-center leading-[0] not-italic size-[33.75px] text-[16px] text-center tracking-[-0.96px] translate-x-[-50%] translate-y-[-50%]" 
                      style={{ 
                        top: "calc(50% - 0.125px)", 
                        left: "calc(50% + 0.375px)",
                        color: activeTab === tab.id ? "#15bac6" : "#a2cfdd"
                      }}
                    >
                      <p className="adjustLetterSpacing block leading-[normal]">{tab.icon}</p>
                    </div>
                  </div>
                  <div 
                    className="flex flex-col font-['Onest',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-left text-nowrap"
                    style={{ color: activeTab === tab.id ? "#242c3a" : "#a2cfdd" }}
                  >
                    <p className="block leading-[22px] whitespace-pre">{tab.label}</p>
                  </div>
                </div>
              </button>
            )}
            
            {/* Divider - Don't show after last item */}
            {index < tabsData.length - 1 && (
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src="/01355982e58913848112931da1bc56c8099d810c.svg" />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Main Content Area - Card */}
      <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-16 items-center justify-start p-[30px] relative rounded-[48px] shadow-[0px_40px_40.7px_-16.588px_rgba(168,187,188,0.19),0px_12px_24.675px_0px_rgba(173,182,183,0.27)]  w-full">
          {currentTab && <TabContentCard tabData={currentTab} />}
      </div>
    </div>
  );
}