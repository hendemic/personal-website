import React from 'react';
import '../../styles/global.scss';
import './layout.module.scss';
import {NavBar} from '../navbar/navbar.js';

export const Layout = ({ children }) => {

  return (
    <div className="layout">
      <NavBar />
      <div className="content">
        { children }
      </div>
    </div>
  )
}
