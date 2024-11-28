import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([]);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  // Fetch users from "users.json"
  useEffect(() => {
    // Simulate a fetch call to get users (in a real app, use an API here)
    const fetchUsers = async () => {
      // Here we are simulating loading a JSON file (replace with actual API call in a real app)
      const response = await fetch('http://localhost:8000/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  // Handle login form submission
  const onLoginSubmit = (data) => {
    const { email, password } = data;
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert('Login Successful');
    } else {
      alert('Invalid email or password');
    }
  };

  // Handle create account form submission
  const onCreateAccountSubmit = (data) => {
    const { username, email, password } = data;

    // Check if the email already exists
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert('Email already exists');
    } else {
      // Add new user to the users array (simulating adding to JSON)
      const newUser = { username, email, password };

      // Simulate adding the new user to the users.json file (sending it back to the server)
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);

      // Simulate saving updated users array back to users.json
      saveToUsersJson(updatedUsers);

      alert('Account created successfully');
    }
  };

  // Simulate saving the updated users array back to "users.json"
  const saveToUsersJson = async (updatedUsers) => {
    // You would typically make a POST request to your server to update the users.json file
    const response = await fetch('/save-users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUsers),
    });

    if (response.ok) {
      console.log('Users saved successfully');
    } else {
      console.error('Failed to save users');
    }
  };

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Create Account' : 'Switch to Login'}
      </button>

      {isLogin ? (
        // Login Form
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button type="submit">Login</button>
        </form>
      ) : (
        // Create New Account Form
        <form onSubmit={handleSubmit(onCreateAccountSubmit)}>
          <h2>Create New Account</h2>

          <div>
            <label>Username:</label>
            <input
              type="text"
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === watch('password') || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          </div>

          <button type="submit">Create Account</button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
