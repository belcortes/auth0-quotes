import React from 'react';

const Profile = () => (
  <form>
    <label className="label">
      Nickname
      <input className="input" type="text" />
    </label>
    <label className="label">
      Name
      <input className="input" type="text" />
    </label>
    <label className="label">
      Email
      <input className="input" type="email" />
    </label>
    <label className="label">
      Bio
      <textarea className="textarea" type="text" />
    </label>
    <label className="label">
      Birthdate
      <input type="date" name="birthday" />
    </label>
    <label className="label">
      Favorite Color
      <input type="color" />
    </label>
  </form>
);

export default Profile;
