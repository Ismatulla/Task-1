import React from 'react';

function Navbar() {
  return (
    <div className='shadow-lg flex justify-center bg-white'>
      <div className="container flex justify-between h-20 items-center">
        <div>Logo</div>
        <ul className='flex justify-between gap-10'>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>logo</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;