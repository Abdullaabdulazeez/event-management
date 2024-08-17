import React, { useState } from 'react';
import axios from 'axios';

function EventForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [participantLimit, setParticipantLimit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/events',
        { name, date, time, location, description, participantLimit },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('Event created successfully');
    } catch (error) {
      alert('Failed to create event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Event Date" required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Event Time" required />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Event Location" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Description" required />
      <input type="number" value={participantLimit} onChange={(e) => setParticipantLimit(e.target.value)} placeholder="Participant Limit" required />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
