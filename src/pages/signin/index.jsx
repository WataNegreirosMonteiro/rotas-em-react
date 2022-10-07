import * as React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Signup from '../signup';
import Home from '../home';

export default function Signin(){
  return (
    <div className='signin-container'>
      <div className='signin-card'>
        <div className='signin-header'>
          <h1>Inicie sua sessão</h1>
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
        </div>
        <Link id='button-signin-link' to='/home'>
          <button type="button" class="btn btn-primary">Entrar</button>
        </Link>
        <p>Não possui conta? <Link to='/signup'>Registre-se</Link></p>
      </div>
    </div>
  );
}