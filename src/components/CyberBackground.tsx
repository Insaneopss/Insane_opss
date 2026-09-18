import React from 'react';

export const CyberBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7b2eda]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ff3333]/10 blur-[120px] rounded-full" />
      <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-[#ff44cc]/10 blur-[100px] rounded-full" />
    </div>
  );
};
