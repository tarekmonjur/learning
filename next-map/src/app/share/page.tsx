'use client';
import {findOrCreateUser, TUser, getLocalUserData, setLocalUserData, collectAndSendLocation} from '@/lib/firebase';
import React, { useEffect, useRef, useState } from 'react';



export default function Page() {
  const [formData, setFormData] = useState<TUser>({
    userName: null,
    mobileNumber: null,
  });
  const [shared, setShared] = useState(false);
  const shareRef = useRef<unknown>(null);

  const shareLocation = () => {
    console.log('shared......');
    shareRef.current = setInterval(() => {
      collectAndSendLocation();
    }, 10_000);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData?.userName && formData?.mobileNumber) {
      const user = await findOrCreateUser(formData);
      setLocalUserData({ ...user, shared: true });
      setShared(true);
    }
  }

  useEffect(() => {
    if (shared) {
      shareLocation();
    }

    const userData = getLocalUserData();
    if (userData?.shared) {
      setShared(true);
    }
    
  }, [shared]);

  const handleStopShare = () => {
    setLocalUserData({ shared: false });
    setShared(false);
    if (shareRef?.current) {
      clearInterval(shareRef.current as unknown as NodeJS.Timeout);
    }
  }


  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Share Location</h1>

        { !shared && <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Enter your name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your name..."
              required
              onChange={(e) => setFormData((state) => ({...state, userName: e?.target.value}))}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Enter mobile number
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your mobile number..."
              required
              onChange={(e) => setFormData((state) => ({...state, mobileNumber: e?.target.value}))}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Share Location
          </button>
        </form>}

        {shared && <button
            type="button"
            onClick={handleStopShare}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Stop Sharing
          </button>}
      </div>
    </>
  );
}
