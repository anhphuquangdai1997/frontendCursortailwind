import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng nhập tại đây
    if (email === 'test@example.com' && password === 'password') {
      // Đăng nhập thành công
    } else {
      setErrorMessage('Email hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Đăng Nhập</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Mật khẩu</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu của bạn"
              className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}

          {/* Login Button */}
          <button type="submit" className="w-full py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">
            Đăng Nhập
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Quên mật khẩu?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
