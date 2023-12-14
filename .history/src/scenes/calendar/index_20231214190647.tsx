import React from 'react'
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import formatDate  from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { useTheme, lightThemeStyles, darkThemeStyles } from '../../ThemeContext'

export const Calendar = () => {
  
  const darkTheme = useTheme()

  const themeStyles = {
    ...(darkTheme ? darkThemeStyles : lightThemeStyles),
    color: darkTheme ? "#DDE6ED" : "#27374D",
    margin: 0,
    padding: 0
  }
  return (
    <div>
      
    </div>
  )
}
