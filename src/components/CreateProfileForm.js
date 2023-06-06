import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProfile } from '../features/profileSlice';

const CreateProfileForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [info, setInfo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      id: Date.now(),
      name,
      age,
      info,
      default: false,
    };
    dispatch(addProfile(newProfile));
    setName('');
    setAge('');
    setInfo('');
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
        <textarea
          placeholder="What is on your mind?"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProfileForm;
