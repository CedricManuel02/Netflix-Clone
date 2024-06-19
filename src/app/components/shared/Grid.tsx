import React from "react";
export default function Grid({children} : any) {
  return (
    <div className="scrollbar h-auto  scrollbar-thumb-gray-900 scrollbar-thumb-rounded flex items-center justify-start gap-4 text-white w-full overflow-x-scroll py-10">
      {children}
    </div>
  );
}
