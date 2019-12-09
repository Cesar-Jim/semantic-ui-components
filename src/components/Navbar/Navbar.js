import React from 'react';

const Navbar = () => {
  return (
    <>
      <br />
      <br />
      <h3 className='ui header centered'>NAVBARS</h3>
      {/* Example #1 */}
      <div className='ui attached stackable menu'>
        <div className='ui container'>
          <a href='/' className='item'>
            <i className='home icon'></i> Home
          </a>
          <a href='/' className='item'>
            <i className='grid layout icon'></i> Browse
          </a>
          <a href='/' className='item'>
            <i className='mail icon'></i> Messages
          </a>
          <div className='ui simple dropdown item'>
            More
            <i className='dropdown icon'></i>
            <div className='menu'>
              <a href='/' className='item'>
                <i className='edit icon'></i> Edit Profile
              </a>
              <a href='/' className='item'>
                <i className='globe icon'></i> Choose Language
              </a>
              <a href='/' className='item'>
                <i className='settings icon'></i> Account Settings
              </a>
            </div>
          </div>
          <div className='right item'>
            <div className='ui input'>
              <input type='text' placeholder='Search...' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
