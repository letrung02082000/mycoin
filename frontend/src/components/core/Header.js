import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="flex px-4 py-2 justify-around h-12 items-center">
      <div class="flex space-x-4">
        <Link to="/intro" class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
          Ví
        </Link>
        <Link to="/explorer" class="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">
          Quản lý giao dịch
        </Link>
      </div>
    </div>
  );
};

export default Header;
