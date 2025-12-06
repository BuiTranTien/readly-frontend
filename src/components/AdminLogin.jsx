import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import getBaseUrl from '../utils/baseURL';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: { 'Content-Type': 'application/json' }
      });

      const auth = response.data;
      console.log("Response từ backend:", auth);

      if (auth.token) {
        // 1. Lưu token trước
        localStorage.setItem('token', auth.token);

        // 2. Decode token + lưu thời gian hết hạn (có fix padding)
        try {
          let tokenPayload = auth.token.split('.')[1];
          // Fix lỗi base64 không có padding (=)
          tokenPayload = tokenPayload.replace(/-/g, '+').replace(/_/g, '/');
          while (tokenPayload.length % 4) {
            tokenPayload += '=';
          }

          const payload = JSON.parse(atob(tokenPayload));
          const expiresAt = payload.exp * 1000;

          localStorage.setItem('tokenExpiresAt', expiresAt);
          console.log("Token hết hạn lúc:", new Date(expiresAt).toLocaleString());
        } catch (decodeError) {
          console.error("Lỗi decode token:", decodeError);
          // Vẫn cho login, nhưng sẽ không kiểm soát được hết hạn
        }

        alert("Đăng nhập admin thành công!");
        navigate("/dashboard");
      } else {
        setMessage("Không nhận được token từ server");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setMessage("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className='h-screen border flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Admin Dashboard Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Username</label>
            <input
              {...register("username", { required: true })}
              type='text'
              id='username'
              placeholder='Nhập username'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
            <input
              {...register("password", { required: true })}
              type='password'
              id='password'
              placeholder='Nhập password'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
            />
          </div>

          {message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>}

          <div className='w-full'>
            <button type="submit" className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;