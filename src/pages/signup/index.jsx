import * as React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from '../home';

export default function Signup(){
  return (
    <div className='signin-container'>
      <div className='signin-card'>
        <div className='signin-header'>
          <h1>Realize o seu cadastro</h1>
        </div>
        <div className='signin-inputs'>
          <div className='signin-input-email'>
            <input 
              type='email'
              placeholder='Digite o seu e-mail'
              maxlength='30'
            />
          </div>
          <div className='signin-input-password'>
            <input 
              type='password'
              placeholder='Digite a sua senha'
              maxlength='8'
            />
          </div>
          <div className='signin-input-password'>
            <input 
              type='password'
              placeholder='Confirme a sua senha'
              maxlength='8'
            />
          </div>
        </div>
        <Link id='button-signup-link' to='/home'>
          <button type="button" class="btn btn-primary">Entrar</button>
        </Link>
      </div>
    </div>
  );
}
