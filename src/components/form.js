import React, { useState } from 'react';
import { signup, login } from '../firebase';
import { Input } from '.';

export default function Form({ handleDownload, handleOpen }) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(mail, password);
    } catch {
      setError(error);
    }
    setLoading(false);
    setSuccess(true);
    handleOpen(false);
  }
  async function handleLogin() {
    setLoading(true);
    try {
      await login(mail, password);
    } catch {
      setError(error);
    }
    setLoading(false);
    console.log('logged in. download movies now!');
    handleDownload();
  }
  return (
    <div className='signup-form'>
      <Input
        placeholder='Your Mail'
        value={mail}
        type='email'
        onInputChange={(e) => setMail(e)}
      />
      <Input
        placeholder='Your Password'
        value={password}
        type='password'
        onInputChange={(e) => setPassword(e)}
      />
      <p style={{ marginTop: -4 }}>
        *your data will not be shared with anybody else.
      </p>
      {success || (
        <button disabled={loading} onClick={handleSignup}>
          signup
        </button>
      )}
      <button disabled={loading} onClick={handleLogin}>
        login
      </button>

      {error !== '' && error}
      {success && <p>thanks for registering!</p>}
      <h5 className='red underlined' onClick={() => setOpenInfo(!openInfo)}>
        Do I have to sign up?
      </h5>
      {openInfo && (
        <>
          <p>
            when you sign up you can save movies and access them from different
            computers. <br />
            And your list will not be deleted upon clearing browser data.
          </p>
          <p className='red'>
            Hacking each others accounts and creating multiple fake accounts
            <br /> and suggesting bad movies to watch is stronly unrecommended
            and might RESULT INTO BANNING. NO MERCY
          </p>
        </>
      )}
    </div>
  );
}
