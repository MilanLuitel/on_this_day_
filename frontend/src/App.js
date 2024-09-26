import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import './App.css'

function App() {
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [event, setEvent] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL || '/api/result', { month, date });
      setEvent(response.data.event);
      setError('');
    } catch (err) {
      setError('Could not fetch data. Try again.');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>On this day</h1>
      <form onSubmit={handleSubmit} className="myForm">
        <select value={month} onChange={(e) => setMonth(e.target.value)} name="month" id="month">
          <option value="">Select Month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <div>
          <label htmlFor="date-selected">Select date:</label>
          <input type="number" value={date} onChange={(e) => setDate(e.target.value)} name="date" id="date" />
        </div>
        <div>
          <input type="submit" className="submit-btn" value="SUBMIT" />
        </div>
      </form>
      <div className="content">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {event && (
          <>
            <p><strong>YEAR:</strong> {event.year}</p>
            <p><strong>EVENT:</strong> {event.description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

