import React, { useState, useEffect } from 'react';

const CreateProfileForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [info, setInfo] = useState('');
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch('http://localhost:5002/profiles');
      if (response.ok) {
        const data = await response.json();
        setProfiles(data);
      } else {
        console.log('Failed to fetch profiles.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProfile = {
      name,
      age,
      gender,
      info,
    };

    try {
      const response = await fetch('http://localhost:5002/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProfile),
      });

      if (response.ok) {
        // Data saved successfully
        setName('');
        setAge('');
        setGender('');
        setInfo('');
        console.log('Profile saved successfully!');
        fetchProfiles(); // Fetch updated profiles after saving
      } else {
        // Error saving data
        console.log('Failed to save profile.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="create-profile-form">
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <textarea
          placeholder="Info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          required
        ></textarea>
        <button type="submit">Create</button>
      </form>

      <div className="profiles">
        <h2>Profiles</h2>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <h3>{profile.name}</h3>
            <p>Age: {profile.age}</p>
            <p>Gender: {profile.gender}</p>
            <p>Info: {profile.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateProfileForm;
