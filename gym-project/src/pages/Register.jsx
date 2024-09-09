// src/pages/RegisterLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      // Handle registration
      localStorage.setItem('user', JSON.stringify({ email, name }));
      alert('Registration successful!');
    } else {
      // Handle login
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === email) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials.');
      }
    }

    navigate('/');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/view-gym-room-training-sports_23-2151699533.jpg?ga=GA1.1.292004174.1717405199&semt=ais_hybrid)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center p-6 w-full max-w-md bg-gray-700 bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-green-500 mb-8">{isSignup ? 'REGISTRATION FORM' : 'WELCOME BACK'}</h1>
        <form onSubmit={handleSubmit} className="w-full">
          {isSignup && (
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="youremail@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignup && (
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              placeholder="Confirm password"
            />
          )}
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            {isSignup ? 'Sign Up' : 'LOGIN'}
          </button>
        </form>
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="mt-4 text-blue-300 hover:underline"
        >
          {isSignup ? 'Already have an account? Login' : 'Create a new account'}
        </button>
      </div>
    </div>
  );
};

export default Register;
