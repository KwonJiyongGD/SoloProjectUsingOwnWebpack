import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProfile } from '../features/profileSlice';

const CreateProfileForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [info, setInfo] = useState('');

  //1
  const [gender, setGender] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      id: Date.now(),
      name,
      age,
      info,
      //gender
      gender,
      default: false,
    };
    dispatch(addProfile(newProfile));
    setName('');
    setAge('');
    //resetting text input field
    setGender('');
    setInfo('');
  };

  return (
    <div className="create-profile-form">
      <h2>What Doggo Picture Are You Today?</h2>
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
        {/* setting gender */}
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
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
