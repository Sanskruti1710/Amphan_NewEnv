import React from 'react';
import css from './Header.module.css';
import { IoHome, IoLogoIonic } from 'react-icons/io5';
import { FaSearch, FaMicrophone } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src="https://th.bing.com/th/id/OIP.YWTKpFVe5ZQAVo3JbFEAVgHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain" height="50px" width="50px" alt="" />
        <div className={css.companyName}>Mining Roots</div>
      </div>

      <div className={css.right}>
        <div className={css.h2}>
          {/* <h2>Amphan</h2> */}
        </div>

        <div className={css.menu}></div>

        <div className={css.searchContainer}>
          <FaSearch className={css.searchIcon} />
          <input type="text" className={css.search} placeholder="Search" />
          <FaMicrophone className={css.voiceIcon} />
        </div>

        <IoHome className={css.homeIcon} />
      </div>
    </div>
  );
}

export default Header;
