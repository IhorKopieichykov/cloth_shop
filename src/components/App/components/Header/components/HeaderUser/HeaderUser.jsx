import React from 'react';
import './HeaderUser.scss';

export default function HeaderUser() {
  return (
    <div className='header__user huser'>
        <div className="huser__icon">
            <i className="ic_user"></i>
        </div>
        <div className="huser__login">
            Sign in
        </div>
    </div>
  )
}
