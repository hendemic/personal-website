import React from 'react';
import '../../styles/global.scss';
import *as LayoutStyle from './layout.module.scss';
import {NavBar} from '../navbar/navbar.js';

export const Layout = ({ children }) => {

  return (
    <div className={LayoutStyle.wrapper}>
      <NavBar />
      <div className={LayoutStyle.main}>
        { children }
      </div>
      <footer>©2022 Mike Henderson </footer>
    </div>
  )
}
