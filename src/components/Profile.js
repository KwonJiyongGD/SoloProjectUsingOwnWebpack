import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProfile, updateProfile } from '../features/profileSlice';

const Profile = ({ profile }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(profile.name);
  const [editedAge, setEditedAge] = useState(profile.age);
  const [editedInfo, setEditedInfo] = useState(profile.info);
  const dispatch = useDispatch();

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
      info: editedInfo,
    };
    dispatch(updateProfile(editedProfile));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedName(profile.name);
    setEditedAge(profile.age);
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
            <h3>{profile.name}</h3>
            <p>Age: {profile.age}</p>
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
