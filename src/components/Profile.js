import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProfile, updateProfile } from '../features/profileSlice';
import { fetchRandomImage } from '../module/api.js';

const Profile = ({ profile }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(profile.name);
  const [editedAge, setEditedAge] = useState(profile.age);
  //setting gender
  const [editedGender, setEditedGender] = useState(profile.gender);
  const [editedInfo, setEditedInfo] = useState(profile.info);
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile.imageUrl) {
      // Fetch a random image URL when creating a new profile
      fetchRandomImageUrl();
    } else {
      setImageUrl(profile.imageUrl);
    }
  }, []);

  const fetchRandomImageUrl = async () => {
    const randomImageUrl = await fetchRandomImage();
    setImageUrl(randomImageUrl);
  };

  const handleDelete = () => {
    dispatch(deleteProfile(profile.id));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    const editedProfile = {
      ...profile,
      name: editedName,
      age: editedAge,
      gender: editedGender,
      info: editedInfo,

      imageUrl: imageUrl,
    };
    dispatch(updateProfile(editedProfile));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedName(profile.name);
    setEditedAge(profile.age);
    setEditedGender(profile.gender);
    setEditedInfo(profile.info);
  };

  return (
    <div className="profile">
      <div className="details">
        {editMode ? (
          <div className="edit-mode">
            <input
              type="text"
              placeholder="Name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={editedAge}
              onChange={(e) => setEditedAge(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Gender"
              value={editedGender}
              onChange={(e) => setEditedGender(e.target.value)}
              required
            />
            <textarea
              placeholder="What is on your mind?"
              value={editedInfo}
              onChange={(e) => setEditedInfo(e.target.value)}
            ></textarea>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="display-mode">
            <div className="profile-image">
              {imageUrl ? (
                <img src={imageUrl} alt="Profile" />
              ) : (
                <img src={`/images/image${profile.id}.jpg`} alt="Profile" />
              )}
            </div>
            <h3>{profile.name}</h3>
            <p>Age: {profile.age}</p>
            <p>Gender: {profile.gender}</p>
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? 'Hide Info' : 'Show Info'}
            </button>
            {showInfo && <p>{profile.info}</p>}
            {!profile.default && (
              <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
