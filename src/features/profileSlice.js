import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profiles',
  initialState: {
    profiles: [
      {
        id: 1,
        name: 'GD',
        age: 34,
        info: '같은 하늘 다른 곳 너와나... 위험하니까',
      },
      {
        id: 2,
        name: 'YJ',
        age: 23,
        info: '날 가둔 혼란 속 난 누군지',
      },
      {
        id: 3,
        name: 'KMJ',
        age: 22,
        info: '머릿속에 넌 절대 지워지지가 않아 도대체',
      },
      {
        id: 4,
        name: 'LM',
        age: 26,
        info: '비가오는 날엔... 난 항상 널 그리워 해',
      },
    ],
  },
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter(
        (profile) => profile.id !== action.payload
      );
    },
    updateProfile: (state, action) => {
      const index = state.profiles.findIndex(
        (profile) => profile.id === action.payload.id
      );
      if (index !== -1) {
        state.profiles[index] = action.payload;
      }
    },
  },
});

export const { addProfile, deleteProfile, updateProfile } =
  profileSlice.actions;

export default profileSlice.reducer;
