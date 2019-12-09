import React from 'react';

// Components
import Navbar from './components/Navbar/Navbar';

// Styles

let mainHeaderStyle = {
  borderBottom: '1px solid #e8e8e8',
};

const App = () => {
  return (
    <>
      <div className='ui sixteen column centered grid' style={mainHeaderStyle}>
        <div className='row'>
          <h2 className='ui icon header'>
            <i className='settings icon'></i>
            <div className='content'>
              Semantic UI Components Library
              <div className='sub header'>
                My reusable componentes from{' '}
                <a className='ui link' href='https://semantic-ui.com/'>
                  semantic-ui
                </a>
              </div>
              <div className='sub header tiny'>
                <em>by Cesar Jimenez</em>
              </div>
            </div>
          </h2>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default App;
