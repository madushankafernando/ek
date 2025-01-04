/* eslint-disable @next/next/no-img-element */

import React from "react";
// import GridLogo from './Grid.svg'

const LogoGrid: React.FC = () => {
  return (
    <div className="md:mt-36 mt-16 px-6">
    {/* {GridLogo} */}
    <img src="./Grid.png" alt="" className="hidden md:block"/>
    <img src="/MobileGrid.png" alt="" className="md:hidden w-full" />
    </div>
  );
};

export default LogoGrid;
