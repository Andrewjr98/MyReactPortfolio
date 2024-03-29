import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs m-3" style={{

      backgroundColor: '#faf0ca',
      width: 'max',
      height: 'max'

    }}  >

      <li className="nav-item" >
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Andrew Randolph
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#Skills'
          onClick={() => handlePageChange('Skills')}
          className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Projects`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className='nav-item'>
        <a
          href="https://drive.google.com/file/d/1Jsj8adq53xGMwDHWEuE0atT3MFSR8VWP/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          // onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;