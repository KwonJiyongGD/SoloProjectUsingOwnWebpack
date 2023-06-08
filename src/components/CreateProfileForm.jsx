// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addProfile } from '../features/profileSlice';

// const CreateProfileForm = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [info, setInfo] = useState('');

//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newProfile = {
//       name,
//       age,
//       gender,
//       info,
//     };
//     dispatch(addProfile(newProfile));
//     setName('');
//     setAge('');
//     setGender('');
//     setInfo('');
//   };

//   return (
//     <div className="create-profile-form">
//       <h2>Create Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Gender"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Info"
//           value={info}
//           onChange={(e) => setInfo(e.target.value)}
//           required
//         ></textarea>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default CreateProfileForm;

import React, { useState } from 'react';

const CreateProfileForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [info, setInfo] = useState('');

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
    </div>
  );
};

export default CreateProfileForm;
