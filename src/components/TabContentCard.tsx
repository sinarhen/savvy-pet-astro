import type { TabData } from "@/data/tabData";

interface TabContentCardProps {
  tabData: TabData;
}

export default function TabContentCard({ tabData }: TabContentCardProps) {
  return (
    <div className="flex flex-col gap-[15px] h-[440px] items-start justify-start w-[824px]">
      <div className="flex flex-col gap-9 items-start justify-start w-full">
        <div className="flex flex-col gap-[30px] items-start justify-start w-full">
          <div className="flex flex-row gap-9 items-start justify-start w-full">
            {/* Image */}
            <div 
              className="flex-1 bg-center bg-cover bg-no-repeat rounded-2xl h-full min-h-[200px]"
              style={{ backgroundImage: `url('${tabData.image}')` }}
            />
            
            {/* Content Column */}
            <div className="flex-1 flex flex-col gap-6 items-start justify-start">
              {/* Title */}
              <h3 className="font-['Mona_Sans',_sans-serif] font-bold text-[#242c39] text-[36px] leading-none">
                {tabData.title}
              </h3>
              
              {/* Description */}
              <p className="font-['Mona_Sans',_sans-serif] font-normal text-[#656689] text-[16px] leading-[30px]">
                {tabData.description}
              </p>
              
              {/* Feature List */}
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                {tabData.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-[#ffffff] flex flex-row gap-3 items-start justify-start px-4 py-3 relative rounded-2xl w-full border border-[#dadcde]"
                  >
                    <div className="flex flex-col h-5 justify-end text-[#3e9ae6] text-[16px] w-4">
                      <span className="block leading-[normal]">{feature.icon}</span>
                    </div>
                    <div className="flex-1 font-['Mona_Sans',_sans-serif] font-medium text-[#656689] text-[16px]">
                      <p className="block leading-[normal]">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Learn More Link */}
              <a 
                href={tabData.learnMoreLink}
                className="flex flex-row gap-[5px] items-start justify-start text-[#3e9ae6] text-[16px] text-left hover:underline"
              >
                <div className="font-['Onest',_sans-serif] font-bold">
                  <span className="leading-[normal]">Learn more</span>
                </div>
                <div className="font-['Font_Awesome_6_Free',_sans-serif]">
                  <span className="leading-[normal]">▶</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}