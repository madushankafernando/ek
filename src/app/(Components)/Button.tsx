import React from 'react';

export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="py-2 px-4 rounded-full font-regular text-xs md:text-base bg-white text-black shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.06)] hover:bg-gray-100 hover:shadow-[0px_6px_8px_rgba(0,0,0,0.15),0px_4px_6px_rgba(0,0,0,0.1)] transition-all duration-200">
      <span className="z-10">{props.children}</span>
    </button>
  );
};
