import React from 'react';
import { useAuth, logout } from '../firebase';
import { Form } from './';
import { useSelector, useDispatch } from 'react-redux';
import { open } from '../actions';

export default function UserForm({ saved, handleSave, handleDownload }) {
  const currentUser = useAuth();
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      await logout();
    } catch {
      console.log('something went wrong');
    }
    dispatch(open());
  }
  return (
    <div className={`user-greet ${isOpen && 'open'}`}>
      <div className='form-head container flex'>
        <div>
          <p style={{ marginTop: 0 }}>
            hi, {currentUser?.email || 'unregistered!'}
          </p>

          {currentUser ? (
            <p className='red underlined' onClick={handleLogout}>
              logout
            </p>
          ) : (
            <p className='red underlined' onClick={() => dispatch(open())}>
              log in to save your movie list
            </p>
          )}
        </div>
        {currentUser && (
          <button className={`small ${saved || 'gray'}`} onClick={handleSave}>
            {saved ? 'saved' : 'save'}
          </button>
        )}
        {isOpen && (
          <div className='line-container' onClick={() => dispatch(open())}>
            <div className='line first'></div>
            <div className='line'></div>
          </div>
        )}
      </div>

      {open && (
        <Form
          handleDownload={handleDownload}
          handleOpen={() => dispatch(open())}
        />
      )}
    </div>
  );
}
