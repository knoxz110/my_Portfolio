import React, { useState } from 'react';
import Users from './UtilityUsers';

const EditProfile = () => {
  const { user, updateUser } = Users; // or Users() if Users is a hook/function
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: '',
    address: user?.address || ''
  });

  const [message, setMessage] = useState(null); // For success/error feedback
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    // Simple email regex for demo purposes
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage(null);
    setError(null);

    // Basic validation
    if (!formData.name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Prepare data to update
    const dataToUpdate = { ...user, ...formData };
    if (!formData.password) {
      delete dataToUpdate.password; // Only update password if provided
    }

    try {
      await updateUser(dataToUpdate); // Await if async
      setMessage('Profile updated successfully!');
      setFormData(prev => ({ ...prev, password: '' })); // Clear password field
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

      {message && <p className="mb-4 text-green-600">{message}</p>}
      {error && <p className="mb-4 text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">New Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Change password"
            autoComplete="new-password"
          />
        </div>

        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter billing address"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
