"use client";
import React, { useState } from "react";
import Link from 'next/link'

export default function LoginPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-center text-white text-2xl">Login</h2>
      <label className='mt-2'htmlFor="username">Username</label>
      <input
        id="username"
        className="p-2  rounded-lg text-black"
        placeholder="username"
        type="text"
        onChange={(e)=>{setUser({...user, username:e.target.value})}}
        value={user.username}
      />
      <label className='mt-2' htmlFor="password">Password</label>
      <input
        id="password"
        className="p-2 rounded-lg text-black"
        placeholder="password"
        type="password"
        value={user.password}
        onChange={(e)=>{setUser({...user, password:e.target.value})}}
      />
      <button className="p-2 m-2 border border-grey-300 rounded-lg">Login here</button>
      <Link href='/signup'>Visit Signup Page</Link>
    </div>    
  );
}
