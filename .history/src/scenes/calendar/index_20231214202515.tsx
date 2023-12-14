import React, { useState } from 'react';
import FullCalendar, { EventClickArg, DateClickArg, EventApi } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useTheme, lightThemeStyles, darkThemeStyles } from '../../ThemeContext';
import Header from '../../components/header/Header';
import './Calendar.css';
import { List } from 'antd';

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateClick = (selected: DateClickArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  };

  return (
    <div className='calendar-outer-container'>
      <Header title='CALENDAR' subtitle='Full Calendar Interactive Page' />

      <div className="cal-wrapper">
        <div className="cal-sidebar-container">
          <h5>Events</h5>
          <ul>
            {currentEvents.map((event) => (
              <li key={event.id}>
                <h4>{event.title}</h4>
                <p>{event.startStr}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="cal-container">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            // selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

