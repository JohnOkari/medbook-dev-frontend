import React, { useState } from 'react';

const RecordsComponent = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [comments, setComments] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary data submission or validation here
    // You can access the collected data via the state variables
    console.log('Name:', name);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Gender:', gender);
    console.log('Service Type:', serviceType);
    console.log('Comments:', comments);

    // Example: Fetch POST request to send the data to an endpoint
    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        dateOfBirth,
        gender,
        serviceType,
        comments,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the endpoint
        console.log('Response from endpoint:', data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name of Patient:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} />
      </div>
      <div>
        <label>Gender:</label>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Type of Service:</label>
        <select value={serviceType} onChange={handleServiceTypeChange}>
          <option value="">Select</option>
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          <option value="service3">Service 3</option>
        </select>
      </div>
      <div>
        <label>General Comments:</label>
        <textarea value={comments} onChange={handleCommentsChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecordsComponent;
