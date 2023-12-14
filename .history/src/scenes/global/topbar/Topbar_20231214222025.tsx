import React from 'react'

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
// import type { SearchProps } from '../Search';

import { useTheme, useThemeUpdate, lightThemeStyles, darkThemeStyles } from '../../../ThemeContext'
import './Topbar.css'

const Topbar = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
  
    const themeStyles = {
      ...(darkTheme ? darkThemeStyles : lightThemeStyles),      
    }

  return (
    <div className='topbar-container' style={{ ...themeStyles, maxWidth: ''}}>
      <div className='search-container'>
        <input type='search'
          style={{ backgroundColor: darkTheme ? "#7085970f" : "#DDE6ED", color: darkTheme ? "#DDE6ED": "#27374D"  }}
          placeholder='search'
        />
        <div className='search-button' style={{ backgroundColor: darkTheme ? "#7085970f" : "#DDE6ED" , color: darkTheme ? "white": "black" }}>
          <IoMdSearch />
        </div>

      </div>

      <div className='icons-container'>
        <div className="each-icon" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
          {
            darkTheme ? <MdOutlineDarkMode /> : <MdOutlineLightMode />
          }
        </div>
        <div className="each-icon">
          <MdNotificationsNone />
        </div>
        <div className="each-icon">
          <IoSettingsOutline />
        </div>
        <div className="each-icon">
          <MdPersonOutline />
        </div>
        
      </div>
    </div>
  )
}

export default Topbar

