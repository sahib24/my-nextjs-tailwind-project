"use client";

export default function Tabs({ currentTab, onTabChange }) {
  return (
    <div className="flex justify-center my-10">
      <div className="flex items-center gap-20 w-full justify-center">
        {[1, 2, 3, 4, 5].map((tabId, index) => (
          <div key={tabId} className="relative flex items-center">
            {/* Connector Line */}
            {index !== 0 && (
              <div className="absolute -left-20 top-1/2 w-20 h-[4px] bg-[#e6e6e6]"></div>
            )}

            {/* Button */}
            <button
              onClick={() => onTabChange(tabId)}
              className={`
                p-2 border rounded-sm
                transition-all flex  items-center gap-1 
                ${
                  currentTab === tabId
                    ? "border-green-700 text-green-700 "
                    : "border-gray-300 text-gray-600 "
                }
              `}
            >
              {/* Number + Title */}
              <div
                className={`text-[15px] font-n\  ${
                  currentTab === tabId ? "text-green-700" : "text-gray-700"
                }`}
              >
                {tabId}.
              </div>

              {/* TAB LABELS */}
              {tabId === 1 && (
                <span className=" leading-tight text-center">
                  CO <br /> Information
                </span>
              )}

              {tabId === 2 && (
                <span className="text-[15px] leading-tight text-center">
                  Document <br /> Attachment
                </span>
              )}

              {tabId === 3 && (
                <span className="text-[15px] leading-tight text-center">
                  CO Quantity
                </span>
              )}

              {tabId === 4 && (
                <span className="text-[15px] leading-tight text-center">
                  Preview
                </span>
              )}

              {tabId === 5 && (
                <span className="text-[15px] leading-tight text-center">
                  Payment
                </span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
