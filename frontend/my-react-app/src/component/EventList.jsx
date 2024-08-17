import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setEvents(response.data);
      } catch (error) {
        alert('Failed to fetch events');
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
