import React, { useState } from 'react';
import axios from 'axios';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    numberOfPeople: 1,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking successful!');
    } catch (error) {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="destination" placeholder="City/State" value={formData.destination} onChange={handleChange} required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <input name="numberOfPeople" type="number" value={formData.numberOfPeople} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
