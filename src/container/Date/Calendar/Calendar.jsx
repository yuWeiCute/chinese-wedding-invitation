import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.scss';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Custom Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={({ activeStartDate, date, view }) => (view === 'month' && date.getDate() === 16 ? (
        //   <div className="heart-icon" />
        ) : null)}
      />
    </div>
  );
};

export default MyCalendar;
