import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 text-white" style={{backgroundColor:"#26282e"}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <img src={myImage} alt="Logo" className="rounded-full" /> */}
          <span className="text-xl font-bold logo">Time Tracker App</span>
        </div>
        {/* <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src={myImage} alt="Profile" className="rounded-full" />
            <span>Username</span>
          </div>
          <button className="hover:underline">Logout</button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
