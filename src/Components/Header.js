import React from "react";

const Header = () => {
  return (
    <div className=" static z-10 bg-gray-700 w-full">
      <div className="flex flex-row place-content-center relative float-none items-center">
        <div className="flex py-0.5 px-0 box-border flex-col place-content-center items-center">
          <h2 className="text-2xl py-6 text-white">User Database</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
