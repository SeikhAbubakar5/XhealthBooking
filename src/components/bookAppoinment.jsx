import React, { useState, useEffect } from 'react';
import "./bookAppoinment.css";
import image from "../assets/harper-construction.png";
import axios from 'axios';

const BookAppointment = () => {
  const [formStatus, setFormStatus] = useState('newForm');
  const [fName, setFName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');
  const [chiefComplaints, setChiefComplaints] = useState('');
  const [previousExperience, setPreviousExperience] = useState('');
  const [doctor, setDoctor] = useState('random');
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/doctors?city=${city}`
        );
        setDoctorsList(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    if (formStatus === 'newForm' && city !== '') {
      fetchDoctors();
    }
  }, [formStatus, city]);

  const createNewForm = () => {
    setFormStatus('newForm');
    setFName('');
    setPhoneNumber('');
    setAge('');
    setCity('');
    setCompany('');
    setChiefComplaints('');
    setPreviousExperience('');
    setDoctor('random');
  };

  const updateFName = (value) => {
    setFName(value);
  };

  const updatePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  const updateAge = (value) => {
    setAge(value);
  };

  const updateCity = (value) => {
    setCity(value);
  };

  const updateCompany = (value) => {
    setCompany(value);
  };

  const updateChiefComplaints = (value) => {
    setChiefComplaints(value);
  };

  const updatePreviousExperience = (value) => {
    setPreviousExperience(value);
  };

  const updateDoctor = (value) => {
    setDoctor(value);
  };

  const handleSubmit = async (event) => {
    setFormStatus('saving');

    const data = {
      firstName: fName,
      phoneNumber: phoneNumber,
      age: age,
      city: city,
      company: company,
      chiefComplaints: chiefComplaints,
      previousExperience: previousExperience,
      doctor: doctor,
    };

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        data
      );
      console.log(response);
      setFormStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('newForm');
    }

    event.preventDefault();
  };

  return (
    <>
      <h2 style={{ background: "#3d2c57",color:"white", height: "40px", width: "100%", textAlign: "center" }}>🌟 YourPhysio is now FixHealth 🌟</h2>
      <div className='container' style={{ backgroundImage: `url(${image})` }}>
        <div className='bform'>
          {formStatus === 'newForm' && (
            <div className='card'>
              <h1>Book an Appointment</h1>
              <p>60+ Expert Physiotherapists for 200+ Conditions</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="yourName">Your name :</label>
                  <input
                    name="yourName"
                    type="text"
                    value={fName}
                    onChange={(e) => updateFName(e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number :</label>
                  <input
                    name="phoneNumber"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => updatePhoneNumber(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age :</label>
                  <input
                    name="age"
                    type="text"
                    value={age}
                    onChange={(e) => updateAge(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">City :</label>
                  <input
                    name="city"
                    type="text"
                    value={city}
                    onChange={(e) => updateCity(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company :</label>
                  <input
                    name="company"
                    type="text"
                    value={company}
                    onChange={(e) => updateCompany(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="chiefComplaints">Chief Complaints :</label>
                  <input
                    name="chiefComplaints"
                    type="text"
                    value={chiefComplaints}
                    onChange={(e) => updateChiefComplaints(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="previousExperience">Previous Experience with Physiotherapy</label>
                  <input
                    name="previousExperience"
                    type="text"
                    value={previousExperience}
                    onChange={(e) => updatePreviousExperience(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <h4>Doctors :</h4>
                  <select
                    defaultValue={doctor}
                    onChange={(e) => updateDoctor(e.target.value)}
                  >
                    <option value="random">Select Your Doctor</option>
                    <option value="Dr John Hopkins">Dr John Hopkins</option>
                    <option value="Dr Rusell Brand">Dr Rusell Brand</option>
                    {doctorsList.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="btn">
                  <button type="submit">Start Your Recovery</button>
                </div>
              </form>
            </div>
          )}
          {formStatus === 'saving' && (
            <div>
              <h1>Book a session</h1>
              <p>
                Fill in the form below to book a virtual session with your doctor
              </p>
              <h3>Scheduling the appointment</h3>
            </div>
          )}
          {formStatus === 'success' && (
            <div>
              <h1>Appointment Booked Successfully</h1>
              <button type="button" onClick={createNewForm}>
                Cancel Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
